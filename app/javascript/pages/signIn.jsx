import React, { Component } from 'react'
import Layout from 'components/layout'
import 'whatwg-fetch'

export default class extends Component {
  loginDefaultUser() {
    window.fetch('/session', {
      headers: {
        Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify({
        email: 'developer@test.de',
        password: 'test1234'
      })
    }).then(function (response) {
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
        <a onClick={this.loginDefaultUser.bind(this) }>Click here to Sign In!</a>
      </Layout>
    )
  }
}