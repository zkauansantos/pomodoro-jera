import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 400px;
  background: ${({theme}) => theme.colors.bgLight};
  margin-top: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;