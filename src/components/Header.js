import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import config from '../utils/config';

const Section = styled.section`
  padding: 1rem 1.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  .navbar {
    background-color: transparent;
  }
  .navbar-brand {
    margin-right: 20px;
    .navbar-item img {
      max-height: 3.75rem;
    }
  }
  .navbar-menu {
    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100%;
      transition: 0.6s;
    }
  }
  .navbar-start {
    margin-left: auto;
    margin-right: 0rem;
  }
  .navbar-item {
    font-weight: 500;
    :hover {
      color: ${props => props.theme.primaryColor};
    }
  }
  .navbar-burger {
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    opacity: 0.6;
    border-radius: 4px;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleMobileMenu() {
    const { isActive } = this.state;

    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Section className="section">
        <div className="container">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={config.logo} alt={`${config.siteName} logo`} />
              </Link>
              <a
                href="#"
                role="button"
                className={
                  isActive
                    ? 'navbar-burger burger mobile is-active'
                    : 'navbar-burger burger mobile'
                }
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={() => this.handleMobileMenu()}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>
            <div className={isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
              <div className="navbar-start">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/about" className="navbar-item">
                  About
                </Link>
                <Link to="/about" className="navbar-item">
                  Shop
                </Link>
                <Link to="/support" className="navbar-item">
                  Blog
                </Link>
                <Link to="/Contact" className="navbar-item">
                  Contact
                </Link>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <i className="fas fa-search" />
                </div>
                <div className="navbar-item">
                  <i className="fas fa-shopping-cart" />
                </div>
                <div className="navbar-item">
                  <i className="fas fa-user" />
                </div>
                <div className="navbar-item">
                  <i className="fas fa-heart" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </Section>
    );
  }
}
