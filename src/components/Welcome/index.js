import React from 'react';
import { Row, Col, Button } from 'antd'

import './index.scss'

export default (props) => {
  return (
    <Row className="App-welcome">
      <Col>
        <div className="App-welcome-slogan">A better way to enjoy every day.</div>
        <div>Be the first to know when we launch.</div>
        <Button type="primary">Request an invite</Button>
      </Col>
    </Row>
  )
}