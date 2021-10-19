import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Donate from "./components/Donate/Donate";
import Book from "./components/Book/Book";
import Error from "./components/Error/Error";
import firebaseInitialization from "./firebase/firebase.init";
import Signup from "./components/Login/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>

          <PrivateRoute path="/donate">
            <Donate></Donate>
          </PrivateRoute>

          <Route path="/book">
            <Book></Book>
          </Route>

          <Route path="/signup">
            <Signup></Signup>
          </Route>

          {/* <Route path="/services/:key">
            <Details></Details>
          </Route> */}

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
