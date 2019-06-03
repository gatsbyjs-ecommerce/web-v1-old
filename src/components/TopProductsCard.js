import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  margin-top: 3rem;
  .media-content {
      margin-top: 3%;
  }

  a {
      font-size: 13px;
      color: #222;
      :hover {
          color: #4E5DEC;
      }
  }

  p {
      color: #777777;
      font-weight: bold;
  }
`;

const TopProductsCard = () => (
  <CardWrapper className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="img" />
          </figure>
        </div>
        <div className="media-content">
          <a className="is-4 has-text-weight-bold">Grey Coffe Cup</a>
          <p className="subtitle is-6">$150</p>
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="img" />
          </figure>
        </div>
        <div className="media-content">
          <a className="is-4 has-text-weight-bold">Grey Coffe Cup</a>
          <p className="subtitle is-6">$150</p>
        </div>
      </div>
      <div className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="img" />
          </figure>
        </div>
        <div className="media-content">
          <a className="is-4 has-text-weight-bold">Grey Coffe Cup</a>
          <p className="subtitle is-6">$150</p>
        </div>
      </div>
    </div>
  </CardWrapper>
);

export default TopProductsCard;