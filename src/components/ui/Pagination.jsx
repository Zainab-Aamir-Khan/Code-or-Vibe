function Pagination({ page, pageCount, onPageChange }) {
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-card/90 px-6 py-5 text-sm text-muted shadow-elevated sm:flex-row">
      <p>
        Showing page {page} of {pageCount}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text transition hover:border-primary/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              pageNumber === page
                ? 'bg-primary text-text'
                : 'border border-white/10 bg-white/5 text-text hover:border-primary/30 hover:bg-white/10'
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          type="button"
          onClick={() => onPageChange(Math.min(pageCount, page + 1))}
          disabled={page === pageCount}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-text transition hover:border-primary/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
