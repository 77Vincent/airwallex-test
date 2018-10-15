import React from 'react'
import fetch from 'cross-fetch'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'antd'
// Using the ant design lib for the form
// For documentation: https://ant.design/index-cn

import './index.scss'
import { Loading } from '../'
import { setRegistrationStatus } from '../../actions/requestInvite'
import { toggleStatus } from '../../actions/general';
import { TOGGLE_REQUEST_INVITE_FORM_VISIBILITY, TOGGLE_REQUEST_SENDING_STATUS } from '../../actions/types';
import { API_REQUEST_INVITE } from '../../constants'
import store from '../../store';


const mapStateToProps = state => ({
  requestInviteForm: state.requestInviteForm,
}) 

class RequestForm extends React.Component {
  onSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        store.dispatch(toggleStatus(TOGGLE_REQUEST_SENDING_STATUS, true))
        const { fullname, email } = values

        let payload = null

        fetch(API_REQUEST_INVITE, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: fullname, email }),
        })
          .then(res => res.json())
          .then(data => {

            if (data === 'Registered') {
              payload = {
                isRegistered: true,
                isError: false,
                message: data,
              }
              store.dispatch(toggleStatus(TOGGLE_REQUEST_INVITE_FORM_VISIBILITY, false))
            } else {
              payload = {
                isRegistered: false,
                isError: true,
                message: data.errorMessage
              }
            }

            store.dispatch(setRegistrationStatus(payload))
            store.dispatch(toggleStatus(TOGGLE_REQUEST_SENDING_STATUS, false))
          })
          .catch(error => {
            payload = {
              isRegistered: false,
              isError: true,
              message: 'Please try later',
            }
            store.dispatch(setRegistrationStatus(payload))
            store.dispatch(toggleStatus(TOGGLE_REQUEST_SENDING_STATUS, false))
          })
      }
    })
  }

  confirmEmail = (rule, value, callback) => {
    const { form } = this.props

    if (value && value !== form.getFieldValue('email')) {
      callback('The two emails you entered are inconsistent!')
    } else {
      // According to the documentation, this callback must be invoked
      callback()
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { requestInviteForm } = this.props

    return (
      <Form className="App-request-form" onSubmit={this.onSubmit}>
        <Loading loading={requestInviteForm.isRequestPending} />

        <div className="App-text-subtitle"> Request an invite </div>

        <Form.Item>
          {
            getFieldDecorator('fullname', {
              rules: [
                { required: true, message: 'Please input your fullname.' },
                { min: 3, message: 'Name should be at least 3 characters.' },
              ],
            })(<Input placeholder="Full name"/>)
          }
        </Form.Item>

        <Form.Item>
          {
            getFieldDecorator('email', {
              rules: [
                { required: true, message: 'Please input your email.' },
                { type: 'email', message: 'The input is not valid email!' },
              ],
            })(<Input placeholder="Email"/>)
          }
        </Form.Item>

        <Form.Item>
          {
            getFieldDecorator('confirmEmail', {
              rules: [
                { required: true, message: 'Please confirm your email.' },
                { validator: this.confirmEmail },
              ],
            })(<Input placeholder="Confirm email"/>)
          }
        </Form.Item>

        <Button htmlType="submit" className="App-request-form-send"> Send </Button>

        <div
          className="App-request-form-failed"
          style={{ visibility: requestInviteForm.registrationStatus.isError ? 'visible' : 'hidden' }}
        >
          {requestInviteForm.registrationStatus.message}
        </div>
      </Form>
    )
  }
}

const DecoratedForm = Form.create()(RequestForm)

export default connect(mapStateToProps, {})(DecoratedForm)
