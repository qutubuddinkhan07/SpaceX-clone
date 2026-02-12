import { data } from "./assets/data";
import Footer from "./footer/Footer";
import Herocomponent from "./herosection/Herocomponent";
import Navbar from "./nav/Navbar";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      {data.map((section, idx) => {
        return (
          <Herocomponent
            key={idx}
            data={section}
            hero_className={`hero1 ${idx === 1 ? "shadow-right" : idx === 2 ? "shadow-left" : idx === 4 ? "shadow-down" : null}`}
            className={`textbox-inner ${idx == 0 ? "textbox1" : idx === 1 ? "textbox2" : idx === 2 ? "textbox3" : idx === 3 ? "textbox4" : "textbox5"}`}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
