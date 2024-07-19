import { Button, Flex, Row } from "antd";
import { BudgetChart } from "./Charts";
import {
    PlusOutlined
} from '@ant-design/icons';



export default function Overview() {

    const username = "John"
    const financialStatus = {
        income: 12,
        debt: 12,
        asset: 12,
    }


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
            TODO : Add a to do list
             <div>
              To do list
            </div> */}
            </div>

            <Flex align="flex-start" vertical>

                <div>
                    <BudgetChart />
                </div>
            </Flex>
        </Row>
    )

}