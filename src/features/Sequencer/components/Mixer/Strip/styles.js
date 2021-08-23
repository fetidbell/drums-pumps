/* eslint-disable no-unused-vars */
import styled from 'styled-components';

const FADER_ZERO_POINT = 83;
const FADER_STEP = 8.5;

export const Container = styled.div`
  max-width: 120px;
  min-height: 120px;
  margin: 0 -18px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  text-align: right;
  position: relative;
  top: 140px;
  left: 0;
`;

export const Fader = styled.input`
  -webkit-appearance: none;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  background: #012e39;
  width: 200px;
  height: 15px;
  border-radius: 5px;
  cursor: pointer;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 20px;
    background: #16b6f7;
    border-radius: 1px;
  }
`;

export const Output = styled.output`
  padding: 5px;
  position: relative;
  left: 37px;
  font-family: Arial, Helvetica, sans-serif;

  ${({ value }) => {
    let position = FADER_ZERO_POINT;
    const valueNumber = Number(value);
    if (valueNumber === 0) {
      position = FADER_ZERO_POINT;
    } else if (valueNumber > 0) {
      position = FADER_ZERO_POINT + Math.abs(value * FADER_STEP);
    } else if (valueNumber < 0) {
      position = FADER_ZERO_POINT - Math.abs(value * FADER_STEP);
    }
    return `
      bottom: ${position}px;
    `;
  }
}`;
