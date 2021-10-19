import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import Donate from "./components/Donate/Donate";
import Book from "./components/Book/Book";
import Error from "./components/Error/Error";
import firebaseInitialization from "./firebase/firebase.init";
import Signup from "./components/Login/Signup";
firebaseInitialization();

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/donate">
            <Donate></Donate>
          </Route>

          <Route path="/book">
            <Book></Book>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
