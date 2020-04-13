import React from 'react';
import HeaderComponent from './Header';

const App = ({ children }: { children?: any }) => (
  <main>
    <HeaderComponent />
    {children}
  </main>
);

export default App;
