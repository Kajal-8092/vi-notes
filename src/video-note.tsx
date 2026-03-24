import { useState, ChangeEvent } from "react";

export default function SimpleTextEditor() {
  const [text, setText] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const clearText = () => setText("");

  const saveText = () => {
    localStorage.setItem("simpleTextEditorDraft", text);
    alert("Draft saved to local storage.");
  };

  const loadText = () => {
    const saved = localStorage.getItem("simpleTextEditorDraft");
    if (saved) setText(saved);
    else alert("No saved draft found.");
  };

  return (
    <div className="editor-shell">
      <div className="editor-card">
        <h1 className="editor-title">Simple Text Editor</h1>

        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Start typing here..."
          className="editor-textarea"
        />

        <div className="editor-actions">
          <button onClick={saveText} className="editor-btn editor-btn-primary">Save</button>
          <button onClick={loadText} className="editor-btn">Load</button>
          <button onClick={clearText} className="editor-btn editor-btn-clear">Clear</button>
        </div>

        <div className="editor-meta">
          <div>Characters: <span>{text.length}</span></div>
          <div>Words: <span>{text.trim() ? text.trim().split(/\s+/).length : 0}</span></div>
        </div>
      </div>
    </div>
  );
}