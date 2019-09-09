import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  position: absolute;
  float: right;
  bottom: 8rem;
  right: 2rem;
`;

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
    };
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId });
  };

  render() {
    return (
      <>
        <Button
          title="Back to top"
          className="button"
          onClick={this.scrollToTop}>
          <i className="fas fa-arrow-up" />
        </Button>
      </>
    );
  }
}

export default ScrollButton;
