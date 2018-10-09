import React, { Component } from 'react'
import { Layout } from 'antd'

import { Header, Footer, Welcome } from './components'
import './App.scss'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
          <Layout.Header>
            <Header />
          </Layout.Header>

          <Layout.Content>
            <Welcome />
          </Layout.Content>

          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </div>
      </Layout>
    )
  }
}

export default App
