import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  background: ${({theme}) => theme.colors.bgLight};
  border-radius: 8px;
  padding: 20px;

  p {
    text-transform: uppercase;
    font-weight: bold;
    color: ${({theme}) => theme.colors.primary};

    span {
      color: ${({theme}) => theme.colors.text};
    }
  }
`;