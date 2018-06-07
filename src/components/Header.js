import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Spring, animated} from 'react-spring';
import Link from 'gatsby-link';

import SocialIcons from './SocialIcons';

const Container = styled.div`
  margin-top: 0.6rem;
  a {
    color: #4a4a4a;
  }
  .navbar-menu {
    flex-grow: unset;
    margin: 0 auto;
    .navbar-item:hover {
      color: #4a4a4a;
    }
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

const MobileMenu = styled (animated.div)`
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
      > section {
        width: 240px;
        .level-item {
          float: left;
        }
      }
    }
  }
`;

const NavItems = [
  {id: 1, name: 'New In', url: '/'},
  {id: 2, name: 'Sale', url: '/coupons'},
  {id: 3, name: 'Blog', url: '/blog'},
  {id: 4, name: 'About', url: '/page/about'},
  {id: 5, name: 'Contact', url: '/contact'},
];

class Header extends React.Component {
  constructor (props) {
    super (props);

    this.state = {mobileMenuActive: false};
  }

  render () {
    const {mobileMenuActive} = this.state;
    const {home} = this.props;

    return (
      <React.Fragment>
        <Container className="is-hidden-mobile">
          <div className="columns">
            <div className="column">
              <SocialIcons data={home} />
            </div>
            <div className="column has-text-centered">
              <Link to="/">
                <img src="/images/logo.png" alt="sejal suits logo" />
              </Link>
            </div>
            <div className="column has-text-right has-text-weight-semibold	">
              <p>
                <a href={`mailto:${home.email}`}>{home.email}</a> |{' '}
                <a href={`tel:${home.telephone}`}>{home.telephone}</a>
              </p>
            </div>
          </div>
          <nav
            className="navbar has-background-white-ter"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-menu is-uppercase has-text-weight-bold">
              {NavItems.map (item => (
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
                <img src="/images/logo.png" alt="sejal suits logo" />
              </Link>
            </div>
            <div className="column">
              {mobileMenuActive
                ? <a onClick={() => this.setState ({mobileMenuActive: false})}>
                    <i className="fas fa-times menu-trigger" />
                  </a>
                : <a onClick={() => this.setState ({mobileMenuActive: true})}>
                    <i className="fas fa-bars menu-trigger" />
                  </a>}
            </div>
          </div>
          <Spring
            native
            from={{height: 0, opacity: 0, paddingTop: '-64px'}}
            to={{
              height: mobileMenuActive ? 'auto' : 0,
              opacity: mobileMenuActive ? 1 : 0,
              paddingTop: mobileMenuActive ? 0 : -64,
            }}
          >
            {styles => (
              <MobileMenu style={styles}>
                <aside className="menu">
                  <ul className="menu-list is-uppercase has-text-weight-bold is-size-4">
                    {NavItems.map (item => (
                      <li
                        key={item.id}
                        onClick={() =>
                          this.setState ({mobileMenuActive: false})}
                      >
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
