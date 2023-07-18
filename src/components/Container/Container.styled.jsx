import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  margin: 0 auto;

  @media (min-width: 320px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding-left: ${props => props.theme.spacing(8)};
    padding-right: ${props => props.theme.spacing(8)};
  }

  @media (min-width: 1280) {
    width: 1280px;
  }
`;
