// import React from "react";
// import img from "../assets/myimg.jpg";

// const Thanks = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-[#141414] text-[#AA9E8B] p-6">
//       {/* Circular Image with very large size */}
//       <img
//         src={img} // Replace with your actual image URL
//         alt="Your Name"
//         className="w-50 h-50 rounded-full border-4 border-[#EB5939] mb-6 object-cover" // Increased size to very large
//       />
//       <h1 className="text-6xl text-[#EB5939] mb-6">Thank You for Visiting!</h1>
//       <p className="text-2xl mb-4">
//         I'm glad you took the time to check out my portfolio.
//       </p>
//       <p className="text-xl">
//         If you have any questions or would like to connect, feel free to{" "}
//         <a
//           href="mailto:naveenbeniwal00001@gmail.com"
//           className="text-[#EB5939] font-bold hover:underline"
//         >
//           reach out!
//         </a>
//       </p>
//     </div>
//   );
// };

// export default Thanks;
import React, { useState } from "react";
import img from "../assets/myimg.jpg";

const Thanks = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#141414] text-[#AA9E8B] p-6">
      {/* Container for flip effect */}
      <div
        className="relative w-50 h-50 transition-transform duration-700 perspective"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Front side with image */}
        <img
          src={img}
          alt="Your Name"
          className={`w-full h-full rounded-full border-4 border-[#EB5939] object-cover transition-opacity duration-700 ${
            hover ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Back side with message */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full bg-[#141414] border-4 border-[#EB5939] transition-opacity duration-700 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl text-[#EB5939]">Bas kar bhai or kya lega</p>
        </div>
      </div>

      <h1 className="text-6xl text-[#EB5939] mb-6">Thank You for Visiting!</h1>
      <p className="text-2xl mb-4">
        I'm glad you took the time to check out my portfolio.
      </p>
      <p className="text-xl">
        If you have any questions or would like to connect, feel free to{" "}
        <a
          href="mailto:naveenbeniwal00001@gmail.com"
          className="text-[#EB5939] font-bold hover:underline"
        >
          reach out!
        </a>
      </p>
    </div>
  );
};

export default Thanks;
