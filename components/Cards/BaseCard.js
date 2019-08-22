import React from 'react';
import axios from 'axios';
import cred from '../../utils/cred';
import moment from 'moment';
import { Button, CardContent } from '@material-ui/core';
import { Typography, TextField } from '@material-ui/core';
import { StyledCard, StyledCardMedia, StyledForm } from './style';

import DateTitle from '../elements/DateTitle';
import ListItems from '../elements/ListItems';

class BaseCard extends React.Component {
  constructor(props) {
    super(props);

    this.item = React.createRef;

    this.state = {
      items: [],
      img: [],
    };

    // Performant
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount() {
    // Fetches random images from the unsplash endpoint
    axios
      .get('https://api.unsplash.com/photos/random/?client_id=' + cred.APP_ID)
      .then(data => {
        this.setState({ img: data.data.urls.small });
      })
      .catch(err => {
        alert('Error happened during fetching!', err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const item = this.item.value;

    /* 
      Immutable data
      Use spread operator to mutate over 
      existing data and adding new data
    */
    const newItems = [...this.state.items, item];
    this.setState({ items: newItems, hideInput: true });

    // Clears input
    e.target.reset();
  }

  removeTodo(i) {
    this.setState({
      items: this.state.items.filter(el => el !== i)
    })
  }

  render() {
    const date = {
      title: moment().format("dddd, MMMM Do YYYY")
    }

    return (
      <StyledCard items={this.state.items}>
        <StyledCardMedia
          image={this.state.img}
          title="Card Image"
        />
        <CardContent>
          <DateTitle date={date} />
          <StyledForm onSubmit={this.handleSubmit}>
            <TextField
              id="standard-with-placeholder"
              label="Add Task"
              placeholder="Add Task"
              margin="normal"
              type="text"
              // Reference for handleSubmit()
              inputRef={input => this.item = input}
            />
            <Button variant="outlined" color="primary" type="submit">
              Add
            </Button>
          </StyledForm>
        </CardContent>
        <CardContent>
          {/* 
            Pass state of items and 
            removeTodo method down to child comp 
          */}
          <ListItems
            items={this.state.items}
            removeTodo={this.removeTodo}
          />
        </CardContent>
      </StyledCard>
    );
  };
}

export default BaseCard;