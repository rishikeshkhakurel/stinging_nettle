import GlobalStyle from "./common/globalStyle";
import Contact from "./component/contact";
import Faq from "./component/faq";
import Header from "./component/header";
import Intro from "./component/intro";

function App() {
  return (
    <>
    <GlobalStyle/>
      <div className="App">
        <Header />
        <Intro/>
        <Faq/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
