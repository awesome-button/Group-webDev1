import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import PostsPage from "./components/posts/PostsPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container">
        <Switch>
          <Route path="/">
            <PostsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
