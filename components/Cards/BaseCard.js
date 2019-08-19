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
      imgs: []
    };

    // Performant
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://api.unsplash.com/photos/random/?client_id=' + cred.APP_ID)
      .then(data => {
        this.setState({ imgs: data.data.urls.small });
        console.log('image state', this.state.imgs);
        
      })
      .catch(err => {
        alert('Error happened during fetching!', err);
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
    this.setState({ items: newItems, hideInput: true });

    // Clears input
    e.target.reset();
  }

  render() {
    const date = {
      title: moment().format("dddd, MMMM Do YYYY")
    }

    return (
      <StyledCard>
        <StyledCardMedia
          image={this.state.imgs}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography color="textSecondary">
            <DateTitle date={date} />
          </Typography>
          <StyledForm onSubmit={this.handleSubmit}>
            <TextField
              id="standard-with-placeholder"
              label="Add Task"
              placeholder="Add Task"
              margin="large"
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
          {/* Pass state of items down to child comp */}
          <ListItems items={this.state.items} />
        </CardContent>
      </StyledCard>
    );
  };
}

export default BaseCard;