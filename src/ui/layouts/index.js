import React from 'react'
import {Breadcrumb, Card, Layout, Menu, Icon} from 'antd'
import './index.css'
const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

export default class Layouts extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div className='Layouts'>
                <Card title='基本结构'>
                    <Layout>
                        <Header style={{backgroundColor: 'deepskyblue'}}>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Card>
                <Card title='上中下布局'>
                    <Layout className="layout">
                        <Header>
                            <div className="logo"/>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{lineHeight: '64px'}}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{padding: '0 50px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{background: '#fff', padding: 24, minHeight: 280}}>Content</div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design by Mr.Gu</Footer>
                    </Layout>
                </Card>
                <Card title='顶部-侧边布局-通栏'>
                    <Layout>
                        <Header className="header">
                            <div className="logo"/>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{lineHeight: '64px'}}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Layout>
                            <Sider width={200} style={{background: '#fff'}}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{height: '100%', borderRight: 0}}
                                >
                                    <SubMenu
                                        key="sub1"
                                        title={
                                            <span>
                                                <Icon type="user"/>
                                                subnav 1
                                              </span>
                                        }
                                    >
                                        <Menu.Item key="1">option1</Menu.Item>
                                        <Menu.Item key="2">option2</Menu.Item>
                                        <Menu.Item key="3">option3</Menu.Item>
                                        <Menu.Item key="4">option4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub2"
                                        title={
                                            <span>
                                                <Icon type="laptop"/>
                                                subnav 2
                                              </span>
                                        }
                                    >
                                        <Menu.Item key="5">option5</Menu.Item>
                                        <Menu.Item key="6">option6</Menu.Item>
                                        <Menu.Item key="7">option7</Menu.Item>
                                        <Menu.Item key="8">option8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu
                                        key="sub3"
                                        title={
                                            <span>
                                                <Icon type="notification"/>
                                                subnav 3
                                              </span>
                                        }
                                    >
                                        <Menu.Item key="9">option9</Menu.Item>
                                        <Menu.Item key="10">option10</Menu.Item>
                                        <Menu.Item key="11">option11</Menu.Item>
                                        <Menu.Item key="12">option12</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>
                            <Layout style={{padding: '0 24px 24px'}}>
                                <Breadcrumb style={{margin: '16px 0'}}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                </Breadcrumb>
                                <Content
                                    style={{
                                        background: '#fff',
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280,
                                    }}
                                >
                                    Content
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </Card>
                <Card title='顶部侧边栏'>
                    <Layout>
                        <Header className="header">
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                                <Sider width={200} style={{ background: '#fff' }}>
                                    <Menu
                                        mode="inline"
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['sub1']}
                                        style={{ height: '100%' }}
                                    >
                                        <SubMenu
                                            key="sub1"
                                            title={
                                                <span>
                                                  <Icon type="user" />
                                                  subnav 1
                                                </span>
                                            }
                                        >
                                            <Menu.Item key="1">option1</Menu.Item>
                                            <Menu.Item key="2">option2</Menu.Item>
                                            <Menu.Item key="3">option3</Menu.Item>
                                            <Menu.Item key="4">option4</Menu.Item>
                                        </SubMenu>
                                        <SubMenu
                                            key="sub2"
                                            title={
                                                <span>
                                                  <Icon type="laptop" />
                                                  subnav 2
                                                </span>
                                            }
                                        >
                                            <Menu.Item key="5">option5</Menu.Item>
                                            <Menu.Item key="6">option6</Menu.Item>
                                            <Menu.Item key="7">option7</Menu.Item>
                                            <Menu.Item key="8">option8</Menu.Item>
                                        </SubMenu>
                                        <SubMenu
                                            key="sub3"
                                            title={
                                                <span>
                                                  <Icon type="notification" />
                                                  subnav 3
                                                </span>
                                            }
                                        >
                                            <Menu.Item key="9">option9</Menu.Item>
                                            <Menu.Item key="10">option10</Menu.Item>
                                            <Menu.Item key="11">option11</Menu.Item>
                                            <Menu.Item key="12">option12</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </Sider>
                                <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                            </Layout>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Card>
                <Card title='侧边布局'>
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span>Option 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span>Option 2</span>
                                </Menu.Item>
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                          <Icon type="user" />
                                          <span>User</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="3">Tom</Menu.Item>
                                    <Menu.Item key="4">Bill</Menu.Item>
                                    <Menu.Item key="5">Alex</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                          <Icon type="team" />
                                          <span>Team</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="6">Team 1</Menu.Item>
                                    <Menu.Item key="8">Team 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="9">
                                    <Icon type="file" />
                                    <span>File</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }} />
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </Card>
                <Card title='自定义触发器'>
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span>nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="video-camera" />
                                    <span>nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="upload" />
                                    <span>nav 3</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Header>
                            <Content
                                style={{
                                    margin: '24px 16px',
                                    padding: 24,
                                    background: '#fff',
                                    minHeight: 280,
                                }}
                            >
                                Content
                            </Content>
                        </Layout>
                    </Layout>
                </Card>
            </div>
        )
    }
}