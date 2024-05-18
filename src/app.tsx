import { EditorView, basicSetup } from "codemirror"
import {
  javascript,
  jsxLanguage,
  typescriptLanguage,
  typescriptSnippets,
} from "@codemirror/lang-javascript"
import React from "react"

function useEditor() {
  let editor = new EditorView({
    doc: `console.log(2)`,
    root: document,
    extensions: [
      basicSetup,
      javascript({
        jsx: true,
        typescript: true,
      }),
      typescriptLanguage,
    ],
    parent: document.body,
  })
  return { editor, url: "" }
}

function App({
  mode,
  children,
}: {
  mode: string
  children: (
    ctx: ReturnType<typeof useEditor>,
    options: { mode: string }
  ) => React.JSX.Element
}) {
  const editor = useEditor()
  return children(editor, { mode })
}

export default App
