import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../atoms';

const ArrowIcon = styled(Icon)`
  margin-left: 0.5em;
`;

interface ArrowProps {
  isFlipped?: boolean;
}

export const IconArrow = ({ isFlipped }: ArrowProps) => {
  return <ArrowIcon icon={isFlipped ? 'chevronDown' : 'chevronUp'} />;
};

export default IconArrow;
