import GlobalStyle from "./common/globalStyle";
import Contact from "./component/contact";
import Faq from "./component/faq";
import Header from "./component/header";
import Intro from "./component/intro";
import Product from "./component/product";

function App() {
  const onScroll = (activeContainer) => {
    console.log(activeContainer)
    const element = document.getElementById(activeContainer);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header handleMenuClick={onScroll} />
        <div id="home">
          <Intro handleMenuClick={onScroll} />
        </div>
        <div id="product" className="container">
          <Product />
        </div>
        <div id="faq" className="container">
          <Faq />
        </div>
        <div id="contact" className="container">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
