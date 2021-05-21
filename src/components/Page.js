import React from 'react';

import Navbarwith from './Navbar.js';
import Bodynav from './Body.js';
import Footer from './Footer.js';

class Page extends React.Component {
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

export default Page;