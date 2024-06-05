import "./App.css";
import {useState} from "react"
import logo from "./moralisLogo.svg"
import {Select} from "antd"
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import tardis from "./tardis.png"
function App() {
  const[selectedChain, setSelectedchain]= useState("0x1")

  return (
    <div className="App">
      <header>
        <img src={tardis} className="headerLogo" alt="logo" />
        <Select
          onChange={(val)=>setSelectedchain(val)}
          value={selectedChain}
          options={[
            {
              label: "Ethereum",
              value: "0x1"
            },
            {
              label: "Polygon Mumbai Testnet",
              value: "0x89"
            },
            {
              label: "Avalanche C-Chain",
              value: "0xa86a"
            },
          ]} 
          className="dropdown"
          ></Select>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
