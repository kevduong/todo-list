import PropTypes from 'prop-types';

const { shape, string } = PropTypes;

export const dateType = shape({
  title: string.isRequired
});