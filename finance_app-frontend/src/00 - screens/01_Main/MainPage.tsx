import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import "./styles.css"
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Avatar, Button, Card, Divider, Flex, Image, List, Skeleton } from "antd";
import axios from "axios";
import { AppAPIList } from "../../05 - constants/app";
import {
  PlusOutlined

} from '@ant-design/icons';
import Overview from "./components/Overview";
import { InvestmentChart } from "./components/Charts";
import InvestmentSummary from "./components/InvestmentSummary";
import RecentTransactions from "./components/RecentTransactions";



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
  type: string;
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
  const [transactionList, setTransactionList] = useState< null | TransactionsData[]>([]);
  const [loading, setLoading] = useState(false);

  /* -------------------------------- Function -------------------------------- */



  /* -------------------------------- Components ------------------------------- */




  /* ------------------------------- Main Render ------------------------------ */
  return (

    <Flex vertical gap={"large"} style={{ margin:"auto 0",background: "white", height: "100%", width: "100%", paddingBottom: 40 }}>
      <Overview />
      <Divider children={"Transactions"}/>
      <RecentTransactions loading={loading} transactionList={transactionList} />
   
      <Divider children={"Investment"}/>
      <InvestmentSummary loading={loading} transactionList={transactionList} />
    </Flex>

  );
}

