import styled from 'styled-components';
import play from '~assets/icons/play.svg';
import playToggled from '~assets/icons/playToggled.svg';
import stopIcon from '~assets/icons/stop.svg';
import resetIcon from '~assets/icons/reset.svg';

export const Container = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 5px;
  padding: 15px 0;
  background-color: rgb(145, 145, 145);
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
  background: url(${play}) center no-repeat;
  cursor: pointer;

  ${({ isToggled }) => isToggled && `
    background: url(${playToggled}) center no-repeat;
  `}

  :active {
    top: 2px;
    left: 2px;
  }
`;

export const Stop = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 25px;
  background: url(${stopIcon}) center no-repeat;
  box-shadow: none;
  border: none;
  position: relative;
  cursor: pointer;

  :active {
    top: 2px;
    left: 2px;
  }
`;

export const Reset = styled.button`
  width: 40px;
  height: 40px;
  background: url(${resetIcon}) center no-repeat;
  box-shadow: none;
  border: none;
  position: relative;
  cursor: pointer;

  :active {
    top: 2px;
    left: 2px;
  }
`;

export const TempoSlider = styled.button``;
