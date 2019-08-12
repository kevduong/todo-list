import React from 'react';
import { StyledDateTitle } from './style';
import { dateType } from './types/index';

export default function DateTitle(date) {
  const { title } = date;

  return (
    <StyledDateTitle>
      {title}
    </StyledDateTitle>
  );
}

DateTitle.propTypes = {
  date: dateType
};