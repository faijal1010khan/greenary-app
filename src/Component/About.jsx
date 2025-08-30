
import React, { useEffect } from 'react';
import '../Css/About.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images }) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true
  };
   useEffect(() => {
           document.body.style.backgroundColor = '#f5f5f0';

           About()
      }, [])
  return (
    <div style={{  margin: 'auto', marginTop: '600px',marginLeft:'200px', }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
               
                width: '250px',
                height: '300px',
                // objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

function About() {
  const sliderImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JDzenBtcAqWltQDsPuiUDXoUp4GMaKGNUg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH10C1NhIplaNDaxDYf3WwO667UZOJkTqPVA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ18k056RdWMv4jBMBWwCqGZ3AvbPNhWUIGQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMnD3PMdm_eFzvH3uVcXQpAS0kjB7lT18-w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S7Lk9UQwUzSUytxxu4s-RFWzZXhz2H2YYw&s'
  ];

  return (
    <>
      <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <section style={{ marginBottom: '60px' }}>
          <p style={{ color: '#4d4d4d', fontSize: '18px', maxWidth: '700px' }}>
            At Greenary, we believe that bringing nature into everyday spaces can transform
            the way we live, work, and feel. What started as a small passion for plants grew
            into a mission to reconnect people with the natural world — one leaf at a time.
            We curate beautiful, sustainable greenery for homes and workplaces, helping our
            customers create environments that are calming, vibrant, and full of life. With
            Greenary, greenery isn't just decoration — it's a way of life.
          </p>
        </section>



        <img src="/src/images/plant-nursery.webp" alt="Nursery view" className="nursery" />
        <section>
          <p style={{ color: '#4d4d4d', fontSize: '18px', maxWidth: '700px' }} className='second-para'>
            Greenary started with a simple idea: to bring nature closer to everyday life.
            After spending too much time indoors, we realized how much a single plant could
            change a space — and a mood. What began as a few pots on a windowsill grew into
            a mission to help others create calm, green spaces at home. Greenary makes it easy
            to choose, care for, and enjoy plants — even if you’re just starting out.
          </p>
          <img src="/src/images/nursery-2.jpeg" alt="Nursery with plants" className='nursery-2' />
        </section>
         <ImageSlider images={sliderImages} />
      </div>

     
     
    </>
  );
}

export default About;
