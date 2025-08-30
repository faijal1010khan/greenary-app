
import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchInput } from "../Redux/SearchInputSlice";
import ProductList from "../Component product/ProductList";
import { dummyjsonURL } from "../Api/Appconstant";
import { getApi } from "../Api/Api";

const Products = () => {
  const dispatch = useDispatch();
  const searchInputStr = useSelector((state) => state?.searchInput?.inputValue);

  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItems, setPerPageItems] = useState(12);

  // Fetch data on mount
  const fetchProducts = () => {
    getApi(
      dummyjsonURL,
      "",
      (data) => {
        // Adjust this line if your API returns products under a key (e.g., data.products)
        setProductList(data);
        setFilteredProducts(data);
      },
      (err) => {
        console.error(err);
        setProductList([]);
        setFilteredProducts([]);
      }
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f0";
    fetchProducts();

    return () => {
      dispatch(searchInput("")); // Clear search on unmount
    };
  }, []);

  // Filter products based on search input
  useEffect(() => {
    setCurrentPage(1); // Reset to first page on new search
    if (searchInputStr !== "") {
      const filtered = productList.filter((item) =>
      
      item.title?.toLowerCase().includes(searchInputStr.toLowerCase())

      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productList);
    }
  }, [searchInputStr, productList]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / perPageItems);
  const startIndex = (currentPage - 1) * perPageItems;

  const paginatedItems = useMemo(() => {
    return filteredProducts.slice(startIndex, startIndex + perPageItems);
  }, [filteredProducts, startIndex, perPageItems]);

  return (
    <div>
      {/* Render Products */}
      <ProductList productList={paginatedItems} />

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center align-items-center gap-2 mt-3 flex-wrap">
        {/* Page Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`btn btn-md ${
              currentPage === index + 1 ? "btn-primary" : "btn-outline-primary"
            } border`}
          >
            {index + 1}
          </button>
        ))}

        {/* Items Per Page Selector */}
        <select
          className="form-select w-auto"
          value={perPageItems}
          onChange={(e) => {
            setPerPageItems(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          {[5, 9, 10, 12, 20].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <p className="text-center mt-4">No plant found</p>
      )}
    </div>
  );
};

export default Products;
