import React from 'react';
import { Header, HeaderProps } from './components/header';
import './App.scss';
import { Footer, FooterProps } from './components/footer';

function App(): JSX.Element {
  const headerProps: HeaderProps = {
    siteName: 'JamieDoesDev',
    primaryLinks: [{text: 'link1', link: {href: 'https://example.com'}}]
  };

  const footerProps: FooterProps = {
    title: 'Footer'
  };
  
  return (
    <div className="App">
      <Header {...headerProps} />
      
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
