import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0, 0.8);
`;

export const ContainerModal = styled.div`
  position: relative;
  width: 500px;
  border-radius: 8px;
  min-height: 200px;
  background: ${({theme}) => theme.colors.bgLight};
`;

export const HeaderModal = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  strong {
    font-size: 18px;
    text-transform: uppercase;
  }

  .close {
    background: transparent;
    border: 1px solid ${({theme}) => theme.colors.primary};
    display: grid;
    align-items: center;
    border-radius: 8px;
    padding: 2px;
    cursor: pointer;

    &:hover{
      background: ${({theme}) => theme.colors.bgHoverButton};
    }
  }
`;

export const ContainerFields = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  form {
    margin-top: 16px;

    .field {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      label {
        font-size: 18px;
        opacity: 0.7;
      }

      input {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 2px;
        border-radius: 8px;
        background: ${({theme}) => theme.colors.bg};
        color: ${({theme}) => theme.colors.text};
        width: 50px;
        height: 50px;
        padding-left: 15px;
      }
    }

    button {
      padding: 8px 16px;
      font-size: 16px;
      border: none;
      border-radius: 8px;
      background: ${({theme}) => theme.colors.primary};
      text-transform: uppercase;
      color: ${({theme}) => theme.colors.text};
      position: absolute;
      bottom: 15px;
      right: 15px;

      &:hover{
        background: ${({theme}) => theme.colors.secondary};
      }
    }
  }
`;