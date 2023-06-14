import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home = ({ articles }) => {
  return (
    <MainLayout articles={articles}>
      {/* Additional components can be added here */}
    </MainLayout>
  );
};

export default Home;
