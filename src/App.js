import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";

import { db } from "./firebase.js";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(()=> {
    db.collection("cards").onSnapshot((snapshot) => {
      let tempCards = [];
      snapshot.docs.map((doc) => 
        tempCards.push({
          id: doc.id,
          image: doc.data().image,
          country: doc.data().country,
          city: doc.data().city,
          accomodations: doc.data().accomodations,        
        })
      )
      setCards(tempCards);
    })
  },[]);
  
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          {cards.map((card, index) => (
              <Card 
                key ={index}
                image={card.image}
                country={card.country}
                // city={card.city}
                accomodations={card.accomodations}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
