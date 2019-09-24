import React from 'react';
import { Menu, Icon, Input } from 'antd';

const NavHeader = () => {
  const { Search } = Input;

  const handleClick = () => {
    console.log('here');
  }


  return (
    <Menu mode="horizontal" theme='dark'>
      <Menu.Item onClick={handleClick}>
        <Icon type="home" />
        Home
        </Menu.Item>
      <Menu.Item onClick={handleClick}>
        <Icon type="plus-circle" />
        Add Helicopter
        </Menu.Item>
      <Menu.Item >
        <Search placeholder="search for helicopters" onSearch={value => console.log(value)} className='search' enterButton />
      </Menu.Item>
    </Menu>
  )
}

export default NavHeader; 