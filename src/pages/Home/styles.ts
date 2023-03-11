import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-size: 32px;
    margin-top: 96px;

    @media screen and (max-width: 400px) {
      font-size: 28px;
    }
  }
`;