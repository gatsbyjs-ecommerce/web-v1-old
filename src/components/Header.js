import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring, animated } from 'react-spring';
import { Link, graphql } from 'gatsby';
import { Query } from 'react-apollo';

import config from '../utils/config';
import SocialIcons from './SocialIcons';

// const cartQuery = graphql`
//   query {
//     cart @client {
//       count
//     }
//   }
// `;

const Container = styled.div`
  margin-top: 0.6rem;
  a {
    color: #4a4a4a;
  }
  .navbar {
    margin-bottom: 0.6rem;
  }
  .navbar-menu {
    flex-grow: unset;
    margin: 0 auto;
    .navbar-item {
      font-size: 1.1rem;
    }
    .navbar-item:hover {
      color: #4a4a4a;
    }
  }
  img.logo {
    max-width: 150px;
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
  margin-top: 1rem;
  font-size: 1.2rem;
  width: 80px;
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
  { id: 1, name: 'New In', url: '/' },
  { id: 2, name: 'Coupons', url: '/coupons' },
  { id: 3, name: 'Blog', url: '/blog' },
  { id: 4, name: 'About', url: '/page/about' },
  { id: 5, name: 'Contact', url: '/contact' },
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mobileMenuActive: false };
  }

  toggleMobileMenu = () => {
    const { mobileMenuActive } = this.state;
    // if (mobileMenuActive) {
    //   $('html').removeClass('disable-scroll');
    // } else {
    //   $('html').addClass('disable-scroll');
    // }
    this.setState({ mobileMenuActive: !mobileMenuActive });
  };

  render() {
    const { mobileMenuActive } = this.state;
    const { home } = this.props;

    const cart = (
      <Cart>
        {/* <Query query={cartQuery}>
          {({ data }) => (
            <Link to="/cart">
              <i className="fas fa-shopping-cart" />
              <span>Cart</span>{' '}
              {data.cart && data.cart.count > 0 && (
                <div className="count">{data.cart.count}</div>
              )}
            </Link>
          )}
        </Query> */}
      </Cart>
    );

    return (
      <div className="container">
        <Container className="is-hidden-mobile">
          <div className="columns">
            <div className="column">
              <SocialIcons data={home} />
            </div>
            <div className="column has-text-centered">
              <Link to="/">
                <img
                  src={config.logo}
                  className="logo"
                  alt={`${config.siteName} logo`}
                />
              </Link>
            </div>
            <div className="column has-text-right has-text-weight-semibold	">
              <p>
                <a href={`mailto:${home.email}`}>{home.email}</a> |{' '}
                <a href={`tel:${home.telephone}`}>{home.telephone}</a>
              </p>
              {cart}
            </div>
          </div>
          <nav
            className="navbar has-background-white-ter"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-menu is-uppercase has-text-weight-bold">
              {NavItems.map(item => (
                <Link to={item.url} className="navbar-item" key={item.id}>
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
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
            }}>
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
      </div>
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
