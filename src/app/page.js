import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import {data} from "./components/coffeedata";
import CardSection from "./components/CardSection";
import Footer from './components/Footer';
import Card from "./components/Card";
console.log({data})

function createCard(props) {
  return <Card key={props.id} name={props.name} picture={props.picture} description={props.description} />;
}

export default function Home(props) {
  return (
    
    <div>
    <Navbar />
    <Hero1 />
    <Hero2 />
    <Hero3 />
    <CardSection />
   < Footer />
    </div>
  );
}
