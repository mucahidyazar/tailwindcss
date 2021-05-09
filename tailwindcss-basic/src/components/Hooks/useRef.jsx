import React, { useEffect, useRef, useState } from "react";

export default function Chat() {
  const chatLog = useRef(null);
  const [state, setState] = useState({
    chatMessages: [],
  });

  useEffect(() => {
    chatLog.current.scrollTop = chatLog.current.scrollHeight;
  }, [state.chatMessages]);

  return (
    <div>
      …
      <div id="chat" className="chat-log" ref={chatLog}>
        …
      </div>
      <form>…</form>
    </div>
  );
}
