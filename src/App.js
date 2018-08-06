import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header transparent title="Bryan Albano Portfolio" className='header'>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Bryan Albano">
            <Navigation className="side-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            {/* <div className='page-content' /> */}
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
