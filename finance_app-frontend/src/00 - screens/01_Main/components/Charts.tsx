import { Button, Flex } from "antd";
import { Line, Pie } from "react-chartjs-2";
import {

    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, ArcElement, DoughnutController
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

export function InvestmentChart() {
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

    return (
        <div>
            <h2>Budget Details</h2>
            <div >
                <Pie id="budget" data={pieData} options={options} />
            </div>
        </div>
    )

}

export function ExpenseChart() {
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

    return (
        <div>
            <h2>Budget Details</h2>
            <div >
                <Pie id="budget" data={pieData} options={options} />
            </div>
        </div>
    )

}

export function BudgetChart() {
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

    return (
        <div>
            <h2>Budget Details</h2>
            <div >
                <Pie id="budget" data={pieData} options={options} />
            </div>
        </div>
    )

}