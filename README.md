# AI Yangyu — Personal AI Digital Twin

AI Yangyu is a personal AI digital twin designed to answer questions about Yangyu's background, skills, projects, education, and experience.

The project currently combines a **FastAPI backend**, the **OpenAI API**, and structured personal knowledge stored in JSON. A web chat interface and retrieval-based knowledge system are planned next.

## Current Features

- FastAPI backend with interactive API documentation
- `GET /profile` endpoint for structured profile data
- `POST /chat` endpoint for conversations with AI Yangyu
- OpenAI API integration
- Personal knowledge loaded from `knowledge/profile.json`
- Environment-variable based API key management

## Project Structure

```text
ai-yangyu/
├── backend/
│   └── main.py
├── frontend/
├── knowledge/
│   └── profile.json
├── .gitignore
├── requirements.txt
└── README.md
```

## How It Works

```text
User question
    ↓
FastAPI /chat
    ↓
Load personal knowledge from profile.json
    ↓
OpenAI API
    ↓
AI Yangyu response
```

The current version sends the structured profile as context so the model can answer questions about Yangyu. If information is not available in the provided knowledge, the assistant is instructed not to invent it.

## Run Locally

### 1. Create and activate a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure the API key

Create a local `.env` file in the project root:

```text
OPENAI_API_KEY=your_api_key_here
```

The real `.env` file is excluded from Git and must never be committed.

### 4. Start the backend

```bash
uvicorn backend.main:app --reload
```

Then open `http://127.0.0.1:8000/docs` to test the API with FastAPI's interactive documentation.

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/` | Check whether the backend is running |
| GET | `/profile` | Return Yangyu's structured profile |
| POST | `/chat` | Ask AI Yangyu a question |

Example request:

```json
{
  "message": "Who is Yangyu?"
}
```

## Tech Stack

- Python
- FastAPI
- OpenAI API
- Pydantic
- JSON
- Git & GitHub

## Roadmap

- Build a responsive chat frontend
- Connect the frontend to the FastAPI backend
- Add conversation history
- Expand the personal knowledge base
- Introduce RAG for more scalable knowledge retrieval
- Deploy the frontend and backend
- Explore bilingual, voice, and avatar experiences

## Status

**Backend v1: working**

AI Yangyu can currently answer questions using the personal profile stored in the project's knowledge base.

---

Built as a personal AI and software engineering portfolio project.
