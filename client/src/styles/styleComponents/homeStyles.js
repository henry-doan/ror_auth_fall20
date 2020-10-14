import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const HomeWrapper = styled.div`
  background: linear-gradient( to bottom right, aliceblue, pink);
`

export const HomeText = styled.p`
  font-size: '45px';
  text-align: center;
  text-transform: uppercase;
`

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem';
    case 'sm':
      return '1rem';
    default:
      return '2rem';
  }
}

export const HomeHeader = styled.h1`
  color: white;
  text-align: ${ props => props.center ? 'center' : 'left' };
  font-size: ${ props => fontSize(props.fSize) };
`

export const HomeButton = styled(Button)`
  color: green !important;
  background: yellow !important;
  width: 100px !important;
`