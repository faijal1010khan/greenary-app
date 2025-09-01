//http://localhost:3004/
//http://localhost:3004/plants
// import'/src/index.css'
// import '/src/App.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import { routes } from './Routes/Route.js';
import Home from './Component/Home.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  {store } from "./Store.js";


 const imageList = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JDzenBtcAqWltQDsPuiUDXoUp4GMaKGNUg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH10C1NhIplaNDaxDYf3WwO667UZOJkTqPVA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ18k056RdWMv4jBMBWwCqGZ3AvbPNhWUIGQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMnD3PMdm_eFzvH3uVcXQpAS0kjB7lT18-w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S7Lk9UQwUzSUytxxu4s-RFWzZXhz2H2YYw&s'
  ];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
 <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home images={imageList} />} />    
         <Route path="/home" element={<Home images={imageList} />} />
        {routes && routes.length > 0
          ? routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
                // element={<Component />}
              />
            ))
          : null}
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>
);



///https://commons.wikimedia.org/wiki/Category:Potted_Epipremnum_aureum
//json-server  D:\Greenary\green\src\Api\db.json --watch db.json
// json-server  D:\Greenary\green\src\Api\db.json  --watch -p  3001 db.json      