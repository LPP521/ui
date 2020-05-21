import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';

import IconArrow from './IconArrow';

test('IconArrow', () => {
  const { container } = render(<IconArrow isFlipped={false} />);
  expect(container).toHaveAttribute('img');
});
