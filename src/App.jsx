// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import { Product } from './components/Products';
import { Users } from './components/Users';
import {Route,Routes} from "react-router-dom";
import {UserDetail } from "./components/UserDetail"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userid" element={<UserDetail />}></Route>
        <Route path="*" element={<div>404 Page Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
