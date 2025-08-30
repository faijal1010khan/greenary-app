import '/src/Css/Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsHeart } from "react-icons/bs";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { searchInput } from "../Redux/SearchInputSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const searchInputStr = useSelector((state) => state?.searchInput?.inputValue);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid justify-content-center align-items-center" style={{ fontSize: '22px', color: '#000000' }}>
                {/* <Link className="navbar-brand  me-auto" to="/home"></Link> */}
                <Link to="/home" style={{ color: 'greenyellow', fontweight: 'bold', textDecoration: 'none', fontSize: '40px',marginLeft:'-0.5%'}} >
                    Greenary
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav align-items-center " style={{ gap: '40px', marginRight: '30%' }}>
                        <li className="nav-item ">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                     
                        <li className="nav-item ms-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="form-control"
                                style={{ height: '40px', marginLeft: '40%', width: '300px' }}
                                value={searchInputStr}
                                onChange={(e) => dispatch(searchInput(e.target.value))}
                            />
                        </li>
                        <li>
                            <div className='top2'>
                                <BsHeart className='heart' />
                                <h2 className='dev'>|</h2>
                                <LiaShoppingBagSolid className='bag' />
                                <div className='cart'>Shopping</div>
                                <div className='cart-2'>cart:</div>
                                <div className='dollar'>₹570.00</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    )
}

export default Navbar;
