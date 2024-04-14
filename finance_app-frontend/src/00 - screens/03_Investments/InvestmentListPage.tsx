/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex, Radio } from 'antd';

const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 54,
};

export default function InvestmentListPage  ()  {
  const [value, setValue] = React.useState<string>('horizontal');
  return (
    
      <Flex  >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
        ))}
    </Flex>
  );
};

