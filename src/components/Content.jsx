import { useState } from "react";

export default function Content() {
  const [displayText, setDisplayText] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleButtonClick = () => {
    setDisplayText(textAreaValue);
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <textarea
        value={textAreaValue}
        onChange={handleTextAreaChange}
        rows="5"
        cols="50"
      />
      <br />
      <button type="button" onClick={handleButtonClick}>
        Display Text
      </button>
      <p style={{ maxWidth: "500px" }}>{displayText}</p>
    </div>
  );
}
