import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

const CodeEditor = ({ value, onChange }) => {
  return (
    <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <CodeMirror
        value={value}
        height="100%"
        width="100%"
        theme="dark"
        extensions={[python()]}
        onChange={(value, viewUpdate) => {
          onChange(value);
        }}
        options={{
          lineWrapping: true,
          scrollbarStyle: 'overlay'
        }}
      />
    </div>
  );
};

export default CodeEditor;
