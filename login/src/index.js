import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
const { Title } = AMUI2;
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Title>dsds</Title>
    <Hello name="CodeSandbox" />
    <h2>Start wxl editing to see some magic happen {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
