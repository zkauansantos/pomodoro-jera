import styled from 'styled-components';

export const Container = styled.div`
  -webkit-box-shadow: 1px 1px 15px 1px rgba(255,255,255,0.1);
  -moz-box-shadow: 1px 1px 15px 1px rgba(255,255,255,0.1);
  box-shadow: 1px 1px 25px 1px rgba(255,255,255,0.1);
  width: 380px;
  height: 380px;
  background: ${({theme}) => theme.colors.bgLight};
  margin-top: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;