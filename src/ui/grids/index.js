import React from 'react'
import { Card, Row, Col  } from 'antd'
import './index.css'
import Sliders from './slider'
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
export  default class Grids extends React.Component{
    render(){
        return (
            <div className='Grids'>
                <Card title='基础栅格'>
                    <Row className='Row'>
                        <Col span={12} className='Col'>col-12</Col>
                        <Col span={12} className='Col1'>col-12</Col>
                    </Row>
                    <Row className='Row'>
                        <Col span={8} className='Col'>col-8</Col>
                        <Col span={8} className='Col1'>col-8</Col>
                        <Col span={8} className='Col'>col-8</Col>
                    </Row>
                    <Row className='Row'>
                        <Col span={6} className='Col'>col-6</Col>
                        <Col span={6} className='Col1'>col-6</Col>
                        <Col span={6} className='Col'>col-6</Col>
                        <Col span={6} className='Col1'>col-6</Col>
                    </Row>
                </Card>
                <Card title='区块间隔'>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                    </Row>
                    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                    </Row>
                </Card>
                <Card title='左右偏移'>
                    <Row className='Row'>
                        <Col span={8} className='Col'>col-8</Col>
                        <Col span={8} offset={8} className='Col'>
                            col-8
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col span={6} offset={6} className='Col'>
                            col-6 col-offset-6
                        </Col>
                        <Col span={6} offset={6} className='Col'>
                            col-6 col-offset-6
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col span={12} offset={6} className='Col'>
                            col-12 col-offset-6
                        </Col>
                    </Row>
                </Card>
                <Card title='栅格排序'>
                    <Row>
                        <Col span={18} push={6} className='Col'>
                            col-18 col-push-6
                        </Col>
                        <Col span={6} pull={18} className='Col1'>
                            col-6 col-pull-18
                        </Col>
                    </Row>
                </Card>
                <Card title='flex布局'>
                    <h4>sub-element align left</h4>
                    <Row type="flex" justify="start">
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                    </Row>

                    <h4>sub-element align center</h4>
                    <Row type="flex" justify="center">
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                    </Row>

                    <h4>sub-element align right</h4>
                    <Row type="flex" justify="end">
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                    </Row>

                    <h4>sub-element monospaced arrangement</h4>
                    <Row type="flex" justify="space-between">
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                    </Row>

                    <h4>sub-element align full</h4>
                    <Row type="flex" justify="space-around">
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                        <Col span={4} className='Col'>col-4</Col>
                        <Col span={4} className='Col1'>col-4</Col>
                    </Row>
                </Card>
                <Card title='flex对齐'>
                    <h4>Align Top</h4>
                    <Row type="flex" justify="center" align="top">
                        <Col span={4} className='Col'>
                            <DemoBox value={100}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col1'>
                            <DemoBox value={50}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col'>
                            <DemoBox value={120}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col1'>
                            <DemoBox value={80}>col-4</DemoBox>
                        </Col>
                    </Row>

                    <h4>Align Center</h4>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4}  className='Col'>
                            <DemoBox value={100}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col1'>
                            <DemoBox value={50}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col'>
                            <DemoBox value={120}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col1'>
                            <DemoBox value={80}>col-4</DemoBox>
                        </Col>
                    </Row>

                    <h4>Align Bottom</h4>
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span={4}  className='Col'>
                            <DemoBox value={100}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col1'>
                            <DemoBox value={50}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col'>
                            <DemoBox value={120}>col-4</DemoBox>
                        </Col>
                        <Col span={4}  className='Col1'>
                            <DemoBox value={80}>col-4</DemoBox>
                        </Col>
                    </Row>
                </Card>
                <Card title='flex排序'>
                    <Row type="flex">
                        <Col span={6} order={4} className='Col'>
                            1 col-order-4
                        </Col>
                        <Col span={6} order={3} className='Col1'>
                            2 col-order-3
                        </Col>
                        <Col span={6} order={2} className='Col'>
                            3 col-order-2
                        </Col>
                        <Col span={6} order={1} className='Col1'>
                            4 col-order-1
                        </Col>
                    </Row>
                </Card>
                <Card title='响应式布局'>
                    <Row>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10} className='Col'>
                            Col
                        </Col>
                        <Col xs={20} sm={16} md={12} lg={8} xl={4} className='Col1'>
                            Col
                        </Col>
                        <Col xs={2} sm={4} md={6} lg={8} xl={10} className='Col'>
                            Col
                        </Col>
                    </Row>
                </Card>
                <Card title='其它属性响应式'>
                    <Row>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='Col'>
                            Col
                        </Col>
                        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className='Col1'>
                            Col
                        </Col>
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className='Col'>
                            Col
                        </Col>
                    </Row>
                </Card>
                <Card title='栅格配置器'>
                    <Sliders />
                </Card>
            </div>
        )
    }
}