import React, { Component } from 'react'

import { Header, Footer } from './components'
import './App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App
