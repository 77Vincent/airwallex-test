import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'
import { Spin } from 'antd'

const Loading = ({ loading = true }) => (
  <div
    className="App-loading"
    style={{visibility: loading ? 'visible' : 'hidden'}}
  >
    <Spin />
  </div>
)

Loading.propTypes = {
  loading: PropTypes.bool,
}

export default Loading
