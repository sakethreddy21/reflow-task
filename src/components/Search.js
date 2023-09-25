import React, { useEffect, useRef, useState } from 'react';
import 'mdbreact/dist/css/mdb.css'; // Import necessary CSS

import './search.css'
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const datatableRef = useRef(null);

  
  return (
    <div>
      <div className="main">
       <div className='artist'>All artists</div>
       
        <input
        placeholder='search'
          className="search_sec"
          id="datatable-search-input"
          value={searchValue}
          
        />
      </div>
      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Artist</th>
      <th scope="col">status</th>
      <th scope="col">Ratings</th>
      <th scope="col">projects sold</th>
      <th scope="col">highest sale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >sakertg</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>$2344837272</td>
    </tr>
    <tr>
    <td >sakertg</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>$2344837272</td>
    </tr>
    <tr>
    <td >sakertg</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>$2344837272</td>
    </tr>
    <tr>
    <td >sakertg</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>$2344837272</td>
    </tr>
    <tr>
    <td >sakertg</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>$2344837272</td>
    </tr>
    <tr>
    <td >sakertg</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>$2344837272</td>
      <td>$2344837272</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default Search;
