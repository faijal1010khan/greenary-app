// import Card from '../Component product/Card'
// // import react from react
// import { Link } from 'react-router-dom';

// const ProductList = (props) => {
//     const { productList } = props;
//     return (
//         <div className='container d-flex flex-wrap' style={{ gap: "45px", justifyContent: 'center' }}>
//             {
//                 productList && productList?.map((cardDetail) => {
//                     // return <  Card cardDetail={cardDetail}/> 
//                     return <Card key={cardDetail.id} cardDetail={cardDetail} />

//                 })
//             }
//             <Link
//                 key={cardDetail.id}
//                 to={`/products/${cardDetail.id}`}
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//             >
//                 <Card cardDetail={cardDetail} />
//             </Link>


//         </div>
//     )



// }

// export default ProductList


import React from 'react';
import Card from '../Component product/Card';
import { Link } from 'react-router-dom';  // <-- Import Link

const ProductList = (props) => {
    const { productList } = props;
    return (
        <div className='container d-flex flex-wrap' style={{ gap: "45px", justifyContent: 'center' }}>
            {
                productList && productList.map((cardDetail) => {
                    return (
                        // <-- Wrap Card inside Link for navigation
                        <Link 
                          key={cardDetail.id} 
                          to={`/products/${cardDetail.id}`} 
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <Card cardDetail={cardDetail} />
                        </Link>
                    );
                })
            }
        </div>
    );
};

export default ProductList;
