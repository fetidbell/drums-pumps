import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 60px;
  margin: 2px 2px;
`;

export const Pad = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 7px;
  box-shadow: 1px 1px 1px 1px #000;
  transition: background-color 150ms linear;
  background-color: #39c1f7;

  ${({ isPushed }) => isPushed && `
    background-color: #f7982d;
    
    &:hover {
      background-color: #ffcb8f;
    }
  `}
`;
