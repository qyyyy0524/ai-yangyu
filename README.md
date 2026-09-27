# AI Yangyu — Personal AI Digital Twin

> A full-stack personal AI that can answer questions about Yangyu's background, skills, projects, education, experience, and career goals.

AI Yangyu is a portfolio project exploring how a personal knowledge base can be combined with a modern web interface and a large language model to create an interactive **AI digital twin**.

The current version is a working end-to-end application: users chat through a **Next.js** interface, the request is sent to a **FastAPI** backend, personal context is loaded from a structured knowledge base, and the answer is generated through the **OpenAI API**.

## ✨ Current Features

- 💬 Responsive AI chat interface built with Next.js and TypeScript
- 🎨 Custom glassmorphism-inspired portfolio UI
- ⚡ FastAPI backend with interactive API documentation
- 🤖 Real OpenAI API responses through `POST /chat`
- 🧠 Structured personal knowledge stored in `knowledge/profile.json`
- 👤 Profile, skills, projects, and current-journey presentation
- 🔒 API keys kept server-side with environment variables
- 🌐 CORS configuration for local frontend/backend integration
- 🧩 Suggested questions for quickly exploring the digital twin

## 🏗️ Architecture

```text
User
  ↓
Next.js Chat UI (localhost:3001)
  ↓
POST /chat
  ↓
FastAPI Backend (127.0.0.1:8000)
  ↓
Load knowledge/profile.json
  ↓
OpenAI API
  ↓
AI Yangyu response
  ↓
Chat UI
```

AI Yangyu is instructed to answer from the personal information supplied by the knowledge base and to avoid inventing information that is not available.

## 📁 Project Structure

```text
ai-yangyu/
├── backend/
│   └── main.py
├── frontend/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── public/
│   ├── package.json
│   └── tsconfig.json
├── knowledge/
│   └── profile.json
├── .gitignore
├── requirements.txt
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS / custom CSS

### Backend & AI
- Python
- FastAPI
- Pydantic
- OpenAI API
- JSON knowledge base

### Development
- Git & GitHub
- VS Code
- REST API

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/qyyyy0524/ai-yangyu.git
cd ai-yangyu
```

### 2. Set up the Python backend

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file in the project root:

```text
OPENAI_API_KEY=your_api_key_here
```

> Never commit your real API key. The project's `.gitignore` excludes `.env`.

Start FastAPI:

```bash
uvicorn backend.main:app --reload --port 8000
```

The backend runs at `http://127.0.0.1:8000`. FastAPI's interactive API documentation is available at `/docs`.

### 3. Start the Next.js frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev -- -p 3001
```

Open `http://localhost:3001` in your browser.

## 🔌 API

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/` | Check whether the backend is running |
| GET | `/profile` | Return the structured personal profile |
| POST | `/chat` | Send a question to AI Yangyu |

Example:

```json
{
  "message": "Who is Yangyu?"
}
```

Example response:

```json
{
  "answer": "..."
}
```

## 🧠 Personal Knowledge

The first version uses `knowledge/profile.json` as a structured personal knowledge source. It contains information such as education, technical skills, projects, interests, and career goals.

This approach keeps the first implementation simple and transparent. A future version will move toward retrieval-based knowledge so that AI Yangyu can work with a larger collection of personal documents without sending the entire knowledge base with every request.

## 🗺️ Roadmap

- [x] Build FastAPI backend
- [x] Integrate OpenAI API
- [x] Create structured personal knowledge base
- [x] Build Next.js chat interface
- [x] Connect frontend and backend
- [x] Add a custom portfolio-style UI
- [ ] Render Markdown in AI responses
- [ ] Add automatic chat scrolling and improved loading animation
- [ ] Add multi-turn conversation history
- [ ] Expand the personal knowledge base
- [ ] Add RAG / semantic retrieval
- [ ] Add Chinese and English experience
- [ ] Deploy frontend and backend
- [ ] Explore voice and avatar interaction

## 📌 Current Status

**AI Yangyu v1 — working end to end.**

The application can now accept questions in the browser, send them through the FastAPI backend, provide Yangyu's structured personal context to the model, and display the generated answer in the chat interface.

The project is actively being developed as both a personal AI experiment and a software engineering portfolio project.

---

Built by **Yangyu Que (Edward)**.
