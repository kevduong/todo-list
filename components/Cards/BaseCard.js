import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment';
import { Card, CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';

import DateTitle from '../elements/DateTitle';
import TaskContainer from '../elements/TaskContainer';

const StyledCard = styled(Card)`
  max-width: 345px;
`;

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
      .get('https://api.unsplash.com/photos/?client_id=' + cred.APP_ID)
      .then(data => {
        this.setState({ imgs: data.data });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const item = this.item.value;
    console.log('fired');

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
        <CardMedia
          image={this.state.imgs}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography color="textSecondary">
            <DateTitle date={date} />
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="standard-with-placeholder"
              label="Add Task"
              placeholder="Add Task"
              margin="normal"
              type="text"
              // Reference for handleSubmit()
              inputRef={input => this.item = input}
            />
            <Fab color="secondary" aria-label="add" >
              <AddIcon fontSize="small" type="submit" />
            </Fab>
          </form>
        </CardContent>
        <CardContent>
          <TaskContainer items={this.state.items} />
        </CardContent>
      </StyledCard>
    );
  };
}

export default BaseCard;