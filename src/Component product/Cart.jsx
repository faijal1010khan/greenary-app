
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart, updateQuantity } from '../Redux/Cart';

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);

//   const total = cartItems.reduce(
//     (acc, item) => acc + item.rupees * item.quantity,
//     0
//   );

//   // State for customer info form
//   const [customerInfo, setCustomerInfo] = useState({
//     name: '',
//     address: '',
//     phone: '',
//     paymentMethod: 'cash',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerInfo(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For now just alert the info and total
//     alert(`Order Summary:
// Name: ${customerInfo.name}
// Address: ${customerInfo.address}
// Phone: ${customerInfo.phone}
// Payment Method: ${customerInfo.paymentMethod}
// Total: ₹${total}`);
//     // Here you can extend to call an API or dispatch an action
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>

//           <table className="table table-bordered mt-3">
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Price (₹)</th>
//                 <th>Quantity</th>
//                 <th>Subtotal</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map(item => (
//                 <tr key={item.id}>
//                   <td>
//                     <img src={item.images[0]} width="50" alt={item.title} />
//                   </td>
//                   <td>{item.title}</td>
//                   <td>{item.rupees}</td>
//                   <td>
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.quantity}
//                       onChange={(e) =>
//                         dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
//                       }
//                       style={{ width: "60px" }}
//                     />
//                   </td>
//                   <td>₹ {item.rupees * item.quantity}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => dispatch(removeFromCart(item.id))}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <h4 className="text-end me-4">Total: ₹ {total}</h4>

//           {/* Checkout form */}
//           <div className="mt-5">
//             <h3>Checkout</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={customerInfo.name}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Address</label>
//                 <textarea
//                   name="address"
//                   value={customerInfo.address}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   rows="3"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Phone Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={customerInfo.phone}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                   pattern="[0-9]{10}"
//                   title="Enter a valid 10-digit phone number"
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Payment Method</label>
//                 <select
//                   name="paymentMethod"
//                   className="form-select"
//                   value={customerInfo.paymentMethod}
//                   onChange={handleInputChange}
//                 >
//                   <option value="cash">Cash on Delivery</option>
//                   <option value="upi">UPI</option>
//                   <option value="credit">Credit Card</option>
//                   <option value="debit">Debit Card</option>
//                   <option value="netbanking">Net Banking</option>
//                 </select>
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Place Order
//               </button>
//             </form>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Redux/Cart';
import '/src/Css/Cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.rupees * item.quantity,
    0
  );

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'cash',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Summary:
Name: ${customerInfo.name}
Address: ${customerInfo.address}
Phone: ${customerInfo.phone}
Payment Method: ${customerInfo.paymentMethod}
Total: ₹${total}`);
  };

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* ✅ Responsive table wrapper added here */}
          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.images[0]} width="50" alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.rupees}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
                        }
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>₹ {item.rupees * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="text-end me-4">Total: ₹ {total}</h4>

          {/* Checkout form */}
          <div className="mt-5">
            <h3>Checkout</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="3"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a valid 10-digit phone number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Method</label>
                <select
                  name="paymentMethod"
                  className="form-select"
                  value={customerInfo.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="cash">Cash on Delivery</option>
                  <option value="upi">UPI</option>
                  <option value="credit">Credit Card</option>
                  <option value="debit">Debit Card</option>
                  <option value="netbanking">Net Banking</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Place Order
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
