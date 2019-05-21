import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={Index} />
            <Route path="/demo/" component={Demo} />
            <Route path="/users/" component={Users} />
        </Router>
    );
}

export default AppRouter;