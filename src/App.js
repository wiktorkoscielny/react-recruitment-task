import React, { useState } from 'react'

// data
import JsonData from "./MOCK_DATA.json";

// react-paginate
import ReactPaginate from "react-paginate";

// styles 
import "./App.css";

function App() {
  const [datas, setDatas] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);

  const datasPerPage = 5;
  const pagesVisited = pageNumber * datasPerPage;
  const displayDatas = datas.slice(pagesVisited, pagesVisited + datasPerPage);
  const pageCount = Math.ceil(datas.length / datasPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">

      {/* display data */}
        {displayDatas.map((data) => {
          const color = data.color
          return (
            <div className='data' key={data.id} >
              <ul key={data.id} style={{backgroundColor: color}}>
                <li>{data.id}</li>
                <li>{data.name}</li>
                <li>{data.year}</li>
              </ul>
            </div>
          );
        })}

      {/* paginate */}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        showPageCount={false}
        nextRel={null}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
export default App;
