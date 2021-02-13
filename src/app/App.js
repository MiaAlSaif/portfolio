import { Fragment } from "react";
import { NavItems } from "../nav";
import { Header } from "../header";
import './App.css'

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <nav>
          <NavItems />
        </nav>
        <div id="modal"></div>
      </main>
    </Fragment>
  );
}

export default App;
