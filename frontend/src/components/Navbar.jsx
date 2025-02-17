import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">BookStore

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">BOOKS

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ADD BOOKS

          </a>
        </li>
      
       
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  
)
}

export default Navbar;
