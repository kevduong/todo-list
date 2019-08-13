import React from 'react';
import moment from 'moment';
import { StyledCard } from './style';
import DateTitle from '../elements/DateTitle';
import TaskContainer from '../elements/TaskContainer';
import AddButton from '../Buttons/AddButton/AddButton';

export default function Card() {
  const date = {
    title: moment().format("dddd, MMMM Do YYYY")
  }

  return (
    <StyledCard>
      <DateTitle date={date} />
      <TaskContainer/>
      <AddButton/>
    </StyledCard>
  );
};