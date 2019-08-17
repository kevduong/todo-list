import React from 'react';
import moment from 'moment';
import { StyledCard } from './style';
import DateTitle from '../elements/DateTitle';
import TaskContainer from '../elements/TaskContainer';
import AddButton from '../Buttons/AddButton/AddButton';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.item = React.createRef;

    this.state = {
      isHidden: true,
      items: []
    };

    this.showInput = this.showInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showInput(e) {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const item = this.item.value;

    /* Immutable data
    Use spread operator to mutate over 
    existing data and adding new data
    */
    const newItems = [...this.state.items, item];
    this.setState({
      items: newItems
    });

    e.target.reset();
  }

  render() {
    const date = {
      title: moment().format("dddd, MMMM Do YYYY")
    }

    return (
      <StyledCard
        addItem={this.addItem}
        inputElement={this.inputElement}
        handleInput={this.handleInput}
        currentItem={this.currentItem}
      >
        <DateTitle date={date} />
        <TaskContainer />
        <div onClick={this.showInput}>
          {this.state.isHidden && <AddButton />}
        </div>
        {!this.state.isHidden ?
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              action='fuck'
              color="teal"
              ref={input => this.item = input}
            />
          </form> :
          null
        }
      </StyledCard>
    );
  };
}

export default Card;