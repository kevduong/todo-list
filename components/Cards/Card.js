import React from 'react';
import { StyledCard } from './style';
import DateTitle from '../elements/DateTitle';
import moment from 'moment';
import InputTask from '../elements/InputTask';

export default function Card() {
  const date = {
    title: moment().format("dddd, MMMM Do YYYY")
  }

  return (
    <StyledCard>
      <DateTitle date={date} />
      <InputTask />
    </StyledCard>
  );
};