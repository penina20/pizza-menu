import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// function Header() {

//   const style={};

//   return (
//   <header className="header">
//   //   <h1 style={style}> Fast react pizza co.</h1></header>
//   )

// }
function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast react pizza co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <ul className="pizzas">
        {pizzaData.map((Pizza) => (
          <Pizza pizzaObj={Pizza} key={Pizza.name} />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza
       name="Pizza Salamino" 
       ingredients="Tomato, mozarella, and pepperoni" photoname="pizzas/salamino.jpg"
        price={15}
        /> */}
    </main>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <li>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  // if (hour >= openHours && hour <= closeHouse) alert("we're currely open!");
  // else alert("sorry we're closed");
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHours}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}
// return (
//   <footer className="footer">

//     {isOpen && <div className="order">

//     <p>we're open until{closeHour}:00.come visit us or order online.
//     </p>
//     <button className="btn">order</button>
//     </div>
//   )}
//   </footer>
// );

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
