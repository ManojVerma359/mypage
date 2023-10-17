import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Application from "./components/Application";
import Myproduct from "./components/Myproduct";
import Development from "./components/Development";
import Myfooter from "./components/Myfooter";

function App() {
  return (
    <>
      <Header />
      <Herosection />
      <Application />
      <Myproduct />
      <Development />
      <Myfooter />
    </>
  );
}

export default App;
