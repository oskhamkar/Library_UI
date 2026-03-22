import { useParams, useLocation, Link } from 'react-router-dom';
import { navItems } from '../config/navConfig';

export default function CategoryPage() {
  const { subcategory } = useParams();
  const location = useLocation();

  // Determine which parent category we're in from the current path
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const categorySlug = pathSegments[0]; // 'journals', 'magazines', 'books', 'subscriptions'

  // Find the matching nav item
  const navItem = navItems.find(item => item.path === `/${categorySlug}`);
  const categoryLabel = navItem?.label || categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  const subcategoryLabel = subcategory
    ? subcategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : null;

  return (
    <div className="min-h-[60vh]">
      {/* Breadcrumbs */}
      <div className="py-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-slate-500 font-medium">
            <ol className="flex items-center space-x-2">
              <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
              <li><span className="material-symbols-outlined text-sm mx-1">chevron_right</span></li>
              {subcategoryLabel ? (
                <>
                  <li><Link className="hover:text-primary transition-colors" to={`/${categorySlug}`}>{categoryLabel}</Link></li>
                  <li><span className="material-symbols-outlined text-sm mx-1">chevron_right</span></li>
                  <li className="text-slate-900 dark:text-white font-bold" aria-current="page">{subcategoryLabel}</li>
                </>
              ) : (
                <li className="text-slate-900 dark:text-white font-bold" aria-current="page">{categoryLabel}</li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              {subcategoryLabel || categoryLabel}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {subcategoryLabel
                ? `Browse our collection of ${subcategoryLabel.toLowerCase()} ${categoryLabel.toLowerCase()}.`
                : `Explore our complete catalog of ${categoryLabel.toLowerCase()}.`
              }
            </p>
          </div>

          {/* Subcategory Navigation (show only on parent category pages) */}
          {!subcategory && navItem?.children && (
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {navItem.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 transition-all hover:-translate-y-1 shadow-sm"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}

          {/* Placeholder content */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 animate-pulse">
                <div className="aspect-[3/4] rounded-2xl bg-slate-200 dark:bg-slate-700 mb-4"></div>
                <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-full w-3/4 mb-3"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full w-1/2"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Content for this category is coming soon. Check back later for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
