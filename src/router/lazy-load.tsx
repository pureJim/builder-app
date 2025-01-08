import React, { Suspense } from 'react';

import { Container, LoadingWrapper } from './style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LazyLoad: React.FC<React.LazyExoticComponent<any>> = (Element) => {
  return (
    <Suspense
      fallback={
        <Container>
          <LoadingWrapper>loading...</LoadingWrapper>
        </Container>
      }
    >
      <Element />
    </Suspense>
  );
};

export default LazyLoad;
