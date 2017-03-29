import * as React from 'react';

// tslint:disable-next-line variable-name
const Main: React.StatelessComponent<{ children?: React.ReactNode}> = ({ children }) => (
  <main>
    {children}
  </main>
);

export default Main;
