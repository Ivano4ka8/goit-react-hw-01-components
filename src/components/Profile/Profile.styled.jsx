import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const UserInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.img`
  width: 300px;
  height: 300px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.dark};
`;

export const UserInformation = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.gray};
`;

export const UserStatisticList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(1)};
`;

export const UserStatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing(1)};
`;

export const UserStatiscticText = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.dark};
`;
