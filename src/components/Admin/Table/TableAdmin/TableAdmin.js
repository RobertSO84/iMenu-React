import React, { useState, useEffect } from 'react';
import { Label } from "semantic-ui-react";
import { size, sortedIndex } from "lodash";
import { getOrdersByTableApi } from "../../../../api/orders";
import { ORDER_STATUS } from "../../../../utils/constants";
import { ReactComponent as IcTable } from "../../../../assets/mesa7.svg";
import "./TableAdmin.scss";

export function TableAdmin(props) {
    const { table } = props;
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        (async () => {
            
            const response = await getOrdersByTableApi(table.id, ORDER_STATUS.PENDING
            );
            setOrders(response);
        })();
    }, []);

    return (
        <div className="table-admin">
            { size(orders) > 0 ? <Label circular color="orange">{size(orders)}</Label> : null}

            <IcTable />
            <p>Mesa {table.number}</p>
            
        </div>
    )
}
