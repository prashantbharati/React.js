// import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Calculator from "./components/calculator/calculator";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Happy from "./components/Customhooks/Happy";
// import Form from "./components/Form/Form";
import Productlist from "./components/productlist";
import User from "./components/Customhooks/User";
import Happyblock from "./components/Customhooks/Happyblock.js";
import TodoApp from "./components/Todo/TodoApp/TodoApp";
import Routing from "./components/Routing";

import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

// import <Happyblock
function App() {
  // return <Productlist />;
  // return <Happy />;
  // return <User />;
  // return <TodoApp />;
  // return <Routing />;
  // return <Profile>This is react class</Profile>;
  // return <Calculator />;
  // return <Form />;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">TodoApp</Link>
          </li>
          <li>
            <Link to="/productList">Productlist</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
