import { useContext } from "react";
import { useGetOrdersByEmailQuery } from "../redux/Features/Orders/OrdersApi";
import { AuthContext } from "../Context/AuthProvider";

const Order = () => {
  const { currentUser, loading} = useContext(AuthContext);
  const {data: orders =[], isLoading, isError} = useGetOrdersByEmailQuery(currentUser?.email)
  if (loading) return <div>Loading User...</div>;
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  return (
    <div className="container mx-auto p-6">
      <h1>Your Orders</h1>
      {
        orders.length === 0 ? <div>No Order found</div> : <div>
          {
            orders.map((order, ) => <div>
              <h3>OrderId: {order?._id}</h3>
            </div>)
          }
        </div>
      }      
    </div>
  );
};

export default Order;