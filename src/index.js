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
  const pizza = pizzaData;
  const numPizzas = pizza.length;
  return (
    <main className="Menu">
      <h2>our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authetic italia cuisine.6 cretive dishes to choose from.All from our
            stone over,all organic,all delicious
          </p>
          <ul className="pizzas">
            {pizza.map((Pizza) => (
              <Pizzas pizzaObj={Pizza} key={Pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on the menu.please come back later:)</p>
      )}

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
      /> */}
    </main>
  );
}

function Pizzas({ pizzaObj }) {
  console.log(pizzaObj);
  const price = "0.0";
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

// function Pizza(props) {
//   const pizza = props.pizzaObj || {}; // Assign an empty object if pizzaObj is null/undefined

//   console.log(pizza);

//   if (pizza.soldOut) return null;

//   return (
//     <li>
//       <img src={pizza.photoName || "default_pizza.jpg"} alt={pizza.name} />
//       <div>
//         <h3>{pizza.name || "Unknown Pizza"}</h3>
//         <p>{pizza.ingredients || "No ingredients provided"}</p>
//         <span>{pizza.price || "Price unavailable"}</span>
//       </div>
//     </li>
//   );
// }

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  // if (hour >= openHours && hour <= closeHouse) alert("we're currely open!");
  // else alert("sorry we're closed");

  //  if(!isOpen)
  //   return(
  //   <p>we're happy to welcome you from {openHours}:00 and {closeHours}:00</p>
  // );
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHours}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          we're happy to welcome you from {openHours}:00 and {closeHours}:00
        </p>
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
// </main>
