import React from 'react';
import styled from 'styled-components';

import img from '../../static/images/home/product1.png';

const Container = styled.div`
  width: 16rem;
  margin-top: 3.5rem;
`;

const CardWrapper = styled.div`
  height: 17rem;
  ul {
    display: flex;
    justify-content: center;
  }
  button {
    width: 2.5rem;
    height: 2.5rem;
    background: #384aeb;
    color: white;
    margin-right: 1rem;
    :hover {
      background: #8894ff;
    }
  }
`;

const MediaContent = styled.div`
  margin-top: 1.5rem;
  a {
    color: #000;
    :hover {
      color: #007bff;
    }
  }
`;

class TrendingProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcons: false,
    };
  }

  onMouseHover = () =>
    this.setState(prevState => ({
      showIcons: !prevState.showIcons,
    }));

  render() {
    const { showIcons } = this.state;
    return (
      <React.Fragment>
        <Container className="has-text-centered">
          <CardWrapper className="card">
            <div className="card-image">
              <img src={img} alt="Placeholder" />
              <div>
                {showIcons ? (
                  <ul>
                    <li>
                      <button className="icon">
                        <i className="fas fa-shopping-cart" />
                      </button>
                    </li>
                    <li>
                      <button className="icon">
                        <i className="far fa-heart" />
                      </button>
                    </li>
                  </ul>
                ) : null}
              </div>
            </div>
          </CardWrapper>
          <MediaContent className="media-content has-text-centered">
            <p className="is-6 has-text-weight-bold">Accessories</p>
            <a className="title is-5">Quartz Belt Watch</a>
            <p>$150.00</p>
          </MediaContent>
        </Container>
      </React.Fragment>
    );
  }
}

export default TrendingProducts;
