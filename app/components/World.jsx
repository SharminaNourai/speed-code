import React, { PropTypes, Component} from 'react';
import Hello from './Hello.jsx';

export default class World extends Component {
  static propTypes = {
    greet: PropTypes.string.isRequired
  }

  static defaultProps = {
    greet: 'Hello'
  }

  constructor(props) {
    super(props);
    this.state = {
      currentGreeting: props.greet,
      value: 'ReactSpeed'
    };
    this.slangGreet = this.slangGreet.bind(this);
    this.hindiGreet = this.hindiGreet.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  slangGreet() {
    this.setState({ currentGreeting: 'Yo!' });
  }

  hindiGreet() {
    this.setState({ currentGreeting: 'Namaste' });
  }

  handleNameChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const renderGreeting = this.state.value
      ? `${this.state.value} says ${this.state.currentGreeting}`
      : this.state.currentGreeting;
    return (
      <div className="World-card">
        <Hello greet={renderGreeting} message="World!" />
        <h2>
          <a onClick={this.slangGreet}>Slang</a>
          &nbsp;OR&nbsp;
          <a onClick={this.hindiGreet}>Hindi</a>
        </h2>
        <input
          type="text" value={this.state.value}
          placeholder="Enter a name"
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}
