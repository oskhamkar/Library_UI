import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';

export default function Home() {
  const cartItems = useAppSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useAppDispatch();

  const handleAddToCart = (e: React.MouseEvent, item: any) => {
    e.preventDefault();
    dispatch(addToCart({
      id: item.id,
      title: item.title,
      type: item.type,
      price: item.price,
      image: item.image,
      quantity: 1,
      details: item.details
    }));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-primary selection:text-white">
      {/* <div className="h-8 bg-secondary text-white flex items-center justify-center text-xs font-medium tracking-wide">
        Free shipping for institutional orders above ₹5000
      </div> */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <div className="size-10 text-primary bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">school</span>
              </div>
              <span className="text-2xl font-bold font-serif tracking-tight text-slate-900 dark:text-white">MIT Arts Commerce & Science College, Alandi</span>
            </div>
            <div className="flex-1 max-w-2xl hidden md:flex relative">
              <input className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 pl-6 pr-12 focus:ring-2 focus:ring-primary text-sm shadow-inner transition-all" placeholder="Search for journals, ISBN, or authors..." type="text"/>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors">
                <span className="material-symbols-outlined text-lg">search</span>
              </button>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <Link to="/cart" className="relative cursor-pointer hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-orange text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">{cartCount}</span>
                )}
              </Link>
              <div className="hidden sm:flex items-center gap-4 text-sm font-semibold">
                <Link className="hover:text-primary" to="/login">Login</Link>
                <span className="text-slate-300">|</span>
                <Link className="hover:text-primary" to="/login">Register</Link>
              </div>
              <div className="lg:hidden">
                <button className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block border-t border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-8">
                <button className="bg-accent hover:bg-green-600 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-sm transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">headset_mic</span>
                  Get In Touch
                </button>
                <div className="flex items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <div className="group relative cursor-pointer h-14 flex items-center">
                    <span className="group-hover:text-primary transition-colors flex items-center gap-1">
                      Journals <span className="material-symbols-outlined text-sm">expand_more</span>
                    </span>
                    <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-800 shadow-xl rounded-b-xl border border-slate-100 dark:border-slate-700 p-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all z-50">
                      <Link className="block py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg" to="/product">Scientific</Link>
                      <Link className="block py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg" to="/product">Humanities</Link>
                      <Link className="block py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg" to="/product">Medical</Link>
                    </div>
                  </div>
                  <div className="group relative cursor-pointer h-14 flex items-center">
                    <span className="group-hover:text-primary transition-colors flex items-center gap-1">
                      Magazines <span className="material-symbols-outlined text-sm">expand_more</span>
                    </span>
                  </div>
                  <div className="group relative cursor-pointer h-14 flex items-center">
                    <span className="group-hover:text-primary transition-colors flex items-center gap-1">
                      Books <span className="material-symbols-outlined text-sm">expand_more</span>
                    </span>
                  </div>
                  <Link className="hover:text-primary transition-colors" to="/">Publisher Portal</Link>
                </div>
              </div>
              <Link className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary" to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative h-[600px] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img alt="Library Interior" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBckNXM_Z8_ODDbkT0--ce8Mj6phwOBTVVu--son5cAMDL6vX6KZ4umKn5bEU6wEmZzC4yNsGA98cQomF7k1bg_1dtr_b9R3WnfG-VtNqeiBWWZF2D1G2B-sXejf5SwK6Ww712EByGC4nkOhOJtqO-OnMmn8zIWb7XtdaVZ6EXEVkCHHkXeZCZ2t2QvvFNZLN9YYm7amof461ujunKh6MAhk_R0rPVdoHptD4o-d-fcNVUdG5LommvyyQn9an0UMxDbBBhUzQW5fn0"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-2xl space-y-8 animate-[fadeInUp_1s_ease-out]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              Academic Excellence
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight">
              Journals, Magazines and eBooks. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">One Place for Your Library.</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-lg leading-relaxed">
              Streamline your institution's access to premium academic content. Thousands of publishers, one seamless platform.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full text-base font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
                Explore Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-base font-bold backdrop-blur-md transition-all">
                Browse Categories
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer"></div>
        </div>
      </section>
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">Weekly Popular</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Top trending resources among institutions this week.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="p-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-colors bg-white dark:bg-slate-800 shadow-sm">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="min-w-[300px] md:min-w-[340px] snap-center group">
              <Link to="/product" className="block bg-white dark:bg-slate-800 rounded-3xl p-3 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img alt="Nature Reviews" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjD13Wf-0GHE_9ABd-AH_N42Ws17yhleDDw6hntBDRl7J9l2qxL9APp64Opcq3BbnCj3wS80Yffa9my291208eGnObyHhZx0ngEBcH0_nVqkxJb9Sbewp2oulsgXdwH1g-SusNQE5meoJws9DeXDesRvieTToktd6Se9BGISCr2YIn8IBblIuPbc_BaHxBcvqwwmD1gUnYYd1pc_JTTJ7YHEdLLjf7EGhGPBhQUb6fBHtjnA7_6p0iznhGsRy13WiX_xzi8SGgELQ"/>
                  <span className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Journal</span>
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Nature Reviews: Molecular Cell Biology</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">Vol. 24, Issue 3</div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                    <span className="font-bold text-primary">₹12,400</span>
                    <button 
                      onClick={(e) => handleAddToCart(e, {
                        id: '1',
                        title: 'Nature Reviews: Molecular Cell Biology',
                        type: 'Journal',
                        price: 12400,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjD13Wf-0GHE_9ABd-AH_N42Ws17yhleDDw6hntBDRl7J9l2qxL9APp64Opcq3BbnCj3wS80Yffa9my291208eGnObyHhZx0ngEBcH0_nVqkxJb9Sbewp2oulsgXdwH1g-SusNQE5meoJws9DeXDesRvieTToktd6Se9BGISCr2YIn8IBblIuPbc_BaHxBcvqwwmD1gUnYYd1pc_JTTJ7YHEdLLjf7EGhGPBhQUb6fBHtjnA7_6p0iznhGsRy13WiX_xzi8SGgELQ',
                        details: 'Vol. 24, Issue 3'
                      })}
                      className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="min-w-[300px] md:min-w-[340px] snap-center group">
              <Link to="/product" className="block bg-white dark:bg-slate-800 rounded-3xl p-3 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img alt="Tech Future" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxqrloHzBo2LlKsC2BGuBhr7Zwin0F5DXm0JM1lF1sK7DFhb6IFOc24zenaNtW3M9QfHlgO1cGY2lALy9KBQOtqT6ptl3rpn0SHBDjKsruNl9a7RzyHZ-UBr4ugazR742YWkUk15eU8pNZK7oEEMbfByNMUKLdzHfnH9kGDS0ENLHYjl2jfVTdTM0n8nsFGZLhNjDL2P3uXu-7DGjKZS2eeZqjpV3Zm3sVTFH_CM7TwDZlK7WlDpktk9MGQDN1AE7_ujrnAwbANPM"/>
                  <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Magazine</span>
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">The Future of AI &amp; Ethics</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">September 2023</div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                    <span className="font-bold text-primary">₹850</span>
                    <button 
                      onClick={(e) => handleAddToCart(e, {
                        id: '2',
                        title: 'The Future of AI & Ethics',
                        type: 'Magazine',
                        price: 850,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxqrloHzBo2LlKsC2BGuBhr7Zwin0F5DXm0JM1lF1sK7DFhb6IFOc24zenaNtW3M9QfHlgO1cGY2lALy9KBQOtqT6ptl3rpn0SHBDjKsruNl9a7RzyHZ-UBr4ugazR742YWkUk15eU8pNZK7oEEMbfByNMUKLdzHfnH9kGDS0ENLHYjl2jfVTdTM0n8nsFGZLhNjDL2P3uXu-7DGjKZS2eeZqjpV3Zm3sVTFH_CM7TwDZlK7WlDpktk9MGQDN1AE7_ujrnAwbANPM',
                        details: 'September 2023'
                      })}
                      className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="min-w-[300px] md:min-w-[340px] snap-center group">
              <Link to="/product" className="block bg-white dark:bg-slate-800 rounded-3xl p-3 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img alt="History Book" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TjMMg5IOhbOH0koMnROw5b-QPmz2RhDwqte_zsavHzuVJYQP3NjkxiGvL291224bWWZUi4K43TL5v9pmLDprsz_IhQhkevSTkLQ-Tzno1XCzwLfZ9a8_Gyt3nWJeeaJxmMtZWqKFEDgYM0WpBrX0haZZFbkI9lAm6FV8sX24AYoFGlR39qfQyRzX6UZ7UPsbnG-C6LiZPHOsjHkkZ5Wy0S58UJKGRw4AIFKxLjln8bZ_OuBft6DbQpmfcaqnjTgSMAWkiO_LPLg"/>
                  <span className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Book</span>
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Modern European History</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">3rd Edition</div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                    <span className="font-bold text-primary">₹2,100</span>
                    <button 
                      onClick={(e) => handleAddToCart(e, {
                        id: '3',
                        title: 'Modern European History',
                        type: 'Book',
                        price: 2100,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7TjMMg5IOhbOH0koMnROw5b-QPmz2RhDwqte_zsavHzuVJYQP3NjkxiGvL291224bWWZUi4K43TL5v9pmLDprsz_IhQhkevSTkLQ-Tzno1XCzwLfZ9a8_Gyt3nWJeeaJxmMtZWqKFEDgYM0WpBrX0haZZFbkI9lAm6FV8sX24AYoFGlR39qfQyRzX6UZ7UPsbnG-C6LiZPHOsjHkkZ5Wy0S58UJKGRw4AIFKxLjln8bZ_OuBft6DbQpmfcaqnjTgSMAWkiO_LPLg',
                        details: '3rd Edition'
                      })}
                      className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="min-w-[300px] md:min-w-[340px] snap-center group">
              <Link to="/product" className="block bg-white dark:bg-slate-800 rounded-3xl p-3 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img alt="Medical Journal" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDS6ZptrSEolpzwbpvnWIvI1NuLHa_RxKFVd-XFN7HBFzpMVdN8Qxky-VJbeYjsSo2mmxpvQghLiMOzKk-wkksltDcJ-o4eDFesILTBWTp26uIaqCfoBVsymTBuSZ4Sq1JTH4zGcSps49ExyyNod39FFxEDQZWpr9VdZckG3HCTyI3BXF47VP7tw2SYZE-DQGQ4qkgvbaYxGCLsnVMRMcz6Fb87zumN7g3WZ5RRMFt0c3qRvw6x5Daq4gRDAezeafwwMxA311dyNk"/>
                  <span className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">Journal</span>
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-2">Clinical Oncology Updates</h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">Vol. 12, Issue 4</div>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                    <span className="font-bold text-primary">₹9,500</span>
                    <button 
                      onClick={(e) => handleAddToCart(e, {
                        id: '4',
                        title: 'Clinical Oncology Updates',
                        type: 'Journal',
                        price: 9500,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDS6ZptrSEolpzwbpvnWIvI1NuLHa_RxKFVd-XFN7HBFzpMVdN8Qxky-VJbeYjsSo2mmxpvQghLiMOzKk-wkksltDcJ-o4eDFesILTBWTp26uIaqCfoBVsymTBuSZ4Sq1JTH4zGcSps49ExyyNod39FFxEDQZWpr9VdZckG3HCTyI3BXF47VP7tw2SYZE-DQGQ4qkgvbaYxGCLsnVMRMcz6Fb87zumN7g3WZ5RRMFt0c3qRvw6x5Daq4gRDAezeafwwMxA311dyNk',
                        details: 'Vol. 12, Issue 4'
                      })}
                      className="size-8 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Biography &amp; Memoirs</h2>
            <Link className="text-primary font-bold text-sm hover:underline" to="/product">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Biography Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6_ZhVBPF2gya49bwScGIYzoooXu9Me6vV63OAiqOARdjwc25_5Oyhj-6Ez5qhUBRA5vX8b2PiN2DshMmCKjvCxJq_y7ntqd9atZdL6RyWe4icFshuNbJKvy6NGYhwyG2zYRZz43vkSoZVDDJeg5FrPEdl2atpeb4C-siZAc8wnFytvFXxFhHE_j_oEQ8rqj3DBg6oF-XYZtMNVqrxJlRAsLE2tMfswYPtIiJmtqWXEI94euE33LzrRzWQetmM2lwRspkO652KEo"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">The Great Scientist</h3>
              <p className="text-sm text-slate-500">Walter Isaacson</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Memoir Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo1o3lomojYmi59FlG08Rg_f9eFwiuvRIDLReaXsy5x08F0yCs11PydcJLPpNzvQ5uqH2dp9gMxMeYZhbQIxsSWvW80sKgK0JfAqwu-JTKP3_95m8aSfwZLm5N367dsV1vBb7AQreDbZEIYCb3vcM4rbp5_4iBzBvs87mcdHiV7EJ8XAB9wbqfZknrOYLu8sVcLjDtLgEBvPIo0jmGh2MrGNKr-sOA6whs3ALksG75z15OsGMi6dAFTO6JzHC40vl5ENX4MpVzfsc"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Becoming</h3>
              <p className="text-sm text-slate-500">Michelle Obama</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Bio Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDynaezDDVVOEUjEz-5gbf-h9NbkDr5zfqy16uiBU9RbmFjWeqgRV9WcttqHx3n4ZojkU0F-gpDINXOjGWC1YEdNfcLNILt28WVfdYk1ilGxhYNJ4vFqJ6B991qCvwUiXRBQzCHabD1tMi0obmKAum9qBJwVbN44qQQyLNinDrP85tPUUFUPv22Bwh2WVWffss5rwmYvJ3ZumAHKPc19O2ZPEaAwQ_RziidW9kHZ1pGi-knPKWJDxk0xP5forJ7yOQEF0i6gktEU54"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Steve Jobs</h3>
              <p className="text-sm text-slate-500">Walter Isaacson</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Life Story Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDoeBUzYEEI9J1uPDglvEQ0T6uQq8KEfpKej31xtfhj8rtWvQLP3OpKZ-yOewGaxaWmhkg9k8DkQxx3aV4U4KrhOKs8hYJoReiAP26M1z7bvbdEeZ8npHx3goqBMBxl2MWPhG9Cu09Z7TEtvyzr2mPPjmn24psOPmUPDKAdJis3-x_nlNFPomROF-dzB3DMmmB-W6XSa16QF1cbMhzeTNA8LHy1eWlKozcJhBGv-feRMSNK1S7ob9B9ya3xMGvIIz1kQfa-Ce9OXc"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Shoe Dog</h3>
              <p className="text-sm text-slate-500">Phil Knight</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Architecture &amp; Design</h2>
            <Link className="text-primary font-bold text-sm hover:underline" to="/product">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-700 overflow-hidden mb-3">
                <img alt="Architecture Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo51fOnEH1O5-q40p0-Vfd1kTBZAUG9bNOIyJCBJG73ngc9YZFb78hGxrA-05MoJmzz7oaJ_lx44z3cG2peMw-nGQfelEqOWwwIfO8uDLGYZAgZgdYuC2XdtNI93KUZ1ig5qAJE2ec5CpGg7RwmfRfGM4iSTtLk8GH-diND_9aDN4jQKz3nV3zfd7WxOIosbYyb_NuGJMCIMQD1J_ErTAcpNDpfqstXtMIqx5HAifFBzAOQ9iwbuhkGrGAiRXwbyIXbht3ixfC6Wk"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Modern Structures</h3>
              <p className="text-sm text-slate-500">Taschen</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-700 overflow-hidden mb-3">
                <img alt="Design Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPsgsjN-2ybaXFGwV4Z803tUOVv4nCdeiZGgJ7uMNHQ1Kbh4IrmA2zlskIKszBJ6SQVuE4lrcChZzAIp1dquxtJVIKdWbCDW2ZiJSyE0ViZbvsRBVHpQiVYRMMZqraxJ2U0MvnHzd6AKKGmELyd8DPVcQrWiuZWc9tPHlpDxTRbhn8iQVmwq9pFZnQhbDPn6audY5Qcw2TNuhiyvxh2tJ43AuWE2xCRs_u0n4u8D75fP0eWVKXCIp0Ga_Jgf9gOO_F3sZ9tJiiouk"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Interior Design 101</h3>
              <p className="text-sm text-slate-500">Design Press</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-700 overflow-hidden mb-3">
                <img alt="Urban Planning Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSZLx_SBq13PABCBYFQAFV7aTU4JFEYgZgu3XDQCT4NCnkOcf-4XeZu9rvVQtRY6LAVDyoEpxKml-VdKHTSPuWJSTf-C_EPsQ1XJEFxmPKcaC-Ni4HaPGtN3sovDZ4yfjHgoEbPbBTcBUs4h5WlgoOHK9958SPNLRkYPCh_7JI9yCaLlHdQGgHdvduQPruVokjx5gJe_pBmEVqEdp4Bsal_U9ZEypX-PQFLD0NPToGjTaZEGos2g_lWQm87iru2SIsZS4GhQTxaRQ"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Sustainable Cities</h3>
              <p className="text-sm text-slate-500">Urban Works</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-700 overflow-hidden mb-3">
                <img alt="Arch History Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJQ9KTjFcaFnYOExTQnJxqDWKaW9Nfvqf3Gq4RIfrdA1t3FLai5rFwzUidr7Pg7MXbjLTeH4A5tWiV3AYgbAX1MT68jcd0bwvWhoNXkDHoaxe2vfTgCDRVEGalm0UY5YgfmHL0ApipUZhxe2Hcp_ww1EBDVNmfHRMP7s1pii06ovQ0CSyCNmasey_THBu11pQpJFFTjosC1zDEgCWkj-_DE5PlLlHixK5JlP5fCHdUTF2JNW80R2OnTWPyEtjucK3sFxeNp3_lBMc"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">History of Form</h3>
              <p className="text-sm text-slate-500">Academic Press</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Ayurveda &amp; Holistic Health</h2>
            <Link className="text-primary font-bold text-sm hover:underline" to="/product">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Ayurveda Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCegFkH5Q54n7G5f9FbRb4qS2vRgPsr73PadsaytHItr9okMjjfCGJDzPiQuMH_L7K0Wpefo_8dA6qFqojIwytRmGogH8WeKOcO7AcZZsptZQCj_ODB6GmppjDjWSaVm5nGMZX2HMFc_BK2yOb8nSj6Kq13BAwa4CMht3KoOLQq6sWN6LP_DqOfkfxDXwFGVL0sBK0Ii1_Oefl2yY0-A1G1JTrKcaNh5w8X20oiofAF9pdxKTfZO2lleC1kQJrRzL7jb-_7fyd6WDY"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Ancient Wisdom</h3>
              <p className="text-sm text-slate-500">Health House</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Herbs Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj7EsmxBF58wh6RB7rtNQ0b7Sga9tYf0dRGhqJK1tlJUW5WYUpbF15u-MhI1yQgjCelTxXBDPuT99voW6VjIlFD6CjZN6vPZk0Ur1yxiJ_brIOAjVbOqTTd5e7CV6VgKQnWYe4oqIJ40u8OCE1qFr4OXo_z4AqoswkyXadkgTCM6kHOosBXqXCrIfwtaaqvoBDTTR5Gzavy3vnacj9qMNNtJ20NAPtV6P4habI6vncOw7zBuLi191QcMrb7pICs9OZrnyEQdXxcDI"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Healing Herbs</h3>
              <p className="text-sm text-slate-500">Nature Press</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Yoga Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIhojDGxA9cyKrtAvqlFmY2ftrPh4KKl1G4v-WHdL9OpYq1dtCKXx49FPjQz-Ik1wVvvVrVrJgbXho3pmR4fAnCRNHzAhMe4KzhB1Qal3IQZZZnDjmW9yNMrkZfOWZnoMDl8CNpXsB27G9zNeko0z2iF7T3LVe2NlPKO-dhhPG5VH9itcEXhHVOX6Mi2wpIKhLzzqEYdraAbRoMuHj7vLJdwFIbHbJCelNQfM2B0LvFztDNo769Ut9C5nY5DIH2nKoUnvnKwiNbNE"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Yoga Anatomy</h3>
              <p className="text-sm text-slate-500">Body &amp; Mind</p>
            </Link>
            <Link to="/product" className="group block">
              <div className="aspect-[2/3] rounded-3xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3">
                <img alt="Diet Book" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNJasoWr9IbhD8rR9V6d-m6KllgccbfD6_ozKp7NyMf69AzVe10OjxsfUfxRlsOpSwwYlb5_kHkDufb1GUuYr1zwXm71B_ktYvSz8irhdImFNkHB51jZdgp6HCa3AhPBygiyhhT5SsNnQTTu_qlu-U1M3FK6S99M5Po-X564t6lVZpJh1H2HynhM8nIVJ4ey8Ykspx1Xi2ukm7hVm6wp8v6LnvpmNc2ah9LdohFkIvoQIfWdQyY0Rvu17eQ0_r1ZxegcGW7rW7bI"/>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white truncate">Sattvic Diet</h3>
              <p className="text-sm text-slate-500">Food Science</p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-10 text-center">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-4 aspect-video">
                <img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-asTeIcbqhO6sUACkpcN77QleYOqVSqdumNrZu7M10yVlCqzBYWuuLJMxQMWlclVaVZbuaNsofmzr_WsuFu3JcBTNtqO751JmoA7UfvdgdSSXmdU6WdtZ4DrBOjZKjQxnvPDqrc2da1p0SJRhXhcebvHMy7MknoIAjKX1nuuw8hVTuyQt_iD2edDRvoQVEhRM7lKf9opuOHhXttKnUFMH-WIqmhEVnv7ABO6TKTeiAsEPtA2C4NQ0fxp-m195sXuEUcAPzDoN220"/>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Research</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">The Shift to Open Access</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">How institutions are adapting to new publishing models in 2024.</p>
                <Link className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all" to="/">Read More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-4 aspect-video">
                <img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz7DMcbIi2NNCK6gtn-pqXhUdZyqi_23XiwzWejsTKZ5ARAUG9VC1BVn8i8R7rDv-BP7HV5jUEP86iEomhloDgmfyZRvOpZmpFXuEOh5Qu9owM2CwOooeFdXTWEctGlW2SrsJniaI8pR24BVsk81y6C0hE9HC5RjYHe2jXawaU-QjBAyU_kTT155cBjtDAq4-2HrDYMeoMQevW3COK_kMuZrYZaFk9HPSEKFCYLTy9NO9hsoDbVRyCQSUZoc10HlRENtso0ZpT9Sk"/>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Technology</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Digital Libraries 2.0</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">Exploring the integration of AI in cataloging systems.</p>
                <Link className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all" to="/">Read More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-4 aspect-video">
                <img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6aYfUmP5hEaI5fRvPrFhQY7KmDl7gyeC1YVyo7TUFyBM0-WkS-HOkVvDgkvuSotibcGxzMZUkR--H9UkSe4myKk3RB4rEQ_dsWP2aLG0UQYcifG255-o3_op5CbNr8wkN5udJ3aiwEN9paF77A96m3T5FM3KvTWe4tWeqQbSzLmhSd7e6TufZZY7Qm3LAHVHnfnDH7uZJqRc5ePC_ch14AIDOr5kKUw2mqMCc9Q578D3RF2NZj_Z7fke22xCCYzR-ahg4fBUnWeA"/>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Community</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Supporting Local Authors</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">Initiatives to bring regional academic voices to the global stage.</p>
                <Link className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all" to="/">Read More <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="py-24 bg-blue-50/50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Testimonials</span>
          <div className="relative">
            <div className="flex flex-col items-center">
              <div className="size-20 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg mb-6">
                <img alt="Researcher" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtFOJxtZmzvWjvNHhWTV1ENj8vfuK3Sy-sKb5Wod6l6yj5o3ZzPsln2actH8Jsp9OAIAy_DHPJlGYZTDLnyOyrzTjocNnpjPetxc41rXYuk23BVHe88_m-EClMj29A0yaz5nyRNNGqHUfhcmeQU0-KdNVQ81RgZpARa0pnoCCXqE1nUlYdCJ6wBZ-uUOoGhTeFbd-dyRrkdZB8gE4XuNNkel9MqdThouno85i43gABjzHaRQOHNDy9Cfpq8ZXcuCR-_tfp5U59U3E"/>
              </div>
              <blockquote className="text-2xl font-serif text-slate-900 dark:text-white italic mb-6">
                "MIT Academic has completely transformed how our department accesses vital research. The platform is intuitive, and the collection is unmatched."
              </blockquote>
              <div className="font-bold text-slate-900 dark:text-white">Dr. Arwind Sharma</div>
              <div className="text-sm text-slate-500">Head of Research, Delhi University</div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              <button className="w-2.5 h-2.5 rounded-full bg-primary"></button>
              <button className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></button>
              <button className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-emerald-500 p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead in Academia</h2>
              <p className="text-blue-50 mb-8 text-lg">Subscribe to get updates on new journals, exclusive institutional discounts, and research trends.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input className="flex-1 rounded-full px-6 py-4 border-none focus:ring-2 focus:ring-accent-orange text-slate-900 placeholder:text-slate-400" placeholder="Enter your email address" type="email"/>
                <button className="bg-accent-orange hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-colors" type="submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#0b0f19] text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="size-8 text-primary bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">school</span>
                </div>
                <span className="text-xl font-bold font-serif tracking-tight">MIT Academic</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Empowering the global academic community with seamless access to knowledge. We bridge the gap between researchers and publishers.
              </p>
              <div className="flex gap-4 pt-2">
                <Link className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-400" to="/">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0 1.27 5.49A4.09 4.09 0 0 1 2 9.72v.05a4.1 4.1 0 0 0 3.29 4.02 4.09 4.09 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.4 11.62 11.62 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0 0 22 5.8z"></path></svg>
                </Link>
                <Link className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-slate-400" to="/">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-white font-bold text-lg">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li><Link className="hover:text-primary transition-colors" to="/">Browse Journals</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/">Digital Books</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/">Conferences</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/">Pricing Plans</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-lg">Librarian Resources</h4>
              <ul className="space-y-3 text-sm">
                <li><Link className="hover:text-primary transition-colors" to="/">Admin Dashboard</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/">Usage Statistics</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/">MARC Records</Link></li>
                <li><Link className="hover:text-primary transition-colors" to="/">Integration Support</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-white font-bold text-lg">Corporate Office</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-0.5 text-lg">location_on</span>
                  <span>Hinjewadi Phase 3, Pune<br/>Maharashtra, India 412086</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">call</span>
                  <span>+91 9999999999</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  <span>contact@mitacademic.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2023 MIT Academic Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Link className="hover:text-white transition-colors" to="/">Privacy Policy</Link>
              <Link className="hover:text-white transition-colors" to="/">Terms of Service</Link>
              <Link className="hover:text-white transition-colors" to="/">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
