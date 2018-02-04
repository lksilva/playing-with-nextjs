import React, { Component } from 'react'
import Link from 'next/link'
import headerStyles from './header.scss'
import ItemMenu from './ItemMenu'

export default class Header extends Component {

  state = {
    items: [
      { id: 1, route: '/dashboard', name: 'Dashboard' },
      { id: 2, route: '/counter', name: 'Counter' },
      { id: 3, route: '/create-account', name: 'Criar Conta' },
    ]
  }

  render() {
    return (
      <div>
      <nav className="menu">
        <ul className="menuList">
          {this.state.items.map(item => <ItemMenu key={item.id} route={item.route} name={item.name} />)}
        </ul>
      </nav>
        <style jsx>{headerStyles}</style>
      </div>
    )
  }
}

