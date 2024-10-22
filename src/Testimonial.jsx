// import React from "https://cdn.skypack.dev/react@17.0.1";
// import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
// import { useEffect, useState } from "react";
// import img1 from './assets/images/testi-img.jpeg'
// import place from './assets/images/place.png'

// // Data
// const initialImages = [
//   {
//     img: img1,
//     name: "Customer",
//     desc: "Description for Image 1"
//   },

// ];

// // Carousel
// const Testimonial = () => {
//   const [images, setImages] = useState(initialImages);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       moveItems();
//     }, 3000); // Change the interval (in milliseconds) as desired

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const moveItems = () => {
//     // Get the next index
//     const nextIndex = (currentIndex + 1) % images.length;

//     // Update the state with the new current index
//     setCurrentIndex(nextIndex);
//   };

//   const handleItemClick = (index) => {
//     setCurrentIndex(index);
//   };

//   // Function to create a circular index based on the current index and array length
//   const getCircularIndex = (index, length) => {
//     return (index + length) % length;
//   };

//   return (
//     <div className="carousel-container">

// <center>
//           <h2 className='slider-title' data-aos='fade-up' data-aos-delay='400'>WHY INVEST IN AN EV CHARGER?</h2>
//           <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et laborum vitae dolorum minima officiis eum vero, aspernatur, iure eligendi quisquam esse ducimus similique, fuga neque quod aperiam amet tempore.

//           </p>

//         </center>
//       <div className="d-flex flex-column text-center">
//         <div className="carousel-items">
//           {/* Render 5 items on the screen */}
//           {Array(5)
//             .fill()
//             .map((_, index) => {
//               const imageItem =
//                 images[
//                   getCircularIndex(currentIndex + index - 2, images.length)
//                 ];
//               return (
//                 <div
//                   key={index}
//                   className={`${index === 2 ? "center" : "opacity"} ${
//                     (index === 0 || index === 4) &&
//                     "end d-none d-md-block d-lg-block"
//                   }
//                     ${
//                       (index === 1 || index === 3) &&
//                       "d-none d-md-block d-lg-block"
//                     }`}
//                   onClick={() =>
//                     handleItemClick(
//                       getCircularIndex(currentIndex + index - 2, images.length)
//                     )
//                   }
//                 >
//                   <img src={imageItem.img} alt="item" className="testi-img"/>
//                 </div>
//               );
//             })}
//         </div>
//         <div>
//           {/* Render the current item description */}
//           <div className="description">
//             <p>
//               <b>{images[currentIndex].name}</b>
//             </p>
//             <p>{images[currentIndex].desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from 'react'
import img1 from './assets/images/testi-img.jpeg'

const Testimonial = () => {
  return (
    <div className="carousel-container">

      <div className="container">
        <center>
          <h2 className='slider-title' data-aos='fade-up' data-aos-delay='400'>WHY INVEST IN AN EV CHARGER?</h2>
          <p className="px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda et laborum vitae dolorum minima officiis eum vero, aspernatur, iure eligendi quisquam esse ducimus similique, fuga neque quod aperiam amet tempore.</p>

        </center>
        <div className="testi-con">
          <img src={img1} alt="img1" />
          <div className="second-con">
            <h3>Sampath Kumar</h3>
            <p>Good initiate and I'm really impressed with their work</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
