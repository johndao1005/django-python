import React from "react";

export interface UserInterface{
    error: {
        statusText: string;
        message: string;
    }
  }

export  interface TransactionsData {
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

  
export  interface BudgetData {
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