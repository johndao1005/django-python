import { Button, Col, Row } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import React from 'react'

export default function Hero(props: { imageUrl: string, buttonFunction: Function, title: string, description: string, buttonText: string, left2Right: boolean }) {
    const { buttonFunction, title, description, buttonText, imageUrl, left2Right } = props
    const handleClick = () => {
        buttonFunction()
    }
    if (left2Right) return (
        <Row style={{ margin: '50px', display: "flex", justifyContent: "revert", justifySelf: "revert" }}>
            <Col span={12}>
                <img src={imageUrl} alt="placeholder" style={{ maxWidth: 300, height: 'auto' }} />
            </Col>
            <Col span={12} style={{ textAlign: 'center', margin: "auto", padding: "10px 50px 10px 0" }}>
                <Title level={1}>{title}</Title>
                <Paragraph>
                    {description}
                </Paragraph>
                {buttonText != "" && <Button type="primary" size="large" onClick={handleClick}>{buttonText}</Button>}
            </Col>
        </Row>)

    return (
        <Row style={{ margin: '50px', display: "flex", justifyContent: "revert", justifySelf: "revert" }}>
            <Col span={12} style={{ textAlign: 'center', margin: "auto", padding: "10px 50px 10px 0" }}>
                <Title level={1}>{title}</Title>
                <Paragraph>
                    {description}
                </Paragraph>
                {buttonText != "" && <Button type="primary" size="large" onClick={handleClick}>{buttonText}</Button>}
            </Col>
            <Col span={12}>
                <img src={imageUrl} alt="placeholder" style={{ maxWidth: 300, height: 'auto' }} />
            </Col>
        </Row>)
}
