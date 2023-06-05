import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode, setMode] = useState('light'); //Whether darkmode is available or not
  const[alert,setAlert]=useState(null);

  const showAlert =(message,type)=>{
    setAlert({
       msg: message,
       type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }

  return (
  <>
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
