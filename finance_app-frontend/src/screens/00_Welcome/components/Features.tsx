import { Button, Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';

function Features(props: { details: { title: string , buttonText: string , description:React.ReactNode}[] }) {
  
    return (
    <Row justify="center" gutter={[16, 16]} style={{background:"black", padding :20}}>
      {props.details.map((detail, index) => (
        <Col key={index} span={8} >
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card title={detail.title} style={{textAlign:"start", maxWidth: 300,margin:"auto"}}>
              {detail.description}
              <Button type="link" style={{margin:"auto"}}>{detail.buttonText}</Button>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Features;