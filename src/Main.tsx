import React from "react";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPopUp from "./components/ItemPopUp";
import Cart from "./components/Cart";
import { Catalog } from "./reducers/reducer";

const Main = () => {
  const [showForm, setShowForm] = React.useState<boolean>(false);
  const [seed, setSeed] = React.useState<number>(0);
  const [selectedItem, setSelectedItem] = React.useState<Catalog | undefined>();
  const setItem = (id: number, name: string, price: number, imgSrc: string) => {
    setSelectedItem({
      id: id,
      name: name,
      price: price,
      imgSrc: imgSrc,
    });
  };
  return (
    <BrowserRouter>
      <Navbar seed={seed} />
      {showForm === true ? (
        <ItemPopUp item={selectedItem} hideForm={() => setShowForm(false)} />
      ) : null}
      <Routes>
        <Route
          path="/reduxshop/"
          element={
            <Shop
              showForm={() => setShowForm(true)}
              hideForm={() => setShowForm(false)}
              setSelectedItem={setItem}
            />
          }
        />
        <Route
          path="/reduxshop/cart"
          element={
            <Cart seed={seed} seedChange={() => setSeed(Math.random())} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
