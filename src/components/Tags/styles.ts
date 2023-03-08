import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  padding: 4px;
  border-radius: 40px;
  background-color: ${({theme}) => theme.colors.bgLight};
  display: flex;
  gap: 16px;
`;

export const Tag = styled.button<{active : boolean}> `
  border: none;
  border-radius: 40px;
  padding: 6px 10px;

  ${({active, theme}) => active && css`
    background: ${theme.colors.secondary};
  `};
`;