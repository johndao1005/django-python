import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import "./styles.css"
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Avatar, Flex, Image, List, Skeleton } from "antd";
import axios from "axios";


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
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

export default function MainPage({ children }: childProps) {
  const [transactionList, setTransactionList] = useState<TransactionsData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/accounts/')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const OverView = () => {
    const username = "John"
    const financialStatus = {
      income: 12,
      debt: 12,
      asset: 12,
    }

    useEffect(() => {
      //use to get current financial data
    })
    return (
      <Flex vertical gap="large" justify="space-around" className="welcome">
        <div style={{ "paddingBottom": "20%" }}>
          <h1>
            Welcome back {username}
          </h1>
          <div>
            Button to add new income
          </div>
          <div>
            To do list
          </div>
        </div>

        <Flex align="flex-start" vertical>
          <div>
            Total income : ${financialStatus.income}
          </div>
          <div>
            Total Debt : ${financialStatus.debt}
          </div>
          <div>
            Total Asset : ${financialStatus.asset}
          </div>
          <div>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/English_dialects1997.svg/1200px-English_dialects1997.svg.png" height={200} />
          </div>
        </Flex>
      </Flex>
    )
  }

  const RecentTransactions = () => {
    let count = 3
    return (
      <>
        <h1>Transaction</h1>
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
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name?.last}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </>
    )
  }

  const InvestmentSummary = () => {

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
                      avatar={<Avatar src={item.picture.large} />}
                      title={<a href="https://ant.design">{item.name?.last}</a>}
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

  return (

    <div style={{ background: "red", height: "100%", width: "100%" }}>
      <div style={{ background: "pink" }}>
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



