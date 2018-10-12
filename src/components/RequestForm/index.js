import React from 'react';
import { connect } from 'react-redux'
import { Button, Form, Input } from 'antd'

import './index.scss'

const mapStateToProps = state => ({

}) 

class RequestForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
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
        <div className="App-text-subtitle"> Request an invite </div>

        <Form.Item>
          {
            getFieldDecorator('fullname', {
              rules: [{ required: true, message: 'Please input your fullname' }],
            })( <Input placeholder="Full name"/>)
          }
        </Form.Item>

        <Form.Item>
          {
            getFieldDecorator('email', {
              rules: [
                { required: true, message: 'Please input your email' },
                { type: 'email', message: 'The input is not valid email!' },
              ],
            })( <Input placeholder="Email"/>)
          }
        </Form.Item>

        <Form.Item>
          {
            getFieldDecorator('confirmEmail', {
              rules: [
                { required: true, message: 'Please confirm your email' },
                { validator: this.confirmEmail },
              ],
            })( <Input placeholder="Confirm email"/>)
          }
        </Form.Item>

        <Button htmlType="submit" className="App-request-form-send"> Send </Button>
      </Form>
    )
  }
}

const DecoratedForm = Form.create()(RequestForm)

export default connect(mapStateToProps, {})(DecoratedForm)
