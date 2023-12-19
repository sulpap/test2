import Button from "./Button";
import Search from "./Search";
import Navbar from "./Navbar";
//import { useState } from "react";

function Head() {
  return (
    <div style={{ backgroundColor: '#B4D4D2' }}>
      <Button onClick={() => console.log("Εγγραφή Clicked")}outlined>Εγγραφή</Button>
      <Button onClick={() => console.log("Σύνδεση Clicked")} outlined>Σύνδεση</Button>
      <Search />
      <Navbar />
    </div>
  );
}

export default Head;
