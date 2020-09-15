import React from 'react';
import './Footer.scss';

function Footer(props: any) {
  return (
    <footer className="footer footer-height container-fluid content-padding">
      <div className="footer__row row">
          <div className="footer__copyright col">
            <span>Copyright &copy; Videocourses. All rights reserved</span>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
