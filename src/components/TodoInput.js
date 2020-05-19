import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {addItemAction} from '../store/todolist';

class TodoInput extends React.Component {
  state = {
    value: ''
  }

  handleInput = (event) => {
    this.setState({ value: event.target.value })
  }

  handleClick = () => {
    const {value} = this.state;
    const {addItem} = this.props;
    addItem(value);
    this.setState({value: ''});
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

    addItem: addItemAction

  }, dispatch);
}


export default connect(null, mapDispatchToProps)(TodoInput);