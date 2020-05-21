import { storiesOf } from '@storybook/react';
import React from 'react';

import IconArrow from './IconArrow';

import Typography from '../../Typography';

storiesOf('Molecules', module).add('IconLink', () =>
  [{}, { href: 'https://example.com/' }].map((props, index) => (
    <Typography key={index}>
      Address <IconArrow isFlipped={true} {...props} />
    </Typography>
  )),
);
