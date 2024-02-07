import React, { useEffect, useRef, useState } from "react";
import { message0 } from "../Dialog";
import { Button, TextField } from "@mui/material";


const MessageSender = (props: any) => {
  const M = props.M;
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState<any>("");

  const onChange = (e: any) => {
    setText(e.currentTarget.value);
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const addMessage = () => {
    setMessages([

      {
        id: messages.length ? messages.length + 1 : 1,
        user: message0.user,
        message: {
          text,
          time: new Date().toTimeString().slice(0, 5)
        }
      }, ...messages
    ]);
    setTimeout(() => setText(""), 4);
  };

  const onKeyDown = (e: any) => {
    e.key === "Enter" && e.shiftKey && addMessage();
  };

  return (
    <>


      <div id={"hw1-send-message-form"}>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          inputRef={textareaRef}

          title={"Shift+Enter for send"}
          placeholder={"Type your message"}
          value={text}

          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Button size="large" onClick={addMessage} variant="contained">Contained</Button>

      </div>
      {messages.map((m) => (
        <M key={m.id} message={m} />
      ))}
    </>
  );
};

export default MessageSender;
