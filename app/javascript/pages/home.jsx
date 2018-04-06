import React, { Component } from 'react'
import Layout from 'components/layout'

export default class extends Component {
  fetch() {
    window.fetch('/something/fetch').then(function (response) {
      return response.json()
    }).then(function (json) {
      console.log('parsed json', json)
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <Layout>
        <h1>My Layout!</h1>
        <a onClick={this.fetch.bind(this)} />
      </Layout>
    )
  }
}