
import React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500)
  }
 
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }

const toggleMode = (cls)=>{
  // removeBodyClasses();
  document.body.classList.add('bg-'+cls)
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor = '#061f44';
    showAlert("Dark mode has been enabled","success")
    document.title = 'TextUtils - Dark Mode'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success")
    document.title = 'TextUtils - Light Mode'
  }
}


  return (
   <>
   {/* <Navbar title= "TextUtils" aboutText = "About Us" />  */}
   {/* <Router> */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>
        <div className='container my-3'>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* </Routes> */}
        </div>
    {/* </Router> */}
   </>
  );
}

export default App;
