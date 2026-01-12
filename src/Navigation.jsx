import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-dark bg-success">
        <div className="container-fluid ">

          {/* Brand */}
          <Link className="navbar-brand fw-bold " to="/" onClick={closeMenu}>
            HospitalApp
          </Link>

          {/* Desktop Menu (>= lg) */}
          <ul className="navbar-nav ms-auto p-1  d-none d-lg-flex flex-row gap-3">
            <li className="nav-item ">
              <Link className="nav-link text-white " to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/patient">Patient</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/doctor">Doctor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add-doctor">Add Doctor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/add-patient">Add Patient</Link>
            </li>
          </ul>

          {/* Mobile / Tablet Toggle (< lg) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>

      {/* SIDE MENU (Mobile & Tablet only) */}
      <div
        className="d-lg-none"
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-260px',
          width: '260px',
          height: '100vh',
          backgroundColor: '#198754',
          transition: 'right 0.3s ease-in-out',
          zIndex: 1050,
          paddingTop: '20px'
        }}
      >
        <button
          className="btn btn-close btn-close-white ms-auto me-3"
          onClick={closeMenu}
        ></button>

        <ul className="nav flex-column text-center mt-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/patient" onClick={closeMenu}>Patient</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/doctor" onClick={closeMenu}>Doctor</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/add" onClick={closeMenu}>Add Doctor</Link>
          </li>
        </ul>
      </div>

      {/* OVERLAY (Mobile only) */}
      {isOpen && (
        <div
          className="d-lg-none"
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1040
          }}
        ></div>
      )}
    </>
  );
}
