// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="#">
//           <img
//             src="data:image/jpeg;base64,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"
//             alt="Marknox web dev"
//             style={{ width: "35px" }}
//           />
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarText"
//           aria-controls="navbarText"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarText">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 About
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Portfolio
//               </a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="https://boostgrad-production-public.s3.us-east-2.amazonaws.com/uploads/images/1720344439265.jpeg" alt="marknox assignment" style={{"width":"30px"}} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link" smooth={true}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" smooth={true}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link" smooth={true}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" smooth={true}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
