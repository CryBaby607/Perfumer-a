// src/components/layout/Footer.jsx
import Icon from '../ui/Icon';

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
    <div className="max-w-[1280px] mx-auto px-4 md:px-10">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
        {/* Brand Section */}
        <div className="max-w-xs">
          <div className="flex items-center gap-3 text-white mb-6">
            <div className="size-6 text-blue-500">
              <Icon name="diamond" className="text-2xl" />
            </div>
            <h2 className="text-white text-lg font-bold">Luxury Scents</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The premier destination for authentic luxury fragrances. We bring the world's most coveted scents to your doorstep.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex gap-12 flex-wrap">
          <div>
            <h4 className="text-white font-bold mb-4">Shop</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Men's Cologne
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Women's Perfume
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Niche Brands
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Returns
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Icon name="mail" className="text-xs" /> 
                support@luxuryscents.com
              </li>
              <li className="flex items-center gap-2">
                <Icon name="call" className="text-xs" /> 
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs">
          © 2023 Luxury Scents. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a className="text-slate-400 hover:text-white" href="#">
            <Icon name="public" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;