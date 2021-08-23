import styled from 'styled-components';
import { Container } from '../Container';
import logo from '~assets/logo.svg';

export const ComponentContainer = styled(Container)`
  /* background-color: #ccf; */
  width: 100%;
  height: 100px;
  padding-left: 50px;
`;

export const Logo = styled.div`
  width: 400px;
  height: 100px;
  background: url(${logo}) center no-repeat;
`;
