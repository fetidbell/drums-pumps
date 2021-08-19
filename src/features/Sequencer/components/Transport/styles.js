import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  padding: 15px 0;
  background-color: rgb(155, 155, 155);
`;

export const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const PlaybackButtons = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const Play = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  position: relative;
  border: none;

  :active {
    top: 2px;
    left: 2px;
  }
`;

export const Stop = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 25px;
  background: url('assets/icons/stop.svg') center no-repeat;
  box-shadow: none;
  border: none;
  position: relative;

  :active {
    top: 2px;
    left: 2px;
  }
`;

export const Reset = styled.button`
  width: 40px;
  height: 40px;
  background: url('assets/icons/reset.svg') center no-repeat;
  box-shadow: none;
  border: none;
  position: relative;

  :active {
    top: 2px;
    left: 2px;
  }
`;

export const TempoSlider = styled.button``;
