import React from "react";
function Footer() {
  return (
    <footer className="foot">
      <div className="hed">
        <h1 className="p1">STUDENTSYNC MANAGEMENT APP</h1>
        <h4 className="p2">Students management plateform</h4>
      </div>
      <div className="home">
        <div className="our-address">
          <b className="our">Our address</b>

          <p>
            <img
              src="src/assets/f1.png"
              alt="location photo"
              className="Image"
            />
            Gasabo district,Kinyinya sector,Muhima Cell,Rusenyi Village
            <p className="gasabo"> KG 29 AVE 16,Kigali,Rwanda</p>
          </p>
          <p className="working">
            <img
              src="src/assets/ff.png"
              alt="Working-duration"
              className="Image"
            />
            Working hours:Monday-Friday 08:00-17:00
          </p>
        </div>

        <div className="contact-us">
          <b>Contact Us</b>
          <p>
            <img src="src/assets/f3.png" alt="Email" className="Image" />
            info@thegymecapstone.rwa
          </p>
          <p>
            <img src="src/assets/f4.png" alt="Phone" className="Image" />
            0788-322-223
          </p>
        </div>
        <div className="social-media">
          <p>
            <b>Social Media</b>
          </p>

          <img src="src/assets/f5.png" alt="instagram" className="Image" />
          <img src="src/assets/f6.png" alt="Facebook" className="Image" />
          <img src="src/assets/f7.png" alt="Youtube" className="Image" />
        </div>
      </div>
      <div className="cop">&copy; Studentsync.All rights reserved.</div>
    </footer>
  );
}

export default Footer;
