import React, { MouseEvent } from 'react';
import './Header.scss';

type Props = {
  userFirstName: string,
  userLastName: string
}

function Header({ userFirstName, userLastName }: Props) {
  const handleClickLogOff = (event: MouseEvent): void => {
    event.preventDefault();
  }

  return (
    <header className="header container-fluid content-padding header-height">
      <div className="header__row row">
        <div className="header__title-block col">
          <h1 className="header__title">
            <a href=""
              className="header__link-course">
              video course
            </a>
          </h1>
        </div>
        <div className="header__user-info col">
          <span className="header__user-info_name">{userFirstName}</span>
          <span className="header__user-info_name">{userLastName}</span>
        </div>
        <div className="header__links col">
          <button className="header__btn-log-of"
            onClick={handleClickLogOff}>
            Log off
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
