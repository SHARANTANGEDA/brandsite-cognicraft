export const ToolPagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center space-x-2 my-4">
            {/* Create buttons for each page */}
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={`h-10 px-5 transition-colors duration-150 border border-r-0 border-blue-600 rounded-l-lg focus:shadow-outline ${currentPage === i ? 'bg-blue-600 text-white' : ''}`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};
