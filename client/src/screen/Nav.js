import React from 'react';

export default function Nav() {
  return (
    <div>
      <nav class="navbar bNav navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <p class="navbar-brand" href="#">
            Amazona
          </p>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-lg-0">
              <li class="nav-item">
                <p class="nav-link" href="#">
                  Link
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
