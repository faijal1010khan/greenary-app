import React from 'react';
import '../Css/Home.css';
import { useNavigate } from 'react-router-dom';
// import plant from "../images/plant.jpg";
import { useState, useEffect } from 'react';


const Home = ({ images }) => {
  const [currentindex, setcurrentindex] = useState(0)

  useEffect(() => {
     document.body.style.backgroundColor = '#f5f5f0';

    if (!images || images.length === 0) return;

    if (currentindex >= images.length - 1) return;

    const timer = setTimeout(() => {
      setcurrentindex((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentindex, images]);

  return (
    <>
      <header>
        <div>
          <div className="home">
            <h1 style={{color:'greenyellow'}}>Welcome in Greenary </h1>
          </div>
        </div>
      </header>
      <div style={{  padding: '40px', fontFamily: 'Arial, sans-serif' }}>

        {/* Intro Section */}
        <section style={{ marginBottom: '60px' }}>
          <p style={{ color: '#4d4d4d', fontSize: '18px', maxWidth: '700px' }}>
            Welcome to Greenary – your one-stop shop for vibrant indoor and outdoor plants. Whether
            you’re a seasoned plant parent or just getting started, we have something green and gorgeous
            for everyone. Explore our handpicked collection and breathe life into your space today!
          </p>
        </section>


        {/* Featured Plants Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#254d32', fontSize: '30px', marginBottom: '15px' }}>
            Our Most Loved Plants
          </h2>
          <p style={{ color: '#4d4d4d', fontSize: '16px', maxWidth: '700px' }}>
            Discover our best-selling and customer-favorite plants that brighten up homes and offices.
            From low-maintenance succulents to air-purifying greens, these featured beauties are ready
            to steal the spotlight in your plant collection.
          </p>
        </section>

        {images && images.length > 0 && (
          <div className='Home' style={{ textAlign: 'center', marginTop: '30px' }}>
            <img
              src={images[currentindex]}
              alt={`plant-${currentindex}`}
              className="plant-1"
            />
          </div>
        )}



        {/* Offers Section */}
        <section>
          <h2 style={{ color: '#006400', fontSize: '30px', marginBottom: '15px' }}>
            Grow More, Spend Less – Special Offers Inside!
          </h2>
          <p style={{ color: '#4d4d4d', fontSize: '16px', maxWidth: '700px' }}>
            Enjoy exclusive discounts, limited-time bundles, and seasonal deals on your favorite plants.
            Whether you're shopping for yourself or gifting green, now’s the perfect time to save while
            you grow your indoor jungle.
          </p>
        </section>
      </div>
      
      <footer className='footer'>
      
        <address className='footer-1'>

          <h2>India (IND), Nagpur</h2>
          <p>
            Greenary Street, Nagpur,<br />
            Maharashtra - 440026, India<br />
            Phone: +91 98765 43210<br />
            Email: contact@Greenary.in
          </p>
        </address>
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOaianMZETXAK4H-uP-Tlp4KL7On8EWIuPA&s"
          alt="Flag Icon"
          className="flag"
        />
         
        <div>
          <img src="data:image/jpeg;base64,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"
          alt="" className='call' />
        </div>
         <plaintext>Contact Us</plaintext>

      </footer>

    </>

  );

};

export default Home;

