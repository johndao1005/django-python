import { Button, Flex, Row } from "antd";
import { ExpenseChart } from "./Charts";
import {
    PlusOutlined, ArrowsAltOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";



export default function Overview() {
    const username = "John"

    return (
        <Row gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }} justify="space-around" className="welcome">
            <div style={{ margin: "auto 0", width: 300 }}>
                <h1>
                    Welcome back {username}
                </h1>
                <Button type="primary" icon={<PlusOutlined />}>New Transactions</Button>
                {/*
            TODO : Add a to do list or upcoming events
             <div>
              To do list
            </div> */}
            </div>

            <Flex  align="flex-center" vertical>
                <Flex align="flex-start" justify="center" gap="small" style={{ alignItems: "center", height:28, marginTop:50 }}>
                    <h2>Expense Breakdown</h2>
                    <Link to={"/transactions"}><ArrowsAltOutlined /></Link>
                </Flex>
                <ExpenseChart />
            </Flex>
        </Row>
    )

}