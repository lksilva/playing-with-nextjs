import React, { Component } from 'react';
import headerStyles from './header.scss'
import Link from 'next/link'

class ItemMenu extends Component {
  render() {
    const { route, name } = this.props;
    return (
      <li className='menuItem'>
        <Link href={route}>
          <a className="menuLink">{name}</a>
        </Link>
        <style jsx>{headerStyles}</style>
      </li>
    );
  }
}

export default ItemMenu;