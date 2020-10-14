import React from 'react';
import { HomeWrapper, HomeText, HomeHeader, HomeButton } from '../../styles/styleComponents/homeStyles';
import { Image } from 'semantic-ui-react';
import PineApple from '../../styles/imgs/pineapple.jpeg';

const Home = () => (
  <HomeWrapper>
    <h1>Home Page</h1>
    <h1 style={{ fontSize: '19px', textAlign: 'center'}}>Home Page</h1>
    <h1 style={styles.headerTag}>Home Page</h1>
    <p style={styles.ParaTag}>Content</p>
    <HomeText>
      This is my content
    </HomeText>
    <HomeHeader>Still Home pg</HomeHeader>
    <HomeHeader center>Still Home pg</HomeHeader>
    <HomeHeader fSize='lrg'>Still Home pg</HomeHeader>
    <HomeHeader fSize='sm'>Still Home pg</HomeHeader>
    <HomeHeader>Still Home pg</HomeHeader>
    <HomeButton>
      Click me
    </HomeButton>
    <Image src='https://images.unsplash.com/photo-1523585895729-a4bb980d5c14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80' />
    <Image src={PineApple} />
  </HomeWrapper>
)

const styles = {
  headerTag: {
    fontSize: '34px',
    color: 'green',
    background: 'yellow',
  },
  ParaTag: {
    color: 'blue',
  }
}

export default Home;