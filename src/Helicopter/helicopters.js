import React from 'react';
import { Input, Layout } from 'antd';

import HelicopterCard from './helicopter-card';

const { Search } = Input;
const { Content } = Layout;

const Helicopter = (props) => {
  return (
    <Layout>
      <Content>
        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
        {props.helicopters.map((h) => {
          return <HelicopterCard helicopter={h} />
        })}
      </Content>
    </Layout>

  )
}

export default Helicopter; 