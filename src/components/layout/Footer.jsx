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
            El destino principal para fragancias de lujo auténticas. Traemos los aromas más codiciados del mundo directamente a tu puerta.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex gap-12 flex-wrap">
          <div>
            <h4 className="text-white font-bold mb-4">Tienda</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Más Vendidos
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Perfumes de Caballero
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Perfumes de Dama
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Marcas de Nicho
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Soporte</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Contáctanos
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Política de Envíos
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Devoluciones
                </a>
              </li>
              <li>
                <a className="hover:text-green-400 transition-colors" href="#">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
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
          © 2023 Luxury Scents. Todos los derechos reservados.
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