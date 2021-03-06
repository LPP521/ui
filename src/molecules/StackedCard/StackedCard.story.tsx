import { storiesOf } from '@storybook/react';
import React from 'react';

import { Copyable } from '..';
import { Icon, Panel } from '../../atoms';
import StackedCard from './StackedCard';

const truncate = (text: string): string => text.substr(0, 6);
const address = '0x80200997f095da94E404F7E0d581AAb1fFba9f7d';
const data = {
  heading: "Spongebob and Patrick's Life Savings",
  icons: [
    <Icon key={0} icon="star" />,
    <Icon key={1} icon="starO" />,
    <Icon key={2} icon="star" />,
  ],
  entries: [
    ['Address', <Copyable key={0} text={address} truncate={truncate} />],
    ['Network', 'Ethereum'],
    ['Node', 'Infura'],
  ],
};

storiesOf('Molecules', module).add('StackedCard', () => (
  <div style={{ width: '400px ' }}>
    <Panel>
      <StackedCard {...data} />
    </Panel>
  </div>
));
