import { StrictMode } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import "tippy.js/dist/tippy.css"
import { App } from "app/App"
import { store } from "app/store"
import "./app/index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <StrictMode>
        <Provider store={store}>
            <DndProvider backend={HTML5Backend} options={{ enableMouseEvents: true }}>
                <App />
            </DndProvider>
        </Provider>
    </StrictMode>
)
