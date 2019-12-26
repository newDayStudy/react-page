import React from 'react';
import  {Link} from  'react-router-dom'
import {Row, Col, Menu} from 'antd'
import '../common/menu.css'
import menu from '../common/menu'
const {SubMenu } = Menu
export default class Admin extends React.Component{

    handleMenu(){
        return  menu.map((item,index)=>
          item.subMenu ? <SubMenu key={index} title={item.title}>
              { item.subMenu.map((sub, idx)=>
                  <Menu.Item key={idx}><Link to={sub.router}>{sub.title}</Link></Menu.Item>
              ) }
          </SubMenu> : <Menu.Item key={index}><Link to={item.router}>{item.title}</Link></Menu.Item>
        )
    }

    render(){
        return (
            <Row className='container-wrap'>
                <Col span={2} className='menu'>
                    <header className='header'>
                        Ant Design
                    </header>
                    <Menu theme='dark'>
                        { this.handleMenu()}
                    </Menu>
                </Col>
                <Col span={24} className='content'>
                    <Row>
                        {this.props.children}
                    </Row>
                    <Row className='footer'>author: 429382356@qq.com</Row>
                </Col>
            </Row>
        )
    }
}

