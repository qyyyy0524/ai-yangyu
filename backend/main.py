import json
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from openai import OpenAI
from pydantic import BaseModel


# 读取 .env 文件
load_dotenv()

# 创建 OpenAI 客户端
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


# 创建 FastAPI 应用
app = FastAPI()


# 定义聊天请求的数据格式
class ChatRequest(BaseModel):
    message: str


# 首页
@app.get("/")
def home():
    return {
        "message": "AI Yangyu Backend is running 🚀"
    }


# 查看 Yangyu 的个人资料
@app.get("/profile")
def get_profile():
    profile_path = Path(__file__).parent.parent / "knowledge" / "profile.json"

    with open(profile_path, "r", encoding="utf-8") as file:
        profile = json.load(file)

    return profile


# 和 AI Yangyu 聊天
@app.post("/chat")
def chat(request: ChatRequest):

    # 读取 Yangyu 的个人资料
    profile_path = Path(__file__).parent.parent / "knowledge" / "profile.json"

    with open(profile_path, "r", encoding="utf-8") as file:
        profile = json.load(file)

    # 把个人资料转换成文字
    profile_text = json.dumps(
        profile,
        ensure_ascii=False,
        indent=2
    )

    # 调用 OpenAI
    response = client.responses.create(
        model="gpt-5.6-luna",

        instructions=f"""
You are AI Yangyu, the personal AI digital twin of Yangyu Que.

Answer questions about Yangyu using the personal information provided below.

If the answer cannot be found in the provided information,
say that you do not know rather than inventing information.

Yangyu's personal information:

{profile_text}
""",

        input=request.message
    )

    # 返回 AI 的回答
    return {
        "answer": response.output_text
    }