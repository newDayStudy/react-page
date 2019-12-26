import React from 'react'
import {Card, Typography, Divider } from 'antd'
const { Title, Paragraph, Text } = Typography;
export default class Typographys extends React.Component{
    state = {
        str: 'This is an editable text.',
    }

    onChange = str => {
        console.log('Content change:', str);
        this.setState({ str });
    }
    render(){
        return (
            <div className='Typographys'>
                <Card title='标题组件' className='custom-card-list'>
                    <Title>h1. Ant Design</Title>
                    <Title level={2}>h2. Ant Design</Title>
                    <Title level={3}>h3. Ant Design</Title>
                    <Title level={4}>h4. Ant Design</Title>
                </Card>
                <Card title='文本组件' className='custom-card-list'>
                    <Text>Ant Design</Text>
                    <br />
                    <Text type="secondary">Ant Design</Text>
                    <br />
                    <Text type="warning">Ant Design</Text>
                    <br />
                    <Text type="danger">Ant Design</Text>
                    <br />
                    <Text disabled>Ant Design</Text>
                    <br />
                    <Text mark>Ant Design</Text>
                    <br />
                    <Text code>Ant Design</Text>
                    <br />
                    <Text underline>Ant Design</Text>
                    <br />
                    <Text delete>Ant Design</Text>
                    <br />
                    <Text strong>Ant Design</Text>
                </Card>
                <Card title='可交互' className='custom-card-list'>
                    <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
                    <Paragraph copyable>This is a copyable text.</Paragraph>
                    <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
                </Card>
                <Card title='省略号' className='custom-card-list'>
                    <Paragraph ellipsis>
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                    </Paragraph>

                    <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                        Design, a design language for background applications, is refined by Ant UED Team. Ant Design,
                        a design language for background applications, is refined by Ant UED Team. Ant Design, a
                        design language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team. Ant Design, a design
                        language for background applications, is refined by Ant UED Team.
                    </Paragraph>
                </Card>
            </div>
        )
    }
}