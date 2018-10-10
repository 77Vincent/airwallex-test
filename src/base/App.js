// Third-party dependencies
import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"

// Custom dependencies
import store from '../store' 
import { Provider } from 'react-redux'
import { Header, Footer, Welcome } from '../components'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />

            <div className="App-content">
              <Route path="/" exact component={Welcome} />
            </div>

            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
