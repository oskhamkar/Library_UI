import { Outlet } from 'react-router-dom';
import Header from './Header';
import SubNav from './SubNav';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-primary selection:text-white">
      <nav>
        <Header />
        <SubNav />
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
