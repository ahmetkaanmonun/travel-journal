import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { data } from "./data";

export default function App() {
  const cards = data.map((card) => {
    return <Card {...card} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
