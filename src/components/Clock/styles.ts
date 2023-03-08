import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    color: ${({theme}) => theme.colors.text};
    border: none;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

export const TimerText = styled.h3`
  font-size: 70px;
`;