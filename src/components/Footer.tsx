
'use client';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer p1" id="footer">
      <div className="max-w-[1280px] px-2 mx-auto grid--footer">
        {/* Logo + Social */}
        <div className="logo-col">
          <div className="col-logo-in">
            <a href="#" className="footer-logo">
              <img
                className="footer-logo1"
                alt="Idea Plus Software"
                src="/images/logo.png"
                height="30"
              />
            </a>
          </div>

          <div className="social-links">
            <div className="social-link-box">
              <a className="footer-link" href="#">
                <FaInstagram className="social-icon" />
              </a>
            </div>
            <div className="social-link-box">
              <a className="footer-link" href="#">
                <FaFacebook className="social-icon" />
              </a>
            </div>
            <div className="social-link-box">
              <a className="footer-link" href="#">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>

          <p className="copyright footer-color">
            Copyright © <span className="year">2025</span> All Rights Reserved by ideaplusjal.in
          </p>
        </div>

        {/* Address / Contact */}
        <div className="address-col">
          <p className="footer-heading footer-color">Contact Us</p>
          <address className="contacts not-italic">
            <p className="address footer-color font-semibold">IDEA PLUS SOFTWARE</p>
            <p className="footer-color">
              HNo. 1153-B/32, Sant Nagar<br />
              Laodwali Road, Jalandhar – 144001
            </p>
            <div className="contact-link mt-2">
              <span className="font-medium">Call:</span>{' '}
              <a className="footer-link" href="tel:9888813328">9888813328</a>,{' '}
              <a className="footer-link" href="tel:9876110328">9876110328</a>
            </div>
            <div className="contact-link mt-2">
              <span className="font-medium">E-mail:</span>{' '}
              <a className="footer-link" href="mailto:iqbaljitsingh@yahoo.com">
                iqbaljitsingh@yahoo.com
              </a>
            </div>
            <div className="contact-link mt-2">
              <span className="font-medium">Office:</span>{' '}
              0181-2915328 – 0181-4150328 – 9877029600
            </div>
          </address>
        </div>

        {/* Quick Links */}
        <div className="bottom-link">
          <p className="footer-heading footer-color">Quick Links</p>
          <ul className="footer-nav">
            <li><Link className="footer-link" href="/">Home</Link></li>
            <li><Link className="footer-link" href="/services">Services</Link></li>
            <li><Link className="footer-link" href="/about-us">About</Link></li>
             <li><Link className="footer-link" href="/contact-us">Contact</Link></li>
            <li><Link className="footer-link" href="/download">Download</Link></li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
}
