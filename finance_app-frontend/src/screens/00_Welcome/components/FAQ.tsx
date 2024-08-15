import { Col, Collapse, CollapseProps, Row, theme } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { CSSProperties } from 'react'
import {
    CaretRightOutlined
  } from '@ant-design/icons';


function FAQ(props: { panelStyle: CSSProperties ,getItems: (panelStyle: CSSProperties) => CollapseProps['items'] }) {
    const { panelStyle, getItems } = props
    return (
      <Row justify="center" style={{  margin: '50px'  }}>
        <Col span={18}>
        <Title level={2}>FAQs</Title>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{ backgroundColor:"transparent", textAlign: 'start' }}
            items={getItems(panelStyle)}
          />
        </Col>
      </Row>
    )
}

export default FAQ