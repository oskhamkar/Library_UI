import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../config/navConfig';

export default function SubNav() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="hidden lg:block border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
              {navItems.map((item) => (
                <div key={item.path} className="group relative cursor-pointer h-14 flex items-center">
                  {item.children ? (
                    <>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-1 transition-colors ${
                          isActive(item.path) ? 'text-primary' : 'group-hover:text-primary'
                        }`}
                      >
                        {item.label}
                        <span className="material-symbols-outlined text-sm">expand_more</span>
                      </Link>
                      <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-800 shadow-xl rounded-b-xl border border-slate-100 dark:border-slate-700 p-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            className={`block py-2 px-3 rounded-lg transition-colors ${
                              location.pathname === child.path
                                ? 'bg-primary/10 text-primary font-bold'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                            }`}
                            to={child.path}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`transition-colors ${
                        isActive(item.path) ? 'text-primary' : 'hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-accent hover:bg-green-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-sm transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">headset_mic</span>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
