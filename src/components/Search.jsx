import React from 'react';

const Search = () => {
  return (
    <div className="d-flex justify-content-end pe-2">
      <form className="d-flex" role="search">
        <input className="form-control" type="search" placeholder="Αναζήτηση" aria-label="Αναζήτηση" />
      </form>
    </div>
  );
}

export default Search;

// import React from "react";
// import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

// const SearchPage = () => {
  // return (
  //   <MDBCol md="6">
  //     <MDBFormInline className="md-form">
  //       <MDBIcon icon="search" />
  //       <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
  //     </MDBFormInline>
  //   </MDBCol>
  // );
// }

// export default SearchPage;


