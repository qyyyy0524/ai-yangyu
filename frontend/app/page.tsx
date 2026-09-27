"use client";

import { FormEvent, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const prompts = [
  "Tell me about your projects",
  "What are your main skills?",
  "What are your career goals?",
  "Why did you build AI Yangyu?",
];

const nav = [
  ["✦", "Chat"],
  ["◎", "About me"],
  ["⌁", "Skills"],
  ["▱", "Projects"],
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m AI Yangyu — a personal AI built around Yangyu’s experiences, skills, projects and goals. Ask me anything about his journey in computer science.",
    },
  ]);
  const [input, setInput] = useState("");

  function sendMessage(event?: FormEvent) {
    event?.preventDefault();
    const value = input.trim();
    if (!value) return;
    setMessages((current) => [
      ...current,
      { role: "user", content: value },
      {
        role: "assistant",
        content:
          "The interface is ready. In the next step, this message will come from the FastAPI + OpenAI backend instead of this placeholder.",
      },
    ]);
    setInput("");
  }

  return (
    <main className="shell">
      <aside className="sidebar glass">
        <div className="brand">
          <span className="brandMark">Y</span>
          <div><strong>AI YANGYU</strong><small>Personal AI Digital Twin</small></div>
        </div>
        <nav>
          {nav.map(([icon, label], index) => (
            <button className={index === 0 ? "navItem active" : "navItem"} key={label}>
              <span>{icon}</span>{label}
            </button>
          ))}
        </nav>
        <div className="sideQuote">
          <span>“</span>
          <p>Build, learn,<br />become better.</p>
          <small>— Yangyu</small>
        </div>
        <div className="sideStatus"><i /> AI Yangyu is online</div>
      </aside>

      <section className="workspace">
        <header className="hero">
          <div>
            <span className="eyebrow">PERSONAL AI · PORTFOLIO PROJECT</span>
            <h1>Meet <em>AI Yangyu.</em></h1>
            <p>A digital version of my journey — built from my projects, skills, experiences and ambitions.</p>
          </div>
          <div className="heroOrb"><span>Y</span></div>
        </header>

        <div className="featureRow">
          <article><span className="featureIcon blue">⌘</span><div><b>Know me</b><small>Background & experience</small></div></article>
          <article><span className="featureIcon amber">◇</span><div><b>Explore my work</b><small>Projects & technologies</small></div></article>
          <article><span className="featureIcon violet">✦</span><div><b>Chat freely</b><small>Ask AI Yangyu anything</small></div></article>
        </div>

        <section className="chat glass">
          <div className="chatTop">
            <div><span className="onlineDot" /><b>AI Yangyu</b><small>Digital twin · Online</small></div>
            <span className="modelPill">AI powered</span>
          </div>

          <div className="messages">
            {messages.map((message, index) => (
              <div className={message.role === "user" ? "messageRow user" : "messageRow"} key={index}>
                {message.role === "assistant" && <span className="avatar">Y</span>}
                <div className="bubble">{message.content}</div>
              </div>
            ))}
          </div>

          <div className="promptRow">
            {prompts.map((prompt) => (
              <button key={prompt} onClick={() => setInput(prompt)}>{prompt}</button>
            ))}
          </div>

          <form className="composer" onSubmit={sendMessage}>
            <span className="plus">＋</span>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything about Yangyu..." />
            <button className="send" type="submit">↑</button>
          </form>
          <p className="hint">AI Yangyu answers from a personal knowledge base · Built with Next.js, FastAPI & OpenAI</p>
        </section>
      </section>

      <aside className="profileColumn">
        <div className="profileCard glass">
          <div className="cover"><span className="coverGlow" /></div>
          <div className="profileAvatar">Y<span /></div>
          <h2>Yangyu Que</h2>
          <p className="role">Edward · Computer Science @ UWA</p>
          <p className="bio">Building software, exploring AI, and turning ideas into useful products.</p>
          <div className="tags"><span>Software</span><span>AI</span><span>Full-stack</span></div>
          <div className="stats">
            <div><b>3+</b><small>Projects</small></div>
            <div><b>5</b><small>Languages</small></div>
            <div><b>∞</b><small>Learning</small></div>
          </div>
        </div>

        <div className="journey glass">
          <div className="sectionTitle"><span>✦</span><b>Current journey</b></div>
          <div className="timeline">
            <div><i /><p><b>Computer Science</b><small>University of Western Australia</small></p></div>
            <div><i /><p><b>AI Yangyu</b><small>Personal digital twin · Building now</small></p></div>
            <div><i /><p><b>Next goal</b><small>Software engineering internship</small></p></div>
          </div>
        </div>

        <div className="stack glass">
          <div className="sectionTitle"><span>⌘</span><b>Core stack</b></div>
          <div className="stackTags"><span>Python</span><span>Java</span><span>Next.js</span><span>FastAPI</span><span>Django</span><span>SQL</span></div>
        </div>
      </aside>
    </main>
  );
}
