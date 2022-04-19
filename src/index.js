import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Second from './Pages/Second';
// import First from './Pages/First';
import MyRoutes from './MyRoutes';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    <MyRoutes />
  </React.StrictMode>,
  document.getElementById('root')
);
