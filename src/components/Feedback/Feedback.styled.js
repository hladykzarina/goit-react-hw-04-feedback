import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  :hover:nth-child(1) {
    background-color: lightblue;
    border: 2px solid navy;
    cursor: pointer;
  }
  :hover:nth-child(2) {
    background-color: lightblue;
    border: 2px solid navy;
    cursor: pointer;
  }
  :hover:nth-child(3) {
    background-color: lightblue;
    border: 2px solid navy;
    cursor: pointer;
  }
`;

export const ButtonFeedback = styled.button`
  width: 80px;
  padding: 12px;
  font-size: medium;
  border: 2px solid lightblue;
  background-color: lightviolet;
  color: black;
  border-radius: 6px;
`;
