import { Link } from 'react-router-dom';

export default function Contact() {
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

      <main className="flex-1 py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have questions about institutional subscriptions, bulk orders, or platform integration? Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Dr. Om More"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="mit@university.edu"/>
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Institution</label>
                    <input type="text" id="institution" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="MIT University"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Corporate Headquarters</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Hinjewadi Phase 3<br/>Pune, 401295<br/>Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Toll-Free: +91 9898090199<br/>International: +91 7846365735</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Sales: sales@mitacademic.com<br/>Support: support@mitacademic.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-emerald-500 rounded-3xl p-8 shadow-lg text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-blue-50 text-sm mb-6">Our support team is available 24/7 for institutional partners.</p>
                  <button className="bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">chat</span>
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
