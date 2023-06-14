import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  const articles = [
    // Add your articles here
    { title: 'Article 1' },
    { title: 'Article 2' },
    // ...
  ];

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home articles={articles} />} />
          {/* Other routes can be added here */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
