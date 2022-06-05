import React, { Fragment } from "react";
import "./App.module.scss";
import ContextProvider from "../../store/ShopContextProvider/ShopContextProvider";

import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";
import Footer from "../../layout/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </Fragment>
  );
};

export default App;
