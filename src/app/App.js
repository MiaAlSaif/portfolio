
import { Fragment } from 'react'
// import { NavList } from '../nav'
import { NavItems } from '../nav'
import { Header } from '../header'

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <nav>
          {/* <NavList /> */}
          <NavItems />
        </nav>
      </main>
    </Fragment>
  );
}

export default App;
