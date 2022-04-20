import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHundler = () => {
    setCartIsShown(true);
  };

  const hideCartHundler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHundler}/>}
      <Header onShowCart={showCartHundler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
