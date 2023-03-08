import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 16px;
  align-items: center;

  button {
    color: ${({theme}) => theme.colors.text};
    border: none;
    padding: 6px 10px;
    border-radius: 8px;
    background: ${({theme}) => theme.colors.primary};
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

export const TimerText = styled.h3`
  font-size: 70px;
`;