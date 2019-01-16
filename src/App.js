import React, { Component } from 'react';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import logo from './logo.svg';
import './App.css';

const Header = styled.header`
  ${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

class App extends Component {
  render() {
    return (
      <div css={tw`text-center`}>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            css={tw`text-blue-light`}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      </div>
    );
  }
}

export default App;
