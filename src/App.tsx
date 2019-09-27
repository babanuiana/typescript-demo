import React from 'react';

import './button/button.sass';
import basicPropTypes from './assets/basicTypes.png';
import reactPropsTypes from './assets/reactPropsTypes.png';
import useContext from './assets/useContext.png';
import useRef from './assets/useRef.png';
import inferredTypes from './assets/infferedTypes.png';

import Button from './button/button';
import HookComponent from './hookComponent/hookComponent';

import './app.sass';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span style={{ fontWeight: 600 }}>SmartData</span>{' '}
          <code style={{ fontWeight: 100 }}>Typescript presentation</code>.
        </p>
      </header>
      <div className="App__image">
        <h2>What is typescript ?</h2>
        <img src="https://media.giphy.com/media/sU511xfb7ORqw/giphy.gif" alt="" />
        <ul>
          <li>TypeScript is an open-source programming language developed by Microsoft</li>
          <li>
            TypeScript and JavaScript is that they are two separate programming languages, though
            TypeScript is heavily based on JavaScript
          </li>
          <li>
            TypeScript is a superset of JavaScript, meaning all valid JavaScript code is also valid
            TypeScript code.
          </li>
          <li>Everything that can be written in JavaScript can also be written in TypeScript</li>
        </ul>
      </div>
      <div className="App__image">
        <h2>Basic Prop Types Examples</h2>
        <img src={basicPropTypes} alt="" />
      </div>
      <div className="App__image">
        <h2>Useful React Prop Type Examples</h2>
        <img src={reactPropsTypes} alt="" />
      </div>
      <div style={{ margin: '80px 10px' }}>
        <h2>Button Component with Types</h2>
        <Button>Children Button</Button>
      </div>
      <HookComponent name="Incrementer" />
      <div className="App__image">
        <h2>useContext with Types</h2>
        <img src={useContext} alt="" />
      </div>
      <div className="App__image">
        <h2>forwardRef/createRef</h2>
        <img src={useRef} alt="" />
      </div>
      <div className="App__image">
        <h2>Using Inferred Types</h2>
        <img src={inferredTypes} alt="" />
      </div>
      <div className="App__image">
        <h2>Stateful Component</h2>
        <div
          style={{
            backgroundColor: 'white',
            maxWidth: '865px',
            padding: '20px 10px',
            borderRadius: '10px',
            margin: '0 auto',
          }}
        >
          <img
            alt=""
            className="uw ux hk n o hj ab hh"
            width="852"
            height="298"
            role="presentation"
            src="https://miro.medium.com/max/852/1*iBI3PaFbcboXP1YQjaQXzw.gif"
          />
        </div>
      </div>
      <div className="App__pro-cons">
        <div className="App__card">
          <div className="App__card_title">Pro</div>
          <div className="App__card_text">Code easier to understand</div>
          <div className="App__card_text">Code easier and faster to implement</div>
          <div className="App__card_text">Code easier to refactor</div>
          <div className="App__card_text">Less bugs</div>
        </div>
        <div className="App__card">
          <div className="App__card_title">Cons</div>
          <div className="App__card_text">On-boarding will take more time</div>
          <div className="App__card_text">Requires a compilation step</div>
          <div className="App__card_text">A bit difficult to set up</div>
        </div>
      </div>
      <div style={{ marginBottom: 40 }}>
        <h2>FINISH</h2>
        <img src="https://media.giphy.com/media/LRVnPYqM8DLag/giphy.gif" alt="" />
      </div>
    </div>
  );
};

export default App;
