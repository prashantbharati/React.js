// import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Calculator from "./components/calculator/calculator";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import Happy from "./components/Customhooks/Happy";
// import Form from "./components/Form/Form";
import Productlist from "./components/productlist";
// import User from "./components/Customhooks/User";
import Happyblock from "./components/Customhooks/Happyblock.js";
// import <Happyblock
function App() {
  // return <Productlist />;
  // return <Happy />;
  // return <User />;

  // return <Profile>This is react class</Profile>;
  // return <Calculator />;
  // return <Form />;

  return (
    <div>
      <div className="blockstyle"></div>

      <Happyblock />
    </div>
  );
}

export default App;
