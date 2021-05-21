import React from 'react';

import Footercontent from './FooterContent.js';

function Footer(props) {
    const { name = 'Ian Strand\'s Footer', url1 = 'https://ianstrand.github.io/webd171-3/#home' } = props;
	    return (
<footer className="text-muted text-center">
  <Footercontent />
  <div className="footer-copyright pt-4 pb-5"><a href={url1}>&copy; 2020 {name} for WEBD171</a> </div>
</footer>
)
}

export default Footer;