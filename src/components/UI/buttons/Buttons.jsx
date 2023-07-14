import { Children } from 'react';
import clas from './buttons.module.scss';

const Buttons = ({ children, ...props }) => {
  return (
    <button className={clas.mybtn} {...props}>
      {children}
    </button>
  );
};

export default Buttons;