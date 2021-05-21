import React from 'react';

import Footercontent from './FooterContent.js';

function Footer(props) {
    const { name = 'Ian Strand\'s Footer', url1 = 'http://localhost:3000/#home' } = props;
	    return (
<footer className="text-muted text-center">
  <Footercontent />
  <div className="footer-copyright pt-4 pb-5"><a href={url1}>&copy; 2020 {name} for WEBD171</a> </div>
</footer>
)
}

export default Footer;