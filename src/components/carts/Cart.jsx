import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL, CartContext } from '../../App.js';
import axios from 'axios';
import CartGrid from './CartGrid.jsx';
import '../../styles/carts/Cart.css';

const Cart = () => {
    const { cart, setCart, updateCart } = useContext(CartContext)
    const [cartItems, setCartItems] = useState([])
    const [customer, setCustomer] = useState(null)
    const [totalCost, setTotalCost] = useState(0)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchCartItems = async () => {
            if (!cart.cartId || Object.keys(cart.cartItems).length === 0) return;
            try {
                const fetchedItems = await Promise.all(
                    Object.entries(cart.cartItems).map(async ([productId, quantity]) => {
                        const { data } = await axios.get(`${baseURL}/products/${productId}`)
                        return { ...data, quantity }
                    })
                );

                const sortedItems = handleSort(fetchedItems)
                setCartItems(sortedItems)

                const { data: customerData } = await axios.get(`${baseURL}/customers/${cart.cartCustomerId}`)
                setCustomer(customerData)

                const total = sortedItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0)
                setTotalCost(total)

            } catch (error) {
                console.error('Error fetching cart: ', error)
                setCartItems([])
            }
        };
        fetchCartItems();
    }, [cart.cartId, cart.cartItems]);


    const checkoutCart = async () => {
        if (!cart.cartId || cartItems.length === 0) return;
        try {
            await axios.put(`${baseURL}/carts/checkout/${cart.cartId}`,
                {
                    'billAddress': '1 Office Park',  // note: hard-coded for demo purposes
                    'shipAddress': '2 Suburb Road'
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                });

            await updateCart(cart.cartId, {
                cartItems: {},
            })
            setCartItems([])
            setTotalCost(0)

            navigate('/cart/checkout')

        } catch (error) {
            console.error('Error checking out cart: ', error);
        }
    }


    const emptyCart = async () => {
        if (!cart.cartId || cartItems.length === 0) return;
        try {
            await axios.delete(`${baseURL}/carts/${cart.cartId}`)

            setCart(prevCart => ({
                ...prevCart,
                cartItems: {}
            }));
            setCartItems([]);
            setTotalCost(0);

        } catch (error) {
            console.error('Error emptying cart: ', error)
        }
    }


    const handleSort = (products) => {
        return products.sort((a, b) => a.productName.localeCompare(b.productName))
    }


    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };


    return (
        <div className="cart-container">
            {customer && <h2 className="cart-customer-name">{customer.customerName}'s cart</h2>}
            {cartItems.length === 0 ? (
                <div className="cart-is-empty-message-container">
                    <div className="spacing"></div>
                    <h2>Your cart is empty!</h2>
                    <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>
                        <button className="cart-to-shop-button" >Shop</button>
                    </Link>
                </div>
            ) : (
                <div className="cart-items-container">
                    <div className="cart-items-grid">
                        <CartGrid cartItems={cartItems} />
                    </div>
                    <div className="cart-total-cost">
                        <h3>Total cost: US{formatPrice(totalCost)}</h3>
                    </div>
                    <div className="cart-operations-button-container">
                        <button className="cart-empty-contents-button" onClick={emptyCart} >Empty cart</button>
                        <button className="cart-checkout-button" onClick={checkoutCart} >Checkout</button>
                    </div>
                </div>
            )}
            <div className="spacing"></div>
        </div>
    );
};

export default Cart;