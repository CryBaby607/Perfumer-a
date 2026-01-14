// src/components/catalog/Pagination.jsx
import Icon from '../ui/Icon';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  
  // Generar array de páginas a mostrar
  for (let i = 1; i <= Math.min(totalPages, 3); i++) {
    pages.push(i);
  }

  return (
    <div className="mt-12 flex justify-center gap-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex size-10 items-center justify-center rounded-lg border transition-colors ${
            page === currentPage
              ? 'border-blue-500 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
              : 'border-slate-200 dark:border-slate-800 bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-blue-500'
          }`}
        >
          {page}
        </button>
      ))}
      
      {totalPages > 3 && (
        <>
          <span className="flex size-10 items-center justify-center text-slate-500 dark:text-slate-400">
            ...
          </span>
          <button 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex size-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="chevron_right" />
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;