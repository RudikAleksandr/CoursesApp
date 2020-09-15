import React from 'react';
import './Breadcrumbs.scss';

function Breadcrumbs(props: {}) {
  return (
    <nav className="breadcrumbs breadcrumbs-height">
      <ol className="breadcrumb breadcrumbs__item content-padding">
        <li className="breadcrumb__item">
          <a href="" 
            className="breadcrumbs__link">
            Courses
          </a>
        </li>
        <li className="breadcrumb__item">
            <span className="breadcrumbs__link">Courses/</span>
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
