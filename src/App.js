import React from 'react';
import './App.css';

import Navbarwith from './components/Navbar.js';
import Bodynav from './components/Body.js';
import Footer from './components/Footer.js';

class App extends React.Component {
    render() {
      return (
<React.Fragment>
  <Navbarwith />
  <Bodynav />
  <Footer />
</React.Fragment>
);
  }
}

export default App;