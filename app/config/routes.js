// Include the React library
var React = require("react");
var router = require("react-router");
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var App = require("../Components/App");



// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      

    </Route>
  </Router>

);