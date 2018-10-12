import React from 'react'
import fetch from 'cross-fetch'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'antd'
// Using the ant design lib for the form
// For documentation: https://ant.design/index-cn

import './index.scss'
import { Loading } from '../'
import { sendRequest } from '../../actions/requestInvite'
import store from '../../store';
import { API_REQUEST_INVITE } from '../../constants'


const mapStateToProps = state => ({

}) 

class RequestForm extends React.Component {
  state = {
    isLoading: false,
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ isLoading: true })
        const { fullname, email } = values

        fetch(API_REQUEST_INVITE, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: fullname, email }),
        })
          .then(res => res.json())
          .then(data => {
            let payload = null

            if (data === 'Registered') {
              payload = {
                isSuccessful: true,
                message: data,
              }
            } else {
              payload = {
                isSuccessful: false,
                message: data.errorMessage
              }
            }
            store.dispatch(sendRequest(payload))
            this.setState({ isLoading: false })
          })
      }
    })
  }

  confirmEmail = (rule, value, callback) => {
    const { form } = this.props

    if (value && value !== form.getFieldValue('email')) {
      callback('The two emails you entered are inconsistent!');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form className="App-request-form" onSubmit={this.onSubmit}>
        <Loading loading={this.state.isLoading} />

        <div className="App-text-subtitle"> Request an invite </div>

        <Form.Item>
          {
            getFieldDecorator('fullname', {
              initialValue: 'vincent',
              rules: [{ required: true, message: 'Please input your fullname' }],
            })(<Input placeholder="Full name"/>)
          }
        </Form.Item>

        <Form.Item>
          {
            getFieldDecorator('email', {
              initialValue: 'usedemail@airwallex.com',
              // initialValue: 'vincent@qq.com',
              rules: [
                { required: true, message: 'Please input your email' },
                { type: 'email', message: 'The input is not valid email!' },
              ],
            })(<Input placeholder="Email"/>)
          }
        </Form.Item>

        <Form.Item>
          {
            getFieldDecorator('confirmEmail', {
              initialValue: 'usedemail@airwallex.com',
              // initialValue: 'vincent@qq.com',
              rules: [
                { required: true, message: 'Please confirm your email' },
                { validator: this.confirmEmail },
              ],
            })(<Input placeholder="Confirm email"/>)
          }
        </Form.Item>

        <Button htmlType="submit" className="App-request-form-send"> Send </Button>
      </Form>
    )
  }
}

const DecoratedForm = Form.create()(RequestForm)

export default connect(mapStateToProps, {})(DecoratedForm)
