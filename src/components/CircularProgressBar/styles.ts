import styled, { css } from 'styled-components';

export const ContainerProgress = styled.div<{progress: number}>`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({theme, progress}) => css`
    background: conic-gradient(${theme.colors.primary} ${progress}%, transparent ${progress}%)
  `};
`;

export const ContainerCounter = styled.div`
  width: 340px;
  height: 340px;
  background: ${({theme}) => theme.colors.bgLight};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;