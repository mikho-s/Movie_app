import React from 'react';
import Header from '../../components/header/Header';
import { useParams } from 'react-router-dom';

const ErrorPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      {/* <Header /> */}
      <div>
        <h1>
          ERROR PAGE
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;