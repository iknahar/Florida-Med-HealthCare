import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Special from '../Special/Special';
import Team from '../Team/Team';

const Home = () => {
    return (
      <div>
        <Hero></Hero>
        <Special></Special>
        <Services></Services>
        <Team></Team>
      </div>
    );
};

export default Home;