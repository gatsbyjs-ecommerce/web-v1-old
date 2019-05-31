import React from 'react';
import styled from 'styled-components';

const Container = styled.aside`
  background-color: #f1f6f7;
  width: 20%;
  @media only screen and (max-width: 768px) {
    background-color: #f1f6f7;
    width: 100%;
  }

  ul {
    padding: 1rem;
    margin-top: -1rem;
  }

  .control {
    margin-bottom: 1.5rem;
  }

  span {
    margin-left: 5px;
  }
`;

const Title = styled.p`
  background-color: #384aeb;
  width: 100%;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: 900;
  padding: 1rem;
`;

const AsideMenu = ({ label }) => (
  <Container className="menu">
    <Title className="menu-label has-text-white">Browse Categories</Title>
    <p className="has-text-weight-bold">{label}</p>
    <ul className="menu-list">
      <li>
        <div className="control">
          <label className="radio has-text-weight-bold">
            <input type="radio" name="answer" />
            <span>Men</span>
            <span>(3600)</span>
          </label>
        </div>
        <div className="control">
          <label className="radio has-text-weight-bold">
            <input type="radio" name="answer" />
            <span>Men</span>
            <span>(3600)</span>
          </label>
        </div>
        <div className="control">
          <label className="radio has-text-weight-bold">
            <input type="radio" name="answer" />
            <span>Men</span>
            <span>(3600)</span>
          </label>
        </div>
        <div className="control">
          <label className="radio has-text-weight-bold">
            <input type="radio" name="answer" />
            <span>Men</span>
            <span>(3600)</span>
          </label>
        </div>
        <div className="control">
          <label className="radio has-text-weight-bold">
            <input type="radio" name="answer" />
            <span>Men</span>
            <span>(3600)</span>
          </label>
        </div>
      </li>
    </ul>
  </Container>
);

export default AsideMenu;
