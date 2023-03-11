import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  border-radius: 8px;
  display: flex;
  gap: 12px;

  @media screen and (max-width: 400px){
    gap: 8px;
  }
`;

export const Tag = styled.button<{active : boolean}> `
  border: none;
  color: ${({theme}) => theme.colors.text};
  font-weight: bold;
  background: ${({theme}) => theme.colors.bgLight};
  border-radius: 8px;
  padding: 6px 12px;
  text-transform: uppercase;

  ${({active, theme}) => active && css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.bg};
  `};

  @media screen and (max-width: 400px){
    font-size: 12px;
    padding: 4px 8px;
  }
`;