import React from 'react';

import './index.scss'
import { Spin } from 'antd';

export default ({ loading }) => (
  <div
    className="App-loading"
    style={{visibility: loading ? 'visible' : 'hidden'}}
  >
    <Spin />
  </div>
)