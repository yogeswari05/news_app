import React,{useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pagesize = 18;
  const apiKey = "7caad652877645a1927dc0c731d9a44a";
 
const [progress, setProgress] = useState(0)
  return (
    <div>
      <NavBar />
      <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        </div>
      <Routes>
        <Route exact path="/" element={
            <News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={18} country="in" category="general"/>
          }
        ></Route>
        <Route exact path="/business" element={
            <News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={18} country="in" category="business"/>
          }
        ></Route>
        <Route exact path="/entertainment" element={
            <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={18} country="in" category="entertainment"/>
          }
        ></Route>
        <Route exact path="/health" element={
            <News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={18} country="in" category="health"/>
          }
        ></Route>
        <Route exact path="/science" element={
            <News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={18} country="in" category="science"/>
          }
        ></Route>
        <Route exact path="/sports" element={
            <News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={18} country="in" category="sports"/>
          }
        ></Route>
        <Route exact path="/technology" element={
            <News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={18} country="in" category="technology"/>
          }
        ></Route>
      </Routes>
    </div>
    );
  }


export default App




