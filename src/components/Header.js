/* global $ */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import Link from 'gatsby-link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReactGA from 'react-ga';

import config from '../config';
import SocialIcons from './SocialIcons';

const cartQuery = gql`
  query {
    cart @client {
      count
    }
  }
`;

const Container = styled.div`
  a {
    color: #4a4a4a;
  }
  .navbar {
    margin-bottom: 0.8rem;
  }
  .navbar-menu {
    flex-grow: unset;
    margin: 0 auto;
    .navbar-item {
      font-size: 1.2rem;
    }
    .navbar-item:hover {
      color: #384AEB;
    }
  }
  .navbar-menu .navbar-item:first-child {
    color: #384AEB;
  }
  #navbarBasicExample {
    margin-right: 1rem !important;
  }
  .navbar-start {
    background-color: transparent !important;
  }
  .navbar-item {
    background-color: transparent !important;
  }
  img {
    width: 23%;
    height: auto;
  }
`;

const ContainerMobile = styled.div`
  position: relative;
  img {
    width: 100px;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  .menu-trigger {
    position: absolute;
    top: 4rem;
    right: 1rem;
    font-size: 1.4rem;
    color: #4a4a4a;
  }
`;

const MobileMenu = styled(animated.div)`
  && {
    position: fixed;
    left: 0;
    top: 161px;
    height: 100%;
    width: 100%;
    background-color: #2f2f2f;
    z-index: 2;
    padding: 2rem;
    overflow: hidden;
    a {
      color: #fff;
    }
    .social {
      margin-left: 1.2rem;
      margin-top: 2rem;
      > section {
        width: 240px;
        .level-item {
          float: left;
        }
      }
    }
  }
`;

const Cart = styled.div`
  font-size: 1.2rem;
  width: 40px;
  float: right;
  position: relative;
  a {
    color: #4a4a4a !important;
  }
  span {
    font-weight: 700;
    padding: 0 0.1rem 0 0.5rem;
  }
  .count {
    background-color: ${config.primaryColor};
    color: #fff;
    font-size: 0.6rem;
    width: 16px;
    height: 16px;
    text-align: center;
    border-radius: 8px;
    position: absolute;
    top: -3px;
    left: 22px;
  }
`;

const ButtonWrapper = styled.button`
  padding: 5px 45px;
  height: 3rem;
  width: 8rem;
  background: transparent;
  color: #222;
  border-color: #eeeeee;
  :hover {
    border: 1px solid #384aeb;
    transition: all 0.4s ease;
  }
`;

const Icons = styled.div`
  margin-left: 8rem;
`;

const CartMobile = styled.div`
  width: 8rem;
  float: right;
  margin-top: 6rem;
  margin-right: 0.3rem;
  .count {
    left: 16px;
  }
`;

const NavItems = [
  { id: 1, name: 'Home', url: '/' },
  // { id: 2, name: 'Shop', url: '/shop' },
  { id: 3, name: 'Coupons', url: '/coupons' },
  { id: 4, name: 'Blog', url: '/blog' },
  { id: 5, name: 'Sign in', url: '/login' },
  { id: 6, name: 'Contact', url: '/contact' },
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mobileMenuActive: false };
  }

  toggleMobileMenu = () => {
    const { mobileMenuActive } = this.state;
    if (mobileMenuActive) {
      $('html').removeClass('disable-scroll');
    } else {
      $('html').addClass('disable-scroll');
    }
    this.setState({ mobileMenuActive: !mobileMenuActive });
  };

  render() {
    const { mobileMenuActive } = this.state;
    const { home } = this.props;

    const cart = (
      <Cart>
        <Query query={cartQuery}>
          {({ data }) => (
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              {data.cart && data.cart.count > 0 && (
                <div className="count">{data.cart.count}</div>
              )}
            </Link>
          )}
        </Query>
      </Cart>
    );

    return (
      <React.Fragment>
        <Container className="is-hidden-mobile">
          <div className="container">
            {/* <div className="column">
              <SocialIcons data={home} />
            </div> */}
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <Link to="/">
                <img src={config.logo} alt={`${config.siteName} logo`} />
              </Link>
              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start has-text-centered">
                  <a className="navbar-item">
                    <div className="navbar-menu navigate is-uppercase">
                      {NavItems.map(item => (
                        <Link
                          to={item.url}
                          className="navbar-item"
                          key={item.id}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </a>
                </div>

                <Icons className="navbar-end">
                  <div className="navbar-item">
                    <div className="column has-text-right has-text-weight-semibold">
                      <p>
                        <ReactGA.OutboundLink
                          eventLabel="siteEmail"
                          to={`mailto:${home.email}`}
                        >
                          {home.email}
                        </ReactGA.OutboundLink>{' '}
                        <ReactGA.OutboundLink
                          eventLabel="siteTelephone"
                          to={`tel:${home.telephone}`}
                        >
                          {home.telephone}
                        </ReactGA.OutboundLink>
                      </p>
                      <div>
                        {cart}
                      </div>
                    </div>
                  </div>
                </Icons>
              </div>
              <div className="buttons">
                <div className="control">
                  {/* <ButtonWrapper
                    type="submit"
                    className="button is-rounded has-text-weight-bold"
                  >
                    Buy Now
                  </ButtonWrapper> */}
                </div>
              </div>
            </nav>
          </div>
        </Container>
        <ContainerMobile className="is-hidden-tablet">
          <div className="columns is-mobile">
            <div className="column">
              <Link to="/">
                <img src={config.logo} alt={`${config.siteName} logo`} />
              </Link>
            </div>
            <div className="column">
              {mobileMenuActive ? (
                <span>
                  <a onClick={this.toggleMobileMenu}>
                    <i className="fas fa-times menu-trigger" />
                  </a>
                </span>
              ) : (
                  <a onClick={this.toggleMobileMenu}>
                    <i className="fas fa-bars menu-trigger" />
                  </a>
                )}

              <CartMobile>{cart}</CartMobile>
            </div>
          </div>
          <Spring
            native
            from={{ height: 0, opacity: 0, paddingTop: '-64px' }}
            to={{
              height: mobileMenuActive ? 800 : 0,
              opacity: mobileMenuActive ? 1 : 0,
              paddingTop: mobileMenuActive ? 0 : -64,
            }}
          >
            {styles => (
              <MobileMenu style={styles}>
                <aside className="menu">
                  <ul className="menu-list is-uppercase has-text-weight-bold is-size-4">
                    {NavItems.map(item => (
                      <li key={item.id} onClick={this.toggleMobileMenu}>
                        <Link to={item.url}>{item.name}</Link>
                      </li>
                    ))}
                    <li className="social">
                      <SocialIcons data={home} inverted />
                    </li>
                  </ul>
                </aside>
              </MobileMenu>
            )}
          </Spring>
        </ContainerMobile>
      </React.Fragment>
    );
  }
}

Header.defaultProps = {
  home: {},
};

Header.propTypes = {
  home: PropTypes.object,
};

export default Header;
