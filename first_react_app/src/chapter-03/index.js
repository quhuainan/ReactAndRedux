import React from "../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import ReactDOM from "../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ClickCounter, { ProductList } from "./chapter-01/ClickCounter";
import {Provider} from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';

//import ControlPanel from './chapter-03/react_basic/src/views/ControlPanel'
import ControlPanel from "./chapter-03/redux_smart_dumb/src/views/ControlPanel";
import store from "./chapter-03/react-redux/src/Store"
ReactDOM.render(
  <Provider storr={store}>
    <ControlPanel />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
