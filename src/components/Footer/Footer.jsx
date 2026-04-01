import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <footer className="container mx-auto px-6 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand - full width on mobile */}
          <aside className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">DigiTools</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </aside>

          {/* Product */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white text-sm font-semibold uppercase tracking-wider mb-1">
              Product
            </h6>
            <a className="link link-hover text-white/60 text-sm">Features</a>
            <a className="link link-hover text-white/60 text-sm">Pricing</a>
            <a className="link link-hover text-white/60 text-sm">Templates</a>
            <a className="link link-hover text-white/60 text-sm">
              Integrations
            </a>
          </nav>

          {/* Company */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white text-sm font-semibold uppercase tracking-wider mb-1">
              Company
            </h6>
            <a className="link link-hover text-white/60 text-sm">About</a>
            <a className="link link-hover text-white/60 text-sm">Blog</a>
            <a className="link link-hover text-white/60 text-sm">Careers</a>
            <a className="link link-hover text-white/60 text-sm">Press</a>
          </nav>

          {/* Resources */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white text-sm font-semibold uppercase tracking-wider mb-1">
              Resources
            </h6>
            <a className="link link-hover text-white/60 text-sm">
              Documentation
            </a>
            <a className="link link-hover text-white/60 text-sm">Help Center</a>
            <a className="link link-hover text-white/60 text-sm">Community</a>
            <a className="link link-hover text-white/60 text-sm">Contact</a>
          </nav>

          {/* Social */}
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title text-white text-sm font-semibold uppercase tracking-wider mb-1">
              Social
            </h6>
            <div className="flex gap-4 mt-1">
              {/* Twitter */}
              <a className="text-white/60 hover:text-white transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              {/* YouTube */}
              <a className="text-white/60 hover:text-white transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              {/* Facebook */}
              <a className="text-white/60 hover:text-white transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Digitools — All rights reserved</p>
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4">
            <li className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Cookies
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
