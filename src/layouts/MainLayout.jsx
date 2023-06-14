import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Workspace from '../components/Workspace';

const MainLayout = ({ children, articles }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <Flex>
      <NavBar isCollapsed={isCollapsed} handleCollapse={handleCollapse} />
      <Workspace articles={articles} />
      {children}
    </Flex>
  );
};

export default MainLayout;
