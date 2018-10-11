import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Input, Button } from '../'
import './index.scss'

const mapStateToProps = state => ({

}) 

class RequestForm extends Component {

  state = {
    validating: false,
    fullname: '',
    email: '',
    confirmEmail: '',
  }

  onChange = (e) => {
    const field = e.target.name

    this.setState({
      [field]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      validating: true,
    })
  }

  render() {
    return (
      <form className="App-request-form" onSubmit={this.onSubmit} ref="form">
        <div className="App-text-subtitle"> Request an invite </div>

        <Input
          value={this.state.fullname}
          require
          name="fullname"
          onChange={this.onChange}
          placeholder="Full name"
        />

        <Input
          value={this.state.email}
          name="email"
          onChange={this.onChange}
          placeholder="Email"
        />

        <Input
          value={this.state.confirmEmail}
          name="confirmEmail"
          onChange={this.onChange}
          placeholder="Confirm email"
        />

        <Button
          size="s"
          className="App-request-form-send"
        >
          Send
        </Button>
      </form>
    )
  }
}

export default connect(mapStateToProps, {})(RequestForm)
