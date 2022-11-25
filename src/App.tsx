import { useState } from 'react';
// import { Button } from '@components/atoms/Button/Button';
import Nav from '@components/molecules/Nav/Nav';

function App() {
  const items = [
    { url: '#', text: 'home' },
    { url: '#', text: 'about me' },
    { url: '#', text: 'contact' },
  ];
  return (
    <>
      <Nav direction="vertical" items={items} />
    </>
  );
}

export default App;
