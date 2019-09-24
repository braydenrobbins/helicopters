import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const HelicopterCard = (props) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={props.helicopter.src} />}
    >
      <Meta title={props.helicopter.name} description={props.helicopter.date} />
    </Card>
  )
}

export default HelicopterCard;