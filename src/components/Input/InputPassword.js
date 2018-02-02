import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './input.scss'
import { HasCapitalLetter, HasNumber } from '../../utils/helpers'

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  }

  state = {
    password: '',
    hit: {
      length: false,
      camelCase: false,
      number: false
    }
  }

  trustColor = (number) => {
    switch(number){
      case 1:
        return "oneStep"
      case 2:
        return "twoStep"
      case 3:
        return "threeStep"
      default:
        return "defaultStep"
    }
  }

  renderStrength = () => {
    const trustValues = Object.values(this.state.hit).filter(t => t).length;
    const trustClass = this.trustColor(trustValues);
    return (
      <div className={`containerSteps ${trustClass}`}>
        <div></div>
        <div></div>
        <div></div>
        <style jsx>{styles}</style>
      </div>
    )
  }

  renderDefaultRules = () => (
    <ul className="containerRules">
      <li><span>Pelo menos 6 caracteres</span></li>
      <li><span>Pelo menos uma letra maiúscula</span></li>
      <li><span>Pelo menos um numero</span></li>
      <style jsx>{styles}</style>
    </ul>
  )

  renderRules = () => (
    <ul className="containerRules">
      <li className={this.state.hit.length ? "valid" : "invalid"}><span>Pelo menos 6 caracteres</span></li>
      <li className={this.state.hit.camelCase ? "valid" : "invalid"}><span>Pelo menos uma letra maiúscula</span></li>
      <li className={this.state.hit.number ? "valid" : "invalid"}><span>Pelo menos um numero</span></li>
      <style jsx>{styles}</style>
    </ul>
  )

  handleInput = (input) => {
    this.setState({ password: input.target.value }, this.showFeedback)
  }

  showFeedback = () => {
    const hit = Object.assign({}, {
      length: this.state.password.length > 5,
      camelCase: HasCapitalLetter(this.state.password),
      number: HasNumber(this.state.password)
    })

    this.setState({ hit: hit });
  }

  render() {
    const { label } = this.props;
    return (
      <div className="boxInput">
        <label>{label}</label>
        <input type="password" value={this.state.password} onChange={this.handleInput} ></input>
        {this.renderStrength()}
        {this.state.password.length ? this.renderRules() : this.renderDefaultRules()}
        <style jsx>{styles}</style>
      </div>
    )
  }
}
