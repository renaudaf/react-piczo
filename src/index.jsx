import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import '../assets/stylesheets/application.scss';
import App from "./components/app";
import { ContextProvider } from "./context";

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<ContextProvider><Router><App /></Router></ContextProvider>, root);
}
