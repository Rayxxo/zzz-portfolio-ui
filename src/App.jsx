import "./App.css";
import ZZZvideo from "./assets/videos/yidharizzz.mp4";
import ListItemsUI from "./ZZZListItemsUI.jsx";

function App() {

  return (
    <>
      <div className="main-menu-container">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={ZZZvideo} type="video/mp4" />
        </video>
      </div>

      <ListItemsUI />
      <p>zzz stuff</p>
    </>
  );
}

export default App;
