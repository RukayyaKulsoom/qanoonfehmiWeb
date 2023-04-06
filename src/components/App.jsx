// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './signup';
import Login from './login';
import Main from './main';
import Textedit from './textedit';
import Displayfiles from './displayfiles';
import Displaymessages from './displaymsgs';
import Updatefileeditor from './updatefileeditor';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/stats" element={<Main />}></Route>
        <Route exact path="/texteditor" element={<Textedit />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/displayfiles" element={<Displayfiles />}></Route>
        <Route exact path="/displaymessages" element={<Displaymessages />}></Route>
        <Route exact path="/Updatefileeditor" element={<Updatefileeditor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
