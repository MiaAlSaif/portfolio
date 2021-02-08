
import { Fragment } from 'react'
import { NavList } from '../nav'
import { Header } from '../header'

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <nav>
          <NavList />
        </nav>
      </main>
    </Fragment>
  );
}

export default App;
