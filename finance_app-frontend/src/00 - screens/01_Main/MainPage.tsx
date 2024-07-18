import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import "./styles.css"
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Avatar, Button, Flex, Image, List, Skeleton } from "antd";
import axios from "axios";
import { AppAPIList } from "../../05 - constants/app";
import {
  PlusOutlined

} from '@ant-design/icons';
import { Line, Pie } from "react-chartjs-2";
import {
  
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,ArcElement, DoughnutController
} from 'chart.js';

// Registering components and scales with Chart.js
ChartJS.register(
  ArcElement, DoughnutController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface contactType {
  first: string;
  last: string;
  avatar: any;
  twitter: string;
  notes: string;
  favorite: true;
}

type childProps = { children?: React.ReactNode }
interface TransactionsData {
  id: number;
  amount: string;
  transaction_date: Date;
  frequency: number;
  priority: number;
  comment: string;
  created_at: Date;
  modified_at: Date;
  user: number;
  category: number;
}

export default function MainPage({ children }: childProps) {
  const [transactionList, setTransactionList] = useState<null | TransactionsData[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Get transaction details
  // useEffect(() => {
  //   axios.get(AppAPIList.Transactions)
  //     .then((response )=> {
  //       let list : null | TransactionsData[] = response.data
  //       setTransactionList(list)
  //       console.log(response)
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  /* -------------------------------- Function -------------------------------- */



  /* -------------------------------- Components ------------------------------- */
  



  const OverView = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
          hoverBorderColor: 'rgba(255, 99, 132, 1)',
          data: [65, 59, 80, 81, 56, 55, 40], // Replace this with your Firebase data
        },
      ],
    };
    const pieData = {
      labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Misc'],
      datasets: [
        {
          label: 'Budget Allocation',
          data: [500, 300, 100, 200, 100], // Example data
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
        },
      },
    };
    const username = "John"
    const financialStatus = {
      income: 12,
      debt: 12,
      asset: 12,
    }

    const MyDieChartComponent = () => (
      <div>
        <h2>Budget Details</h2>
        <div >
          <Pie id="" data={pieData} options={options} />
        </div>
      </div>
    );

    return (
      <Flex vertical gap="large" justify="space-around" align="center"  className="welcome">
        <div style={{ "margin": "auto" ,}}>
          <h1>
            Welcome back {username}
          </h1>
          <Button type="primary" icon={<PlusOutlined />}>New Transactions</Button>
          {/*
          TODO : Add a to do list
           <div>
            To do list
          </div> */}
        </div>

        <Flex align="flex-start" vertical>

          <div>
            <MyDieChartComponent />
          </div>
        </Flex>
      </Flex>
    )
  }

  const RecentTransactions = () => {
    let count = 3
    if (transactionList === null) {
      return <></>
    }
    return (
      <>
        <h1>Transactions {transactionList?.length}</h1>
        <List
          className="demo-loadmore-list"
          loading={loading}
          //itemLayout="horizontal"
          //loadMore={loadMore}
          dataSource={transactionList}
          renderItem={(item) => (
            <List.Item
              actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            >
              <Skeleton avatar title={false} //loading={item.loading} 
                active>

                <div>{item.amount} {transactionList.length}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </>
    )
  }

  const InvestmentSummary = () => {

    if (transactionList === null) {
      return <></>
    }
    return (
      <>
        <h1>Investment</h1>
        <Flex vertical gap="large" align="center" justify="space-around" className="welcome">
          <div>

            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/English_dialects1997.svg/1200px-English_dialects1997.svg.png" height={200} />
            <div>
              <Image src="https://www.jaspersoft.com/content/dam/jaspersoft/images/graphics/infographics/line-chart-example.svg" height={200} />
            </div>
          </div>

          <div>
            <h2>
              Financial status
            </h2>
            <List
              className="demo-loadmore-list"
              loading={loading}
              //itemLayout="horizontal"
              //loadMore={loadMore}
              dataSource={transactionList}
              renderItem={(item) => (
                <List.Item
                  actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                >
                  <Skeleton avatar title={false} //loading={item.loading} 
                    active>
                    <List.Item.Meta
                      //avatar={<Avatar src={item.picture.large} />}
                      //title={<a href="https://ant.design">{item.name?.last}</a>}
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <div>content</div>
                  </Skeleton>
                </List.Item>
              )}
            />
          </div>

        </Flex>
      </>
    )
  }
  /* ------------------------------- Main Render ------------------------------ */
  return (

    <div style={{ background: "red", height: "100%", width: "100%"}}>
      <div style={{ background: "white" }}>
        <OverView />
      </div>
      <div style={{ background: "yellow" }}>
        <RecentTransactions />
      </div>
      <div style={{ background: "blue" }}>
        <InvestmentSummary />
      </div>
    </div>

  );
}

