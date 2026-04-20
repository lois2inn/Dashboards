function Pagination({
    currentPage,
    totalPages,
    setCurrentPage
  }){
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            Prev
          </button>
    
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() =>
                setCurrentPage(number)
              }
              style={{
                margin: "5px",
                fontWeight:
                  currentPage === number
                    ? "bold"
                    : "normal"
              }}
            >
              {number}
            </button>
          ))}
    
          <button
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      );

}

export default Pagination;