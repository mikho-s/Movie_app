import React from 'react';
import clas from './ErrorPage.module.scss';

import { useParams } from 'react-router-dom';

const ErrorPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className={clas.main}>

      <div className={clas.content}>
        <div className={clas.code_error}>404</div>
        <div className={clas.text_error}>Not Found</div>
      </div>

    </div>
  );
};

export default ErrorPage;