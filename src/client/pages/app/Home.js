import React from 'react';
import styled from 'styled-components';

class Home extends React.Component {
  render () {
    return <div className="content">Hello World!</div>;
  }
}

const Page = styled(Home)`
  background: 'red';
`;

export default Page;
