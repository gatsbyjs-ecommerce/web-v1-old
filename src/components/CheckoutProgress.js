import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Progress = styled.div`
  border-top: 1px solid #979797;
  margin: 3rem 2rem;
  .active {
    font-weight: bold;
    .dot {
      background-color: #000 !important;
    }
  }
  .step {
    float: left;
    width: 33.3%;
    .dot {
      width: 15px;
      height: 15px;
      background-color: #797979;
      border-radius: 8px;
      margin: -9px auto 0 auto;
    }
  }
  .step.one {
    text-align: left;
    .dot {
      margin: -9px 0 0 0;
    }
  }
  .step.two {
    text-align: center;
  }
  .step.three {
    text-align: right;
    .dot {
      margin: -9px 0 0 92%;
    }
  }
`;

const CheckoutProgress = ({ activeStep }) => (
  <Progress>
    <div className={`step one ${activeStep === 'one' ? 'active' : ''}`}>
      <div className="dot" />Billing
    </div>
    <div className={`step two ${activeStep === 'two' ? 'active' : ''}`}>
      <div className="dot" />Payment
    </div>
    <div className={`step three ${activeStep === 'three' ? 'active' : ''}`}>
      <div className="dot" />Confirm
    </div>
  </Progress>
);

CheckoutProgress.defaultProps = {
  activeStep: 'one',
};

CheckoutProgress.propTypes = {
  activeStep: PropTypes.string,
};

export default CheckoutProgress;
