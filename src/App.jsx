import "./App.css";
import ZZZvideo from "./assets/videos/yidharizzz.mp4";
import ListItemsUI from "./ZZZListItemsUI.jsx";
import ZZZUpperPart from "./ZZZUpperPart.jsx";
import EventCarousel from "./ZZZEventPart.jsx";

function App() {

  return (
    <>
      <div className="main-menu-container">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={ZZZvideo} type="video/mp4" />
        </video>
      </div>

      <ZZZUpperPart/>
      <ListItemsUI />
      <EventCarousel />
    </>
  );
}

export default App;
