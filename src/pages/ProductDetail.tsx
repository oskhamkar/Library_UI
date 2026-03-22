import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: '1',
      title: 'Nature Reviews: Molecular Cell Biology',
      type: 'Journal',
      price: 12400,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjD13Wf-0GHE_9ABd-AH_N42Ws17yhleDDw6hntBDRl7J9l2qxL9APp64Opcq3BbnCj3wS80Yffa9my291208eGnObyHhZx0ngEBcH0_nVqkxJb9Sbewp2oulsgXdwH1g-SusNQE5meoJws9DeXDesRvieTToktd6Se9BGISCr2YIn8IBblIuPbc_BaHxBcvqwwmD1gUnYYd1pc_JTTJ7YHEdLLjf7EGhGPBhQUb6fBHtjnA7_6p0iznhGsRy13WiX_xzi8SGgELQ',
      quantity: quantity,
      details: 'Vol. 24, Issue 3'
    }));
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className="py-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-slate-500 font-medium">
            <ol className="flex items-center space-x-2">
              <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
              <li><span className="material-symbols-outlined text-sm mx-1">chevron_right</span></li>
              <li><Link className="hover:text-primary transition-colors" to="/journals">Journals</Link></li>
              <li><span className="material-symbols-outlined text-sm mx-1">chevron_right</span></li>
              <li><Link className="hover:text-primary transition-colors" to="/journals/scientific">Scientific</Link></li>
              <li><span className="material-symbols-outlined text-sm mx-1">chevron_right</span></li>
              <li className="text-slate-900 dark:text-white font-bold" aria-current="page">Nature Reviews: Molecular Cell Biology</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl relative group">
                  <img alt="Nature Reviews Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjD13Wf-0GHE_9ABd-AH_N42Ws17yhleDDw6hntBDRl7J9l2qxL9APp64Opcq3BbnCj3wS80Yffa9my291208eGnObyHhZx0ngEBcH0_nVqkxJb9Sbewp2oulsgXdwH1g-SusNQE5meoJws9DeXDesRvieTToktd6Se9BGISCr2YIn8IBblIuPbc_BaHxBcvqwwmD1gUnYYd1pc_JTTJ7YHEdLLjf7EGhGPBhQUb6fBHtjnA7_6p0iznhGsRy13WiX_xzi8SGgELQ"/>
                  <button className="absolute bottom-4 right-4 size-12 bg-white/90 backdrop-blur-md text-slate-900 rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </button>
                </div>
                <div className="flex gap-4 mt-6 justify-center">
                  <button className="w-20 aspect-[3/4] rounded-xl overflow-hidden border-2 border-primary shadow-sm">
                    <img alt="Thumbnail 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjD13Wf-0GHE_9ABd-AH_N42Ws17yhleDDw6hntBDRl7J9l2qxL9APp64Opcq3BbnCj3wS80Yffa9my291208eGnObyHhZx0ngEBcH0_nVqkxJb9Sbewp2oulsgXdwH1g-SusNQE5meoJws9DeXDesRvieTToktd6Se9BGISCr2YIn8IBblIuPbc_BaHxBcvqwwmD1gUnYYd1pc_JTTJ7YHEdLLjf7EGhGPBhQUb6fBHtjnA7_6p0iznhGsRy13WiX_xzi8SGgELQ"/>
                  </button>
                  <button className="w-20 aspect-[3/4] rounded-xl overflow-hidden border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 opacity-60 hover:opacity-100 transition-all">
                    <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                      <span className="material-symbols-outlined">menu_book</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Peer-Reviewed Journal</span>
                  <span className="text-sm font-semibold text-slate-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm text-amber-400">star</span>
                    4.9 (120 Reviews)
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-4">
                  Nature Reviews: Molecular Cell Biology
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
                  Volume 24, Issue 3 • March 2024
                </p>
              </div>

              <div className="flex items-end gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
                <div className="text-5xl font-bold text-primary tracking-tight">₹12,400</div>
                <div className="text-lg text-slate-500 line-through mb-1">₹15,000</div>
                <div className="bg-accent-orange/10 text-accent-orange font-bold px-2 py-1 rounded text-sm mb-1.5">Save 17%</div>
              </div>

              <div className="space-y-6 mb-10">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div>
                    <span className="text-slate-500 block mb-1">Publisher</span>
                    <span className="font-bold text-slate-900 dark:text-white">Nature Publishing Group</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">ISSN</span>
                    <span className="font-bold text-slate-900 dark:text-white">1471-0072</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">Format</span>
                    <span className="font-bold text-slate-900 dark:text-white">Print + Digital Access</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">Frequency</span>
                    <span className="font-bold text-slate-900 dark:text-white">Monthly</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 mb-10 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Institutional Subscription Options
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-white dark:bg-slate-800 cursor-pointer shadow-sm">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="sub_type" className="w-5 h-5 text-primary focus:ring-primary" defaultChecked/>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">Annual Subscription</div>
                        <div className="text-xs text-slate-500">12 Issues + Online Archive</div>
                      </div>
                    </div>
                    <div className="font-bold text-primary">₹12,400</div>
                  </label>
                  <label className="flex items-center justify-between p-4 rounded-xl border-2 border-transparent hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="sub_type" className="w-5 h-5 text-primary focus:ring-primary"/>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">Single Issue</div>
                        <div className="text-xs text-slate-500">Current Issue Only</div>
                      </div>
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white">₹1,500</div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <div className="flex items-center border-2 border-slate-200 dark:border-slate-700 rounded-full bg-white dark:bg-slate-800 h-14 w-full sm:w-32 shrink-0">
                  <button onClick={decrementQuantity} className="flex-1 h-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="font-bold text-slate-900 dark:text-white w-8 text-center">{quantity}</span>
                  <button onClick={incrementQuantity} className="flex-1 h-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button onClick={handleAddToCart} className="flex-1 h-14 bg-primary hover:bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Add to Cart
                </button>
                <button className="size-14 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-red-500 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all shrink-0">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-slate-500 border-t border-slate-200 dark:border-slate-700 pt-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">local_shipping</span>
                  Ships in 2-3 days
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">assignment_return</span>
                  14-day return policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-slate-200 dark:border-slate-700 mb-8">
            <button className="px-8 py-4 text-primary font-bold border-b-2 border-primary">Description</button>
            <button className="px-8 py-4 text-slate-500 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors">Table of Contents</button>
            <button className="px-8 py-4 text-slate-500 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors">Author Info</button>
          </div>
          <div className="max-w-4xl prose prose-slate dark:prose-invert prose-lg">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Nature Reviews Molecular Cell Biology is the leading review journal in its field. It provides a comprehensive and authoritative overview of the latest developments in molecular and cell biology. The journal publishes Reviews, Perspectives, and Comments that are commissioned from leading experts and subjected to rigorous peer review.
            </p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 mt-8">Key Topics Covered:</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
              <li>Cell signaling and dynamics</li>
              <li>Gene expression and regulation</li>
              <li>Membrane dynamics and organelles</li>
              <li>Stem cells and development</li>
              <li>Systems biology and biophysics</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
