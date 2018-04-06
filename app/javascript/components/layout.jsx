import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'

import Header from 'components/header'
import Footer from 'components/footer'
import Sideboard from 'components/sideboard'

export default class extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className="main-view">
          {/* <Sideboard /> */}
          <Paper
            className="unified-display"
            elevation={10}
          >
            {this.props.children}
          </Paper>
        </div>
        <Footer />
      </div>
    )
  }
}