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
          <img src="src\images\Call.webp" alt="" className='call' />
        </div>
         <plaintext>Contact Us</plaintext>

      </footer>

    </>

  );

};

export default Home;

