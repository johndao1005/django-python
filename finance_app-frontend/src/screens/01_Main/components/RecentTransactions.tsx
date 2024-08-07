import {  Card, List, Row, Skeleton } from "antd";
import {
  ArrowsAltOutlined

} from '@ant-design/icons';
import { TransactionsData } from "../../../constants/interfaces";
import { Link } from "react-router-dom";
  
  

export default function  RecentTransactions  ({loading, transactionList}: {loading: boolean, transactionList: null | TransactionsData[]})  {
  if (transactionList === null) {
    return <></>
  }
  // Filter transactions into two lists
  const expenses = transactionList.filter(item => item.type === 'expense');
  const incomes = transactionList.filter(item => item.type === 'income');
  // Render function for List items
  const renderItem = (item: TransactionsData) => (
    <List.Item
      actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
    >
      <Skeleton avatar title={false} active>
        <div>{item.amount} {transactionList.length}</div>
      </Skeleton>
    </List.Item>
  );
  return (
    
      <Row gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }}  style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        {/* Card for Expenses */}
        <Card title="Expenses" 
        style={{ width: 300, textAlign: "start",margin:20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }} 
        extra={<Link to={"/transactions"}><ArrowsAltOutlined /></Link>} >
          <List
            className="demo-loadmore-list"
            loading={loading}
            dataSource={expenses}
            renderItem={renderItem}
          />
        </Card>

        {/* Card for Income */}
        <Card title="Income" 
        style={{ width: 300, textAlign: "start",margin:20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }} 
        extra={<Link to={"/transactions"}><ArrowsAltOutlined /></Link>} >
          <List
            className="demo-loadmore-list"
            loading={loading}
            dataSource={incomes}
            renderItem={renderItem}
          />
        </Card>
      </Row>
    
  )
}