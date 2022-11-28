import { useState } from 'react';
import Header from './components/organism/Header/Header';
function App() {
  const navigation = [
    {
      title: 'general',
      items: [
        {
          icon: null,
          text: 'Shop',
          url: '#',
        },
        {
          icon: null,
          text: 'About Me',
          url: '#',
        },
        {
          icon: null,
          text: 'FAQ',
          url: '#',
        },
        {
          icon: null,
          text: 'Contact',
          url: '#',
        },
      ],
    },
    {
      title: 'account',
      items: [
        {
          icon: null,
          text: 'User',
          url: '#',
        },
        {
          icon: 'User',
          text: 'Insights',
          url: '#',
        },
        {
          icon: 'Bag',
          text: 'Account',
          url: '#',
        },
      ],
    },
  ];
  return (
    <>
      <Header navigation={navigation} />
    </>
  );
}

export default App;
