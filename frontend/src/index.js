import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import Store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot instead of render
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
