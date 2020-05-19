import React from 'react';


class TodoInput extends React.Component {
  state = {
    value: ''
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value })
  }

  handleClick = () => {
    const {value} = this.state;
    console.log('value', value);
  }

  render() {
    const {value} = this.state;
    return (
      <>
        <input onChange={this.handleInput} value={value} />
        <button onClick={this.handleClick}>+ Add</button>
      </>
    )
  }

}

export default TodoInput;