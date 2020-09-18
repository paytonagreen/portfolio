import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.vermillion};
  color: ${props => props.theme.offwhite};
  margin: 0;
`;

export default HeaderStyles;