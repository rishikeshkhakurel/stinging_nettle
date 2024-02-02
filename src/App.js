import GlobalStyle from "./common/globalStyle";
import Contact from "./component/contact";
import Faq from "./component/faq";
import Header from "./component/header";
import Intro from "./component/intro";

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
          <Intro />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
