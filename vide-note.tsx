import { useState } from "react";

export default function SimpleTextEditor(): JSX.Element {
  const [text, setText] = useState<string>("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-xl font-semibold mb-4 text-gray-700">Simple Text Editor</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing here..."
          className="w-full h-80 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-gray-800"
        />

        <div className="mt-4 text-sm text-gray-500">
          Characters: {text.length}
        </div>
      </div>
    </div>
  );
}