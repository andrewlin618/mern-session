import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return ( 
    <div className="App" >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  const handleClick = () => {
    axios.get('/api')
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div className="home">
      <h1>Home</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
function Dashboard() {
  return (
    <h1>Dashboard</h1>
  )
}
function Login() {
  return (
    <h1>Login</h1>
  )
}
function NotFound() {
  return (
    <h1>NotFound</h1>
  )
}

export default App;
