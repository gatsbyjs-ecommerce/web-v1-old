import styled from 'styled-components';

const Container = styled.div`
  margin-left: ${props => (props.marginleft ? props.marginleft : '')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '')};
  padding: 3rem;
  padding-top: ${props => (props.paddingtop ? props.paddingtop : '')};
`;

export default Container;
