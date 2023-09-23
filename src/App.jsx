import Maincontent from "./components/MainContent";
import Sidebar from "./components/sidebar";

import "./styles/components/app.sass";

function App() {

  return (
    <>
      <div id="portfolio">
        <h1>César Trujillo Corrêa</h1>
        <Sidebar />
        <Maincontent />
      </div>
    </>
  )
}

export default App
