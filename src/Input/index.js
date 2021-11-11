import React, { Component } from 'react'
import { getFakeData1, getFakeData2 } from '../fakeRequest'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValueInComponent: ''
    }
  }

  async componentDidMount() {
    const firstNameWithId = await getFakeData1()
    const lastNameWithId = await getFakeData2()

    console.log({firstNameWithId, lastNameWithId})
  }

  componentDidUpdate(prevProps) {
    if(prevProps.inputValue !== this.props.inputValue) {
      this.setState({
        inputValueInComponent: this.props.inputValue
      })
    }
  }

  render() {
    const { inputValueInComponent } = this.state
    const { onChangeInputValue } = this.props

    return (
      <input
        onChange={e => onChangeInputValue(e.target.value)}
        value={inputValueInComponent}
      />
    )
  }
}