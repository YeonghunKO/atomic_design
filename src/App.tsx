import { useState } from 'react';
import Footer from './components/organism/Footer/Footer';
function App() {
  const menu = [
    {
      title: 'Menu1',
      item: [{ url: '#', text: 'home' }],
    },
    {
      title: 'Menu2',
      item: [{ url: '#', text: 'about me' }],
    },
    {
      title: 'Menu3',
      item: [{ url: '#', text: 'contact' }],
    },
  ];
  return (
    <>
      <Footer menu={menu} />
    </>
  );
}

export default App;
