import React from 'react';

const Nav = (props) => {
  const active = props.tab === 'PRODUCT';
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={`nav-link ${active && 'active'}`} onClick={() => { props.onNavigationChange('PRODUCT') }} href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${!active && 'active'}`} onClick={() => { props.onNavigationChange('CART') }} href="#">Cart</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;