import React from 'react';
import { Menu } from 'antd';
import { DollarOutlined, StarOutlined } from '@ant-design/icons';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="the-header container">
      <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
        <Menu.Item key="mail" icon={<DollarOutlined />}>
          <Link to="/">Курсы валют</Link>
        </Menu.Item>
        <Menu.Item key="two" icon={<StarOutlined />}>
          <Link to="/favorite">Избранное</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
