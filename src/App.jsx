
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from 'tss-react/mui';
import "./App.css";
import Currency from "./pages/Currency";
import Home from "./pages/Home";

const useStyles = makeStyles()((theme) => {
  return {
    App: {
      backgroundColor:''
    },
  
  };
});
function App() {
  const  {classes}=useStyles()
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Routes>
        
        <Route path="/" Component={Home} />
        <Route path="/currency/:id" Component={Currency} />
        
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
