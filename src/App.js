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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Signup from './components/Login/Signup'
import Details from "./components/Details/Details";
import AuthProvider from "./context/AuthProvider";

firebaseInitialization();

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

            <PrivateRoute path="/donate">
              <Donate></Donate>
            </PrivateRoute>

            <PrivateRoute path="/book">
              <Book></Book>
            </PrivateRoute>
          
            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="/details/:serviceId">
              <Details></Details>
            </Route>

            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
