// Third-party dependencies
import React, { Component } from 'react'
import { Layout } from 'antd'

// Custom dependencies
import store from './store' 
import { Provider } from 'react-redux'
import { Header, Footer, Welcome } from './components'
import './App.scss'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default App
