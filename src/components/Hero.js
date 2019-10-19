import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .column :last-child {
    align-self: center;
  }
`;

class Hero extends React.Component {
  render() {
    const { home } = this.props;

    return (
      <Wrapper className="columns">
        <div className="column">
          <img src="/images/home/homebg.jpeg" alt="ebox Theme" />
        </div>
        <div className="column">
          <img src="/images/home/homebg.jpeg" alt="ebox Theme" />
        </div>
        <div className="column">
          <img src="/images/home/homebg.jpeg" alt="ebox Theme" />
        </div>
      </Wrapper>
    );
  }
}

export default Hero;
