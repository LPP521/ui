import styled from '../../styled-components';

export const Panel = styled.section<{ noPadding?: boolean; raised?: boolean }>`
  background: ${props => props.theme.panelBackground};
  border-radius: 2px;
  box-shadow: ${props =>
    props.raised
      ? '0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.07)'
      : '0 1px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.12)'};
  margin: 0 auto 1rem;
  padding: ${props => !props.noPadding && '1.5rem 2rem'};
`;

export default Panel;
