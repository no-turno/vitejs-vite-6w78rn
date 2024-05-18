import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App mode={import.meta.env.MODE}>
      {(editor, mode) => (
        <script
          id="editor"
          type="module"
          async
          data-mode={mode}
          src={editor.url ?? ""}
        />
      )}
    </App>
  </React.StrictMode>
)
