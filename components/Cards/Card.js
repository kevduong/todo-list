import React from 'react';
import moment from 'moment';
import { StyledCard } from './style';
import DateTitle from '../elements/DateTitle';
import TaskContainer from '../elements/TaskContainer';
import AddButton from '../Buttons/AddButton/AddButton';
import { Input } from 'semantic-ui-react';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      isHidden: true,
      items: []
    };

    this.showInput = this.showInput.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showInput(e) {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  updateInputValue(e) {
    e.preventDefault();
    this.setState({
      items: [
        e.target.value
      ]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      items: [
        e.target.value
      ]
    });
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
            <Input
              className="inputClose"
              action='submit'
              color="teal"
              ref={this.props.inputElement}
              value={this.state.items}
              onChange={this.handleSubmit}
            />
          </form> :
          null
        }
      </StyledCard>
    );
  };
}

export default Card;