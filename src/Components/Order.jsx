import { useGetOrdersByEmailQuery } from "../redux/Features/Orders/OrdersApi";

const Order = () => {
  const {data: orders =[], isLoading, isError} = useGetOrdersByEmailQuery()
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <div>
      <h1>Oi mama Ki ki niba</h1>
    </div>
  );
};

export default Order;