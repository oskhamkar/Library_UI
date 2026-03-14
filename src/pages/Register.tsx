import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <div className="size-10 text-primary bg-primary/10 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">school</span>
              </div>
              <Link to="/" className="text-2xl font-bold font-serif tracking-tight text-slate-900 dark:text-white">MIT Academic</Link>
            </div>
            <div className="flex items-center gap-4 text-sm font-semibold">
              <Link className="hover:text-primary transition-colors" to="/login">Login</Link>
              <span className="text-slate-300">|</span>
              <Link className="text-primary transition-colors" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">Registration</h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                If you already have an account with us, please login at the <Link to="/login" className="font-bold text-red-600 hover:underline">login page</Link>.
              </p>
            </div>

            <form className="space-y-6">
              {/* Row 1: User Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Please Select User Type <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-700 dark:text-slate-300 appearance-none">
                    <option>Please Select User Type</option>
                    <option>Student</option>
                    <option>Faculty</option>
                    <option>Librarian</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              {/* Row 2: Prefix, First Name, Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Please Select Prefix <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-700 dark:text-slate-300 appearance-none">
                      <option>Please Select Prefix</option>
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                      <option>Dr.</option>
                      <option>Prof.</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">First Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your First Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your Last Name" />
                </div>
              </div>

              {/* Row 3: Email address, Designation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email address <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your Email address" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Designation <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your Designation" />
                </div>
              </div>

              {/* Row 4: Mobile, Select Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Mobile</label>
                  <input type="tel" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your Mobile No." />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Select Gender</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-700 dark:text-slate-300 appearance-none">
                      <option>Please Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
              </div>

              {/* Row 5: Address, City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Address <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your Address" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">City <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your City" />
                </div>
              </div>

              {/* Row 6: Post Code, Please Select Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Post Code <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Your Post Code" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Please Select Country</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" defaultValue="India" />
                </div>
              </div>

              {/* Row 7: Please Select State, Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Please Select State <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-700 dark:text-slate-300 appearance-none">
                      <option>Select State*</option>
                      <option>Maharashtra</option>
                      <option>Karnataka</option>
                      <option>Delhi</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Password <span className="text-red-500">*</span></label>
                  <input type="password" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Type Password" />
                </div>
              </div>

              {/* Row 8: Confirm Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Confirm Password <span className="text-red-500">*</span></label>
                  <input type="password" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Confirm Password" />
                </div>
                <div className="hidden md:block"></div>
              </div>

              {/* Recaptcha Placeholder */}
              <div className="mt-6 flex justify-start">
                <div className="border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 rounded px-4 py-3 flex items-center justify-between w-[300px] shadow-sm">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" className="w-6 h-6 border-slate-300 rounded focus:ring-primary text-primary" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-8 h-8 opacity-80" alt="reCAPTCHA" />
                    <span className="text-[9px] text-slate-500 mt-1">reCAPTCHA</span>
                    <span className="text-[8px] text-slate-400">Privacy - Terms</span>
                  </div>
                </div>
              </div>

              {/* Register Button - using red as per instruction while maintaining style */}
              <div className="flex justify-center pt-8">
                <button type="submit" className="bg-[#cc0000] hover:bg-red-700 text-white font-bold py-3 px-10 rounded shadow-lg transition-all hover:-translate-y-1">
                  Register
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
