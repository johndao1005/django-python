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
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  phoneNumber: string | null;
  isAnonymous: boolean;
  tenantId: string | null;
  providerData: any;
  metadata: {
    creationTime: string | null;
    lastSignInTime: string | null;
  };
  refreshToken: string;
}

export type metadataType = {
  creationTime: string;
  lastSignInTime: string;
}

export interface FirebaseAuthError {
  code: string;
  message: string;
  // Additional properties may be included
}