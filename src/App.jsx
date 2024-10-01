
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from 'tss-react/mui';
import "./App.css";
import Coin from './components/Coin';
import Header from "./components/Header";
import Home from "./pages/Home";

const useStyles = makeStyles()((theme) => {
  return {
    App: {
      backgroundColor:'#008b74',
      minHeight:'100vh',
      color:'white'
    },
  
  };
});
function App() {
  const  {classes}=useStyles()
  return (
    <BrowserRouter>
    <div className={classes.App}>
    <Header/>
      <Routes>
        
        <Route path="/" Component={Home} />
        <Route path="/coin/:id" Component={Coin}/>
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
