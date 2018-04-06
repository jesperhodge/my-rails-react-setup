import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'

// import Logo from '@/some_logo.png'

export default class extends Component {
  render() {
    return (
      <Paper className="header" elevation={24}>
        <div className="side-container">
        </div>
        <div className="title-container">
          {/*<img src={Logo} />*/}
          <h1>
            Title!
          </h1>
        </div>
        <div className="side-container">
        </div>
      </Paper>
    )
  }
}