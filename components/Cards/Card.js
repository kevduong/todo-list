import React from 'react';
import { StyledCard } from './style';
import DateTitle from '../elements/DateTitle';

export default function Card() {
  const date = {
    title: 'Hello World'
  }

  return (
    <StyledCard>
      <DateTitle date={date}/>
    </StyledCard>
  );
};