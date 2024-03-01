// import logo from './logo.svg';
import './App.css';
import TopBar from './quest/TopBar';
import TextForm from './quest/TextForm';
import About from './quest/About';
import React, { useState } from 'react';
import Alert from './quest/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enabled or not.
  const [alert, setAlert] = useState(null);
  // const [redMode, setRedMode] = useState('light'); //whether red mode enabled or not.
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1395);
  }
  // const redMode = ()=> {
  //   if(mode==='light') {
  //     setMode('darkRed');
  //     document.body.style.backgroundColor = '#290303';
  //     showAlert("DarkRed Mode has been enabled.", "success")
  //   }
  // }
  const toggleMode = ()=> { 
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
  <> 
  <Router>
    <TopBar title = "TextUtils" mode = {mode} toggleMode={toggleMode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
          </Route>
        </Switch>
    </div>
  </Router>
  
  </>
  );
}

export default App;
