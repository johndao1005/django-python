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

export type currentUser = null | {
  user:
  {email: null | string;
  password: string}
}

export type firebaseUser = null | {
  accessToken: string;
  email: string;
  uid: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  phoneNumber: string;
  isAnonymous: boolean;
  tenantId: string;
  providerData: any;
  apiKey: string;
  appName: string;
  authDomain: string;
  stsTokenManager: any;
  redirectEventId: string;
  lastLoginAt: string;
  createdAt: string;
  metadata : metadataType;
}
export type metadataType = {
  creationTime: string;
  lastSignInTime: string;
}
