import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import "./index.css"

import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />) //убрал React.StrictMode для того, что бы лишни консоль лог не отображался, потом поставлю обратно

reportWebVitals()
