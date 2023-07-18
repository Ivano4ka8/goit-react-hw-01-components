import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  background-color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

export const THead = styled.thead`
  background-color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Th = styled.th`
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Tr = styled.tr`
  &:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
