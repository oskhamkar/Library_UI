import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

export default function Cart() {
  const cartItems = useAppSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useAppDispatch();

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = subtotal > 5000 ? subtotal * 0.1 : 0; // 10% discount for orders over 5000
  const tax = (subtotal - discount) * 0.045; // 4.5% tax
  const total = subtotal - discount + tax;

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-900/50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {cartItems.length === 0 ? (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-sm border border-slate-100 dark:border-slate-700 text-center">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4">shopping_cart</span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h2>
                <p className="text-slate-500 dark:text-slate-400 mb-6">Looks like you haven't added any items to your cart yet.</p>
                <Link to="/" className="inline-flex items-center justify-center bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
                  Start Shopping
                </Link>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="w-24 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0">
                      <img alt={item.title} className="w-full h-full object-cover" src={item.image}/>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">{item.type}</span>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{item.title}</h3>
                        </div>
                        <button onClick={() => handleRemove(item.id)} className="text-slate-400 hover:text-red-500 transition-colors p-1">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">{item.details}</div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-slate-200 dark:border-slate-600 rounded-full bg-slate-50 dark:bg-slate-700/50 h-10 w-28">
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="flex-1 h-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-sm">remove</span>
                          </button>
                          <span className="font-bold text-slate-900 dark:text-white text-sm w-6 text-center">{item.quantity}</span>
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="flex-1 h-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-sm">add</span>
                          </button>
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white">₹{(item.price * item.quantity).toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 sticky top-28">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal ({cartCount} items)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">₹{subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>Institutional Discount</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">-₹{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{subtotal > 5000 ? 'Free' : '₹500'}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Estimated Tax</span>
                  <span className="font-semibold text-slate-900 dark:text-white">₹{tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-slate-900 dark:text-white">Total</span>
                  <span className="text-3xl font-bold text-primary">₹{(total + (subtotal > 5000 || subtotal === 0 ? 0 : 500)).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-blue-600 text-white rounded-full font-bold py-4 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                Proceed to Checkout
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
                <span className="material-symbols-outlined text-sm">lock</span>
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
