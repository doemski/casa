import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './app/Home';

const Page = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: ;
  grid-template-rows: 2fr 10fr 1fr;
  grid-template-areas:
    'header'
    'content'
    'footer';
`;

class App extends React.Component {
  render () {
    return (
      <Page>
        <div style={{ gridArea: 'content' }}>
          <Route exact component={Home} />
        </div>
      </Page>
    );
  }
}
export default App;
