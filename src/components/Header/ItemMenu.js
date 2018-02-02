import React, { Component } from 'react';
import headerStyles from './header.scss'
import Link from 'next/link'
import PropTypes from 'prop-types'

class ItemMenu extends Component {
  static propTypes = {
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

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