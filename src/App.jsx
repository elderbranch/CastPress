import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header/Header';
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HomePage/>
        {/* <Routes>
          
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
