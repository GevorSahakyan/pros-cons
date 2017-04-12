import React, { Component } from 'react';
import ProsCons from './proscons';

export default class App extends Component {
  render() {
    return (
      <article>
        <header>
          <h1>Should I eat at McDonalds?</h1>
        </header>
        <div className="content">
          <ProsCons title="pros" />
          <ProsCons title="cons" />
        </div>
      </article>
    );
  }
}
