import React from 'react';

import { ContentBox } from '../../components/ContentBox';

const Error = () => (
  <div className="errorPage">
    <ContentBox anchor='error' shadow={false} title="Page not found" content="Sorry! The page you are looking for doesn't exist!" />
  </div>
);

export default Error;