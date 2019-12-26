import  React from 'react'
import { Button, Card, Radio, Icon, Dropdown, Menu } from 'antd';
import './button.css'
const ButtonGroup = Button.Group;

export default class Buttons extends React.Component{
    state = {
        size: 'large',
    };
    menu=()=>(
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
    )
    handleMenuClick(e) {
        console.log('click', e);
    }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    onClick = () => {
        console.log(this)
    }
    onClickDefault(){
        console.log(this)
    }
    render(){
        const { size } = this.state;
        return (
            <div className="Buttons">
                <Card title='按钮类型' className='btnType'>
                    <Button type="primary" onClick={this.onClick}>Primary</Button>
                    <Button onClick={this.onClickDefault.bind(this)}>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </Card>
                <Card title='按钮尺寸' className='btnType'>
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <Button type="primary" size={size}>
                        Primary
                    </Button>
                    <Button size={size}>Normal</Button>
                    <Button type="dashed" size={size}>
                        Dashed
                    </Button>
                    <Button type="danger" size={size}>
                        Danger
                    </Button>
                    <Button type="link" size={size}>
                        Link
                    </Button>
                    <br />
                    <Button type="primary" icon="download" size={size} />
                    <Button type="primary" shape="circle" icon="download" size={size} />
                    <Button type="primary" shape="round" icon="download" size={size} />
                    <Button type="primary" shape="round" icon="download" size={size}>
                        Download
                    </Button>
                    <Button type="primary" icon="download" size={size}>
                        Download
                    </Button>
                    <br />
                    <Button.Group size={size}>
                        <Button type="primary">
                            <Icon type="left" />
                            Backward
                        </Button>
                        <Button type="primary">
                            Forward
                            <Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card title='图标按钮' className='btnType'>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon="search">
                        Search
                    </Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <br />
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">
                        Search
                    </Button>
                </Card>
                <Card title='按钮组合' className='btnType'>
                    <ButtonGroup>
                        <Button>Cancel</Button>
                        <Button>OK</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button disabled>L</Button>
                        <Button disabled>M</Button>
                        <Button disabled>R</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>L</Button>
                        <Button>M</Button>
                        <Button>R</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                            <Icon type="right" />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary" icon="cloud" />
                        <Button type="primary" icon="cloud-download" />
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button type="primary" size="small" icon="cloud" />
                        <Button type="primary" size="small" icon="cloud-download" />
                    </ButtonGroup>
                </Card>
                <Card title='不可用状态' className='btnType'>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>
                        Primary(disabled)
                    </Button>
                    <br />
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                    <br />
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>
                        Dashed(disabled)
                    </Button>
                    <br />
                    <Button type="link">Link</Button>
                    <Button type="link" disabled>
                        Link(disabled)
                    </Button>
                </Card>
                <Card title='多个按钮组合' className='btnType'>
                    <Button type="primary">primary</Button>
                    <Button>secondary</Button>
                    <Dropdown overlay={this.menu}>
                        <Button>
                            Actions <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Card>
                <Card title='幽灵按钮' className='btnType yl'>
                    <Button type="primary" ghost>
                        Primary
                    </Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>
                        Dashed
                    </Button>
                    <Button type="danger" ghost>
                        danger
                    </Button>
                    <Button type="link" ghost>
                        link
                    </Button>
                </Card>
            </div>
        )
    }
}