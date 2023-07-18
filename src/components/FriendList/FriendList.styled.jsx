import styled from 'styled-components';

export const FriendListEl = styled.ul`
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: ${props => props.theme.spacing(4)};
`;
