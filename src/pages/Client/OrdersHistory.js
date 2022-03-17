import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { size, map, forEach } from "lodash";
import { OrderHistoryItem } from "../../components/Client/OrderHistoryItem/OrderHistoryItem";
import { useOrder, useTable } from "../../hooks";

export function OrdersHistory() {
  const { loading, orders, getOrdersByTable } = useOrder();
  const { getTableByNumber } = useTable();
  const { tableNumber } = useParams();

  useEffect(() => {
    (async () => {
      const table = await getTableByNumber(tableNumber);
      const idTable = table[0].id;

      getOrdersByTable(idTable, "", "ordering=-status,-created_at");
    })();
  }, []);

  return (
    <div>
      <h1>Historial de pedidos</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {map(orders, (order) => (
            <OrderHistoryItem key={order.id} order={order} />
          ))}
        </>
      )}
    </div>
  );
}
