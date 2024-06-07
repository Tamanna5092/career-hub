import React from "react";
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-10 bg-black text-[#FFFFFFB2]">
      <div className="footer flex justify-between max-w-6xl mx-auto mb-12">
      <aside>
        <h1 className="text-white text-4xl font-extrabold">CareerHub</h1>
        <p>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
        <div className="flex gap-4 mt-5">
        <a href=""><FaFacebook className="text-2xl"></FaFacebook></a>
        <a href=""><FaTwitterSquare className="text-2xl"></FaTwitterSquare></a>
        <a href=""><FaInstagram className="text-2xl"></FaInstagram></a>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title text-white">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Work</a>
        <a className="link link-hover">Latest News</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white">Product</h6>
        <a className="link link-hover">Prototype</a>
        <a className="link link-hover">Plans & Pricing</a>
        <a className="link link-hover">Customers</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white">Support</h6>
        <a className="link link-hover">Help Desk</a>
        <a className="link link-hover">Sales</a>
        <a className="link link-hover">Become a Partner</a>
        <a className="link link-hover">Developers</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white">Contact</h6>
        <a className="link link-hover">524 Broadway , NYC</a>
        <a className="link link-hover">+1 777 - 978 - 5570</a>
      </nav>
      </div>
      <hr />
      <div className="flex justify-between max-w-6xl mx-auto my-12 font-semibold text-[#FFFFFF66]">
      <p className=""><small>@2023 CareerHub. All Rights Reserved</small></p>
      <p><small>Powered by CareerHub</small></p>
      </div>
    </footer>
  );
};

export default Footer;
