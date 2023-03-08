import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
`;

export const ButtonSettings = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: ${({theme}) => theme.colors.bgLight};
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover{
    background: ${({theme}) => theme.colors.bgHoverButton};
  }
`;