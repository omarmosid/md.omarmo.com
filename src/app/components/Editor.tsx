"use client";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { useState } from "react";

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;

type EditorProps = {};

const Editor: React.FC<EditorProps> = () => {
  const [markdown, setMarkdown] = useState(mdStr);

  return (
    <>
      <div className="grid grid-cols-2 h-screen">
        <MarkdownEditor
          value={markdown}
          height="200px"
          onChange={(value, viewUpdate) => setMarkdown(value)}
        />{" "}
        <MarkdownEditor.Markdown source={markdown}
            style={{
                padding: 10
            }}
        />
      </div>
    </>
  );
};

export { Editor };
