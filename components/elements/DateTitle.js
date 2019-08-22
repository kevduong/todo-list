import React from 'react';
import { StyledDateTitle } from './style';
import { dateType } from './types';

const DateTitle = ({ date }) => {
  const { title } = date;

  return (
    <div>
      <StyledDateTitle>
        {title}
      </StyledDateTitle>
    </div>
  );
}

DateTitle.propTypes = {
  date: dateType
};

export default DateTitle;
