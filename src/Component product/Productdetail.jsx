import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingeEntityApi } from '../Api/Api';
import { toastError } from '../Navbar/Toast';
import { dummyjsonURL } from '../Api/Appconstant';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Cart';

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };


  useEffect(() => {
    getSingeEntityApi(
      dummyjsonURL,
      id,
      (data) => setProductData(data),
      (err) => {
        toastError(err.message);
        setProductData({});
      }
    );
  }, [id]);

  if (!productData) {
    return <p className="text-center mt-5">Loading product details...</p>;
  }

  const carouselId = `carousel-${productData?.id}`;

  return (

    <div className="d-flex justify-content-center mt-5">
      <div
        className="card"
        style={{
          width: "22rem",
          backgroundColor: "#e0f7ec",
          padding: "15px",
          borderRadius: "10px"
        }}
      >
        {/* Image Carousel */}
        {productData?.images?.length > 0 && (
          <div id={carouselId} className="carousel slide">
            <div className="carousel-inner">
              {productData.images.slice(0, 3).map((img, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={img}
                    className="d-block w-100"
                    alt={`product-${index}`}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />
                </div>
              ))}
            </div>

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
        )}

        {/* Product Details */}
        <div className="card-body">
          <h4 className="card-title">{productData?.title || "No Title"}</h4>

          {productData?.rupees && (
            <p className="fw-bold" style={{ fontSize: "20px" }}>
              Price: ₹ {productData.rupees}
            </p>
          )}

          {productData?.description && (
            <p className="card-text">
              {productData.description}
            </p>
          )}

          <button
            className="btn btn-warning mt-3"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>



        </div>
      </div>
    </div>

  );
};

export default ProductDetail;
