import React, { useState } from "react";
import { Form } from "react-router-dom";
import {
  EditOutlined
} from '@ant-design/icons';
import { Card, Col, Divider, List, Progress, Row } from 'antd';
import { Link } from 'react-router-dom';
import { TransactionsData } from "../interfaces";
import { BudgetChart } from "./components/Charts";

interface contactType {
  first: string;
  last: string;
  avatar: any;
  twitter: string;
  notes: string;
  favorite: true;
}

interface category {
  first: string;
  last: string;
  avatar: any;
  twitter: string;
  notes: string;
  favorite: true;
}


type childProps = { children?: React.ReactNode }


const TransactionsPage = () => {
  // renderItem function for transactions list
  const [loading, setLoading] = useState(false);
  const [budget, setBudget] = useState(false);
  const [transactionList, setTransactionList] = useState<null | TransactionsData[]>([]);


  const renderItem = (item: TransactionsData) => (
    <List.Item>
      <div>{item.transaction_date.toDateString()} - {item.comment} - ${item.amount}</div>
    </List.Item>
  );
  if (transactionList === null) return <></>;
  return (
    <>      
      <Row style={{margin: "40px 20px"}}>
        <Col span={12}>
          {/* Budget Section */}
          <Card title="Budget Overview" style={{ flex: 1, margin: '0 20px' ,textAlign:"start"}} extra={<Link to={"/"}><EditOutlined /></Link>} >
            <BudgetChart />
          </Card>
        </Col>
        <Col span={12}>
          {/* Overview Section */}
          <Card title="Expenses by Category" style={{ flex: 1, margin: '0 20px',textAlign:"start"}} extra={<Link to={"/"}><EditOutlined /></Link>}>
            <div>Food: <Progress percent={//(budget.spent / budget.total)
              0.1 * 100} /></div>
            <div>Travel: <Progress percent={//(budget.spent / budget.total)
              0.1 * 100} /></div>
            <div>Rent: <Progress percent={//(budget.spent / budget.total)
              0.1 * 100} /></div>
            <div>Other: <Progress percent={//(budget.spent / budget.total)
              0.1 * 100} /></div>
            <div>Total: <Progress percent={//(budget.spent / budget.total)
              0.1 * 100} /></div>

          </Card>
        </Col>

      </Row>
      <Divider children={"Transactions"}/>
      <Row style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {/* All Transactions Section */}
        <Col span={24} title="All Transactions" style={{ flex: 1, margin: '0 20px' }}>
          <List
            dataSource={transactionList}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </>
  );
};

export default TransactionsPage;