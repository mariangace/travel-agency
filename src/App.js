import "./App.css";
import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <Card accomodation={100} country="Nepal" image="https://images.unsplash.com/photo-1529733905113-027ed85d7e33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"/> 
          <Card accomodation={200} country="Italy" image="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1998&q=80”"/> 
        </div>
      </div>
    </div>
  );
}

export default App;
