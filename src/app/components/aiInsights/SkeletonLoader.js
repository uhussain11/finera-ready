import React from 'react';
import { Box } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      <Box className="h-8 w-full bg-gray-300 animate-pulse"></Box>
      <Box className="h-8 w-full bg-gray-300 animate-pulse"></Box>
      <Box className="h-8 w-full bg-gray-300 animate-pulse"></Box>
    </div>
  );
};

export default SkeletonLoader;
