import { shape, number, string, oneOf } from 'prop-types';

export const dateType = shape({
  title: string.isRequired,
});