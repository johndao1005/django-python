import { Button, Col, Row } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(props: { imageUrl: string, buttonFunction: Function, title: string, description: string, buttonText: string | null, left2Right: boolean }) {
    const { buttonFunction, title, description, buttonText, imageUrl, left2Right } = props;
    const handleClick = () => {
        buttonFunction();
    };

    const imageVariants = {
        hidden: { opacity: 0, x: left2Right ? -100 : 100 },
        visible: { opacity: 1, x: 0 }
    };

    const textVariants = {
        hidden: { opacity: 0, x: left2Right ? 100 : -100 },
        visible: { opacity: 1, x: 0 }
    };

    if (left2Right) return (
        <Row justify="center" style={{ margin: '50px', display: "flex", justifyContent: "revert", justifySelf: "revert" }}>
            <Col span={12}>
                <motion.img
                    src={imageUrl}
                    alt="placeholder"
                    style={{ maxWidth: 300, height: 'auto' }}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                />
            </Col>
            <Col span={12} style={{ textAlign: 'center', margin: "auto", padding: "10px 50px 10px 0" }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                >
                    <Title level={1}>{title}</Title>
                    <Paragraph >{description}</Paragraph>
                    {buttonText && <Button type="primary" onClick={handleClick}>{buttonText}</Button>}
                </motion.div>
            </Col>
        </Row>
    );

    return (
        <Row justify="center" style={{ margin: '50px', display: "flex", justifyContent: "revert", justifySelf: "revert" }}>
            <Col span={12} style={{ textAlign: 'center', margin: "auto", padding: "10px 50px 10px 0" }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                >
                    <Title level={1}>{title}</Title>
                    <Paragraph>{description}</Paragraph>
                    {buttonText && <Button type="primary" onClick={handleClick}>{buttonText}</Button>}
                </motion.div>
            </Col>
            <Col span={12}>
                <motion.img
                    src={imageUrl}
                    alt="placeholder"
                    style={{ maxWidth: 300, height: 'auto' }}
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                />
            </Col>
        </Row>
    );
}