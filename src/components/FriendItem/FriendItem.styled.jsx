import styled from 'styled-components';

export const FriendItemEl = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${props => props.theme.spacing(4)};
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${({ status, theme }) => {
    switch (status) {
      case 'true':
        return theme.colors.green;
      case 'false':
        return theme.colors.red;
      default:
        return 'black';
    }
  }};
`;

export const FriendImage = styled.img`
  width: 90px;
  height: 90px;
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.dark};
  margin: 0;
`;
