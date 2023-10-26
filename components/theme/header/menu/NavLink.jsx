import React from 'react';

const NavLink = ({ url, nome }) => {
  return (
    <li>
      <a className='nav-item nav-link' href={url}>{nome}</a>

    </li>
  );
}

export default NavLink;