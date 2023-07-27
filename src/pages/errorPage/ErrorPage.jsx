import React from 'react';
import clas from './ErrorPage.module.scss';

import { useParams } from 'react-router-dom';

const ErrorPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className={clas.main}>

      <div className={clas.content}>
        ERROR PAGE
      </div>

    </div>
  );
};

export default ErrorPage;