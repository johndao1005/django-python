import React, { useEffect } from "react";
import { Form } from "react-router-dom";
import "./styles.css"

interface contactType {
  first: string;
  last: string;
  avatar: any;
  twitter: string;
  notes: string;
  favorite: true;
}

type childProps = { children?: React.ReactNode }

export default function MainPage({ children }: childProps) {
  return (
    <>
      <div style={{ background: "red", height: "100%" }}>
        <div style={{ background: "pink", height: 300 }}>
          <OverView />
        </div>
        <div style={{ background: "yellow", height: 300 }}>
          <RecentTransactions />
        </div>
        <div style={{ background: "blue", height: 300 }}>
          <InvestmentSummary />
        </div>
      </div>
    </>
  );
}

const OverView = () => {
  const username = "John"
  const financialStatus = {
    income: 12,
    debt: 12,
    asset: 12,
  }
  useEffect(()=>{
    //use to get current financial data
  })
  return (
    <div className="welcome">
      <div>
        <h1>
          Welcome back {username}
        </h1>
        <div>
          Button to add new income
        </div>
      </div>

      <div>
        <h2>
          Financial status
        </h2>
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
          I am a pie chart
        </div>
      </div>
    </div>
  )
}

const RecentTransactions = () => {

  return (
    <>Transactions</>
  )
}

const InvestmentSummary = () => {

  return (
    <>Investment</>
  )
}