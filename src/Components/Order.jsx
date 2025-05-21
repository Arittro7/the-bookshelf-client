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
    <div className="container mx-auto p-6 ">
      <h1 className="text-2xl uppercase font-semibold">Your OrderS</h1>
      <div>
      {
        orders.length === 0 ? <div>No Order found</div> : <div>
          {
            orders.map((order, index) => <div>
              <h3 className="text-blue-900 mt-5 font-semibold"><span className="bg-yellow-400 py-1 px-2 rounded-md">{index + 1}.</span> OrderId: {order?._id}</h3>
              <p className="font-semibold">Ordered By:{order.name}</p>
              <p><span className="font-semibold">Email:</span>{order.email}</p>
              <p><span className="font-semibold">Phone:</span>{order.phone}</p>
              <p><span className="font-semibold">Amount</span>: ${order.totalPrice}</p>
              <p>Product Id</p>
              <ul>
                {order.productIDs.map((productID) => (
                <li key={productID}>{productID}</li>))}
              </ul>
            </div>)
          }
        </div>
      }    
      </div>    
    </div>
  );
};

export default Order;