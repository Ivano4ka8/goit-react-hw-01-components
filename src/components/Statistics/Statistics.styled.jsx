import styled from 'styled-components';

export const StatisticWrapper = styled.div`
  background-color: ${props => props.theme.colors.light};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px;
`;

export const StatisticTitle = styled.h2`
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.large};
  color: ${props => props.theme.colors.dark};
  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
`;

export const StatisticText = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.gray};
`;
