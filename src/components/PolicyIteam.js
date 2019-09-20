import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  border: 1px solid #eff2f3;
  margin: 0px 15px;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
  margin-bottom: 2rem;
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  .image {
    margin: 0 auto;
  }
  h5 {
    margin-bottom: 6px;
  }
`;

const PolicyIteam = ({ item }) => (
  <Container className="column is-one-fifth">
    <div className="card-image">
      <figure className="image is-64x64">
        <img className="is-rounded" src={item.image} alt={item.title} />
      </figure>
      <div className="card-content has-text-centered">
        <div className="content">
          <h5 className="has-text-weight-semibold is-size-5">{item.title}</h5>
          <p className="description">{item.subtitle}</p>
        </div>
      </div>
    </div>
  </Container>
);

export default PolicyIteam;
