import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { About } from "./pages/About";
import { User } from "./pages/User";
import { Navbar } from "./components/Navbar";
// import usersDetail from "./pages/usersDetail";
import UserDetail from "./pages/UserDetail";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Outlet />
      <footer>2024</footer>
    </div>
  );
}

export default App;
