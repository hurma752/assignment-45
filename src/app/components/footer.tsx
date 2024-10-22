
import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section about">
        <h3>About Us</h3>
        <p>
          Welcome to our blog, where we share insightful articles on various topics. Stay connected for the latest updates.
        </p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: <a href="hurma.zafar20@gmail.com">hurma.zafar20@gmail.com</a></p>
        <p>Phone: +92 3214019417</p>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 Healthy lifestylers. All Rights Reserved.</p>
    </div>
  </footer>
);
};

