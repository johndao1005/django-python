import { Col, Row,Button } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import Title from 'antd/es/typography/Title'
import { motion } from 'framer-motion'
import { title } from 'process'
import React from 'react'

export default function CTA(props: {title: string, description: string, buttonText: string, buttonFunction: Function, backgroundColor: string}) {
    const { title, description, buttonText ,buttonFunction,backgroundColor} = props;
    const handleClick = () => {
        buttonFunction()
    }
    return (
      <Row  justify="center" style={{ margin: '10px 0', padding : "20px", color: 'white', backgroundColor: backgroundColor ,width: "100vw"}}>
        <Col span={18} style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title style={{textDecorationColor:"white",color: 'white'}} level={1}>{title}</Title>
            <Paragraph style={{textDecorationColor:"white",color: 'white'}}>
              {description}
            </Paragraph>
            <Button type="primary" size="large" onClick={handleClick}>{buttonText}</Button>
          </motion.div>
        </Col>
      </Row>
    
  
  )
}
