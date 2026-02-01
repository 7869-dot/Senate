import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [prompt, setPrompt] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const text = prompt.trim();
    if (!text) return;
    // For now: just clear (wire this to your chatbot later)
    setPrompt("");
  };

  return (
    <div className="app">
      {/* Subtle background ornaments */}
      <div className="bgOrnament bgOrnament--left" aria-hidden="true" />
      <div className="bgOrnament bgOrnament--right" aria-hidden="true" />

      <main className="shell">
        <h1 className="title">
          Let's begin
        </h1>

        <form className="promptWrap" onSubmit={onSubmit}>
          <button
            type="button"
            className="iconBtn iconBtn--left"
            aria-label="New chat"
            title="New chat"
            onClick={() => {
              // optional: clear conversation
              setPrompt("");
            }}
          >
            <span className="icon">＋</span>
          </button>

          <label className="promptField">
            <span className="srOnly">Prompt</span>
            <input
              className="promptInput"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask anything"
              spellCheck="false"
            />
          </label>

          <div className="actions">
            <button
              type="button"
              className="iconBtn"
              aria-label="Voice"
              title="Voice"
              onClick={() => {
                // hook to speech-to-text later
              }}
            >
              {/* mic svg */}
              <svg
                className="svgIcon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 19v3M8 22h8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <button
              type="submit"
              className="sendBtn"
              aria-label="Send"
              title="Send"
            >
              {/* “ancient” seal button look */}
              <span className="seal" aria-hidden="true" />
              <svg
                className="svgIcon svgIcon--send"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M4 12l16-8-6.5 18-2.8-7.2L4 12Zm6.7 3.6L20 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
