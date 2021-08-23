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
  cursor: pointer;

  ${({ isPushed }) => isPushed && `
    background-color: #f7982d;
    box-shadow: none;
    
    &:hover {
      background-color: #ffcb8f;
    }
  `}

${({ isMuted }) => isMuted && `
    background-color: #c5c5c5;
  `}

  &.blaze {
    width: 60px;
    height: 60px;
    background-image: linear-gradient(45deg, #ff8484, #dd7bc8);
  }
`;
