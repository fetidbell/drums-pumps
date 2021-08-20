import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  outline: none;
  background: #012e39;
  width: 165px;
  height: 15px;
  border-radius: 5px;
  margin-left: 20px;

  :hover {
    cursor: pointer
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 20px;
    background: #16b6f7;
    border-radius: 1px;
  }
`;

export const Value = styled.div`
  margin-top: 13px;
  max-width: fit-content;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
