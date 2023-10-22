import styled from 'styled-components';

export const StatisticContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
  color: darkviolet;
  :nth-child(1) {
    color: green;
  }
  :nth-child(2) {
    color: yellow;
  }
  :nth-child(3) {
    color: darkred;
  }
`;

export const StatisticName = styled.p`
  font-weight: 600;
`;

export const StatisticResult = styled.span`
  :nth-child(1) {
    color: black;
  }
`;
