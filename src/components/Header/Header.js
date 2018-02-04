import React, { Component } from 'react'
import headerStyles from './header.scss'
import ItemMenu from './ItemMenu'
import PropTypes from 'prop-types'

export default class Header extends Component {

  static propTypes = {
    logoutUser: PropTypes.func.isRequired,
  }

  state = {
    items: [
      { id: 1, route: '/dashboard', name: 'Dashboard' },
      { id: 2, route: '/counter', name: 'Counter' },
      { id: 3, route: '/create-account', name: 'Criar Conta' },
      { id: 4, route: '/company', name: 'Cadastrar Empresa' },
    ]
  }

  logout = () => {
    console.log('Efetuando logout');
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
      <nav className="menu">
        <ul className="menuList">
          {this.state.items.map(item => <ItemMenu key={item.id} route={item.route} name={item.name} />)}
        </ul>
        <div className="logoutButton" onClick={this.logout}>
          <h4>Sair</h4>
        </div>
      </nav>
        <style jsx>{headerStyles}</style>
      </div>
    )
  }
}

