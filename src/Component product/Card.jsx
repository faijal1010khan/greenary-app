// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Card = ({ cardDetail }) => {
//     const [showFullDescription, setShowFullDescription] = useState(false);

//     const toggleDescription = () => {
//         setShowFullDescription(!showFullDescription);
//     };

//     const carouselId = `carousel-${cardDetail?.id}`;

//     return (
//         <div
//             className="card"
//             style={{
//                 width: "18rem",
//                 marginTop: "4%",
//                 padding: "10px",
//                 backgroundColor: "#e0f7ec",
//             }}
//         >
//             {/* Image Carousel */}
//             <div id={carouselId} className="carousel slide">
//                 <div className="carousel-inner">
//                     {cardDetail?.images?.slice(0, 3).map((img, index) => (
//                         <div
//                             className={`carousel-item ${index === 0 ? "active" : ""}`}
//                             key={index}
//                         >
//                             <img
//                                 src={img}
//                                 className="d-block w-100"
//                                 alt={`slide-${index}`}
//                                 style={{
//                                     height: "180px",
//                                     objectFit: "cover",
//                                 }}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Carousel Controls */}
//                 <button
//                     className="carousel-control-prev"
//                     type="button"
//                     data-bs-target={`#${carouselId}`}
//                     data-bs-slide="prev"
//                 >
//                     <span className="carousel-control-prev-icon" aria-hidden="true" />
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button
//                     className="carousel-control-next"
//                     type="button"
//                     data-bs-target={`#${carouselId}`}
//                     data-bs-slide="next"
//                 >
//                     <span className="carousel-control-next-icon" aria-hidden="true" />
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>

//             {/* Card Body */}
//             <div className="card-body">
//                 <h5 className="card-title">{cardDetail?.title}</h5>

//                 {/* Product Price */}
//                 <p className="card-text fw-bold" style={{ fontSize: '25px' }} >Price : ₹ {cardDetail?.rupees}</p>

//                 {/* Description with toggle */}
//                 <p className="card-text">
//                     {showFullDescription
//                         ? cardDetail?.description
//                         : `${cardDetail?.description?.slice(0, 80)}...`}
//                 </p>

//                 {/* Show more / Show less button */}
//                 {cardDetail?.description?.length > 80 && (
//                     <button
//                         className="btn btn-link p-0"
//                         style={{ fontSize: "0.9rem" }}
//                         onClick={toggleDescription}
//                     >
//                         {showFullDescription ? "Show less" : "Show more"}
//                     </button>
//                 )}


//                 <div className="mt-2">
//                     <Link
//                         to={`/products/${cardDetail?.id}`}
//                         style={{
//                             backgroundColor: 'gold',
//                             fontSize: '18px',
//                             padding: '8px 16px',
//                             borderRadius: '5px',
//                             color: '#000',
//                             textDecoration: 'none',
//                             display: 'inline-block',
//                             fontWeight: 'bold',
//                         }}
//                     >
//                         Add Cart
//                     </Link>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Card;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Cart';

const Card = ({ cardDetail }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const dispatch = useDispatch();

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const carouselId = `carousel-${cardDetail?.id}`;

    return (
        <div
            className="card"
            style={{
                width: "18rem",
                marginTop: "4%",
                padding: "10px",
                backgroundColor: "#e0f7ec",
            }}
        >
            {/* Image Carousel */}
            <div id={carouselId} className="carousel slide">
                <div className="carousel-inner">
                    {cardDetail?.images?.slice(0, 3).map((img, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                            key={index}
                        >
                            <img
                                src={img}
                                className="d-block w-100"
                                alt={`slide-${index}`}
                                style={{
                                    height: "180px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#${carouselId}`}
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Card Body */}
            <div className="card-body">
                <h5 className="card-title">{cardDetail?.title}</h5>

                <p className="card-text fw-bold" style={{ fontSize: '20px' }}>
                    Price : ₹ {cardDetail?.rupees}
                </p>

                <p className="card-text">
                    {showFullDescription
                        ? cardDetail?.description
                        : `${cardDetail?.description?.slice(0, 80)}...`}
                </p>

                {cardDetail?.description?.length > 80 && (
                    <button
                        className="btn btn-link p-0"
                        style={{ fontSize: "0.9rem" }}
                        onClick={toggleDescription}
                    >
                        {showFullDescription ? "Show less" : "Show more"}
                    </button>
                )}

                <div className="mt-2 d-flex justify-content-between">
                    <Link
                        to={`/products/${cardDetail?.id}`}
                        style={{
                            backgroundColor: '#198754',
                            fontSize: '16px',
                            padding: '6px 12px',
                            borderRadius: '5px',
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}
                    >
                        View Details
                    </Link>

                    <button
                        onClick={() => dispatch(addToCart(cardDetail))}
                        style={{
                            backgroundColor: 'gold',
                            fontSize: '16px',
                            padding: '6px 12px',
                            borderRadius: '5px',
                            border: 'none',
                            fontWeight: 'bold',
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
