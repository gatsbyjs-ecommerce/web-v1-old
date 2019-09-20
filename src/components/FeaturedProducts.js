import React from 'react';
import styled from 'styled-components';

import PolicyIteam from './PolicyIteam';

const Section = styled.section`
  .title {
    margin-bottom: 2rem;
  }
`;

const team = [
  {
    id: 1,
    title: 'Perminder Klair',
    subtitle: 'Founder & CEO',
    image: '/images/policy/mony.png',
  },
  {
    id: 2,
    title: 'Nasim Akthar',
    subtitle: 'Lead Developer',
    image: '/images/policy/mony.png',
  },
  {
    id: 3,
    title: 'Gagan Saini',
    subtitle: 'Front-End Developer',
    image: '/images/policy/mony.png',
  },
  {
    id: 4,
    title: 'Gagan Saini',
    subtitle: 'Front-End Developer',
    image: '/images/policy/mony.png',
  },
];

const policy = () => (
  <Section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered has-text-weight-bold">
        FEATURED PRODUCT
      </h2>
      <div className="columns is-multiline is-centered">
        {team.map(item => (
          <PolicyIteam key={item.id} item={item} />
        ))}
      </div>
    </div>
  </Section>
);

export default policy;
