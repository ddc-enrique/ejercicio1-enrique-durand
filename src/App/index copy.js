import React, { Component } from 'react'
import Input from '../Input/index'
import logo from '../resources/logo512.png'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  onChangeInputValue = (value) =>
    this.setState({ inputValue: value })

  render() {
    const { inputValue } = this.state

    return (
      <>
        <div>
          <Input
            inputValue={inputValue}
            onChangeInputValue={this.onChangeInputValue}
          />
        </div>
        <img src={logo} alt={'logo'} />
      </>
    )
  }
}
