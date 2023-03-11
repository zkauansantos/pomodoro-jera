import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.bg};

  @media screen and (max-width: 400px){
    width: 300px;
    height: 300px;
  }
`;


export const ContainerProgress = styled.div<{progress: number}>`
  width: 350px;
  height: 350px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({theme, progress}) => css`
    background: conic-gradient(${theme.colors.primary} ${progress}%, transparent ${progress}%)
  `};
  @media screen and (max-width: 400px){
    width: 300px;
    height: 300px;
  }
`;

export const ContainerCounter = styled.div`
  width: 340px;
  height: 340px;
  background: ${({theme}) => theme.colors.bgLight};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px){
    width: 290px;
    height: 290px;
  }
`;