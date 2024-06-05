import React from "react";
import twlogo from "../twlogo.png"
import { Button } from "antd";

function Home() {

  return (
    <>
      <div className="content">
      <img src={twlogo} alt="Logo" className="frontPageLogo" />
      <h3>Hello Travellers⏳</h3>
      <h4 className="hr">Welcome to TARDIS, Your Web3 Wallet</h4>
      <Button
        className="frontPageButton"
        type="primary"
      >Create a wallet</Button>
      <Button
        className="frontPageButton"
        type="default"
      >Sign in with your seed phrase</Button>
      <p className="frontPageBottom">
        Follow me on twitter:{""}
        <a href="https://x.com/0xTheDoctor" target="_blank" rel="noreferrer">@0xTheDoctor</a>
      </p>
      </div>
    </>
  );
}

export default Home;
