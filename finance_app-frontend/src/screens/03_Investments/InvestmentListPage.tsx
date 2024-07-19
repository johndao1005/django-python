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


export default function InvestmentListPage  ()  {
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
          <Card title="Portfolio Overview" style={{ flex: 1, margin: '0 20px' ,textAlign:"start"}} extra={<Link to={"/"}><EditOutlined /></Link>} >
            <BudgetChart />
          </Card>
        </Col>
        <Col span={12}>
          {/* Overview Section */}
          <Card title="Investment by Category" style={{ flex: 1, margin: '0 20px',textAlign:"start"}} extra={<Link to={"/"}><EditOutlined /></Link>}>
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
      <Divider children={"Real time Update"}/>
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
