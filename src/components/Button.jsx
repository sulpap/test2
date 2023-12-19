import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const MyButton = ({ children, onClick, outlined = false }) => {
  return (
    <div className="float-end">
      <Button variant={outlined ? 'outline-link' : 'link'}>
        {children}
      </Button>
    </div>
  );
}

MyButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  outlined: PropTypes.bool,
};

export default MyButton;



// import { Button } from 'react-bootstrap';

// interface Props {
//   children: string;
//   onClick: () => void;
//   outlined?: boolean;
// }

// const MyButton = ({ children, onClick, outlined = false}: Props) => {
//   return (
//     <div className="float-end">
//       <Button variant={outlined ? 'outline-link' : 'link'}>
//         {children}
//       </Button>
//     </div>
//   );
// }

// export default MyButton;


// interface Props {
//   children: String;
//   color?: 'primary' | 'secondary' | 'danger'; //? --> optional
//   onClick: () => void;
//   outlined?: boolean;
// }

// const Button = ({children, onClick, color = 'primary', outlined = false}: Props) => {

// const buttonClass = `float-right btn ${outlined ? 'btn-outline-' : 'btn-'}${color} btn-sm`;

// return (
//   <button 
//     style={{float: 'right'}} 
//     // className={`float-right btn btn-${color} btn-sm`}
//     className={buttonClass}
//     onClick={onClick}>{children}
//   </button>
// )
// }

// export default Button
