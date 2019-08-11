import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SubmitButton from './SubmitButton';

storiesOf('Submit Button', module)
  .addDecorator(
    host({
      width: '500px',
      padding: 20
    })
  )
  .add('Submit Button', () => (
    <SubmitButton />
  ));