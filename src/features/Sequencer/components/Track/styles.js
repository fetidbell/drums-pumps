import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Signboard = styled.div`
  display: flex;
  margin: 0px 20px;
  align-items: center;
`;

export const Name = styled.div`
  min-width: 50px;
  margin-right: 20px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
`;

export const Icon = styled.div`
  background: url(${({ iconUrl }) => iconUrl});
  width: 50px;
  height: 50px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  > button {
    min-width: 30px;
    min-height: 30px;
    padding: 0px;
    margin-right: 2px;
    font-size: 18px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Mute = styled.button``;

export const Solo = styled.button``;

export const Notes = styled.div`
  display: flex;
  margin-left: 30px;
`;
