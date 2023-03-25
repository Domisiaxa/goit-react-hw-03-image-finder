import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import style from '../style/styles.module.css';

const Loader = () => {
  return (
    <div className={style.Loader}>
      <ThreeDots
        height="80"
        width="80"
        color="blue"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
