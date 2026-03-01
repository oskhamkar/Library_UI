import { Link } from 'react-router-dom';

export default function Login() {
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
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Sign in to access your institutional resources.</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="jane.doe@university.edu"/>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <Link to="/login" className="text-xs font-semibold text-primary hover:underline">Forgot password?</Link>
                </div>
                <input type="password" id="password" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="••••••••"/>
              </div>

              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded"/>
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700 dark:text-slate-300">
                  Remember me
                </label>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Don't have an account? <Link to="/login" className="font-bold text-primary hover:underline">Register here</Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              By signing in, you agree to our <Link to="/login" className="hover:text-primary transition-colors">Terms of Service</Link> and <Link to="/login" className="hover:text-primary transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
