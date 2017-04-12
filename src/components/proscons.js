import React, { Component } from 'react';

export default class ProsCons extends Component {
  constructor() {
    super();

    this.state = {
      inputs: ['']
    };
  }

  createInput = () => {
    const { inputs } = this.state;
    return inputs.map((value, index) =>
      <li key={index}>
        <input
          type="text"
          value={value}
          onChange={e => this.changeValue(e, index)}
        />
      </li>
    )
  };

  changeValue = (e, index) => {
    const value = e.target.value;
    const { inputs } = this.state;
    if (value.length) {
      inputs[index] = value;
      if (index === inputs.length - 1) {
        inputs.push('');
      }
    } else {
      inputs.splice(index, 1);
    }
    this.setState({ inputs });
  };

  render() {
    const { title } = this.props;
    return (
      <div className="column">
        <div className="title">
          {title}
        </div>
        <ol className="input-list">
          {this.createInput()}
        </ol>
      </div>
    );
  }
}
