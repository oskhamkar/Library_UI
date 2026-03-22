import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export default function Header() {
  const cartItems = useAppSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20 gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <div className="size-10 text-primary bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[28px]">school</span>
            </div>
            <Link to="/" className="text-2xl font-bold font-serif tracking-tight text-slate-900 dark:text-white">
              MIT Arts Commerce & Science College, Alandi
            </Link>
          </div>
          <div className="flex-1 max-w-2xl hidden md:flex relative">
            <input
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 pl-6 pr-12 focus:ring-2 focus:ring-primary text-sm shadow-inner transition-all"
              placeholder="Search for journals, ISBN, or authors..."
              type="text"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors">
              <span className="material-symbols-outlined text-lg">search</span>
            </button>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <Link to="/cart" className="relative cursor-pointer hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-orange text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-sm font-semibold">
              <Link className="hover:text-primary" to="/login">Login</Link>
              <span className="text-slate-300">|</span>
              <Link className="hover:text-primary" to="/register">Register</Link>
            </div>
            <div className="lg:hidden">
              <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
