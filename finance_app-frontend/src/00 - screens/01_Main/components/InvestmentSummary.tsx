import {  Card,  List, Row, Skeleton } from "antd";
import {
  ArrowsAltOutlined

} from '@ant-design/icons';
import { TransactionsData } from "../../interfaces";
import { Link } from "react-router-dom";
import { InvestmentChart } from "./Charts";



export default function InvestmentSummary({ loading, transactionList }: { loading: boolean, transactionList: null | TransactionsData[] }) {

  if (transactionList === null) {
    return <></>
  }
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
  const MyDieChartComponent = () => (
    <div>
      <div >
        <InvestmentChart />
      </div>
    </div>
  );

  if (transactionList === null) {
    return <></>
  }
  return (

    <Row gutter={{
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32,
    }} justify="space-around" className="welcome">
      <div>
        <MyDieChartComponent />
      </div>
      <Card title="Asset"//{<div>Asset <ArrowsAltOutlined /></div>}
        style={{ padding: 0, margin: 0, width: 400, textAlign: "start", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
        extra={<Link to={"/"}><ArrowsAltOutlined /></Link>} >
        <List
          className="demo-loadmore-list"
          loading={loading}
          dataSource={expenses}
          renderItem={renderItem}
        />
      </Card>
    </Row>

  )


}