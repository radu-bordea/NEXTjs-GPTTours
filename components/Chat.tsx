"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { generateChatResponse } from "../utils/actions";

const Chat = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState<string[]>([]);

  const { mutate } = useMutation({
    mutationFn: (message: string) => generateChatResponse(message),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(text);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col">
      {/* Messages section */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-5xl mb-4">Messages</h2>
        {/* messages here */}
      </div>

      {/* Input form fixed at bottom */}
      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GPTTours"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-primary join-item capitalize"
            type="submit"
          >
            ask question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
