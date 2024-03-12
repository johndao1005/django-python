import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import "./styles.css"
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Avatar, Flex, Image, List, Skeleton } from "antd";
import axios from "axios";
import { AppAPIList } from "../../constants/app";

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
  useEffect(() => {
    axios.get(AppAPIList.Transactions)
      .then((response )=> {
        let list : null | TransactionsData[] = response.data
        setTransactionList(list)
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
    if(transactionList === null){
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

    if(transactionList === null){
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



