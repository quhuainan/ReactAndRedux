import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ClickCounter,{ProductList} from './chapter-01/ClickCounter'
//import ControlPanel from './chapter-03/react_basic/src/views/ControlPanel'
import ControlPanel from './chapter-03/redux_smart_dumb/src/views/ControlPanel'

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
