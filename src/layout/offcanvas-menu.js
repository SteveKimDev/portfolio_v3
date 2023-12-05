import React, { useState } from 'react';
import { Offcanvas, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

// CSS
import './styles/header.css';

function OffCanvasMenu({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='menu-btn'>
        <span>MENU</span>
      </button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        {/* Header */}
        <Offcanvas.Header className='relative offcanvas-header'>
          <button onClick={handleClose} className='close-btn'>
            <span>CLOSE</span>
          </button>
        </Offcanvas.Header>

        {/* Body */}
        <Offcanvas.Body>
          {/* Nav Links */}
          <Row>
            <Col xs={12}>
              <div className='relative nav-link-div nav-link-div-1'>
                <Link to='/' onClick={handleClose}>
                  HOME
                </Link>
              </div>
            </Col>
            <Col xs={12}>
              <div className='relative nav-link-div nav-link-div-2'>
                <Link to='/about' onClick={handleClose}>
                  ABOUT
                </Link>
              </div>
            </Col>
            <Col xs={12}>
              <div className='relative nav-link-div nav-link-div-3'>
                <Link to='/#projects' onClick={handleClose}>
                  CASE STUDIES
                </Link>
              </div>
            </Col>
            <Col xs={12}>
              <div className='relative nav-link-div nav-link-div-4'>
                <a href='mailto:me@stevekimdev.com' onClick={handleClose}>
                  CONTACT
                </a>
              </div>
            </Col>
          </Row>

          {/* socail links */}
          <Row>
            <Col
              lg={{ span: 4, offset: 4 }}
              sm={{ span: 6, offset: 3 }}
              xs={12}
              className='social-link-col'
            >
              <div className='relative social-link-div'>
                <a
                  href='https://www.linkedin.com/in/stevekim10'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleClose}
                >
                  LinkedIn
                </a>
              </div>
              <div className='relative social-link-div'>
                <a
                  href='https://www.behance.net/stevekim_designs'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleClose}
                >
                  Behance
                </a>
              </div>
              <div className='relative social-link-div'>
                <a
                  href='https://github.com/SteveKimDev'
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleClose}
                >
                  Github
                </a>
              </div>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasBtn() {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasMenu key={idx} placement={placement} />
      ))}
    </>
  );
}

export default OffCanvasBtn;
