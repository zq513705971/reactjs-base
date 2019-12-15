import React, { useEffect } from 'react';

export default props => {
  let { children } = props;
  return <React.Fragment>{children}</React.Fragment>;
};
