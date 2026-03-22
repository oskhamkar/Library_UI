import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
              <li><Link className="hover:text-primary transition-colors" to="/journals">Browse Journals</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/books">Digital Books</Link></li>
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
  );
}
