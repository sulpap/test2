import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import LogoImage from 'C:/Users/Theodosia/Documents/programs/React/test2/src/images/LOGO_UOA COL2.png';

const Logo = () => {
  return (
    <Navbar bg="white" variant="light">
      <Container>
        <Navbar.Brand style={{ color: 'black' }}>
          <img
            alt="Logo"
            src={LogoImage}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Εθνικον και Καποδιστριακόν Πανεπιστήμιον Αθηνών
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Logo;

// Dark:

// import React from 'react'
// import { Navbar, Container } from 'react-bootstrap';
// import LogoImage from 'C:/Users/Theodosia/Documents/programs/React/test2/src/images/LOGO_UOA COL2.png';

// const Logo = () => {
//     return (
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand>
//               <img
//                 alt="Logo"
//                 src={LogoImage}
//                 width="30"
//                 height="30"
//                 className="d-inline-block align-top"
//               />{' '}
//               Εθνικον και Καποδιστριακόν Πανεπιστήμιον Αθηνών
//             </Navbar.Brand>
//           </Container>
//         </Navbar>
//       );
//     };
    
// export default Logo;