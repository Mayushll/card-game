import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import {App} from './app/App';
import {Provider} from "react-redux";
import {store} from "./features/Game/store/store";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <DndProvider backend={HTML5Backend} options={{ enableMouseEvents: true }}>
              <App />
          </DndProvider>
      </Provider>
  </React.StrictMode>
);

