import React from 'react';
import Nav from '@src/components/molecules/Nav/Nav';
import StyledFooter from './Footer.styles';

import type { FooterProps } from '@src/types/Footer';

const Footer = ({ menus }: FooterProps) => {
  return (
    <StyledFooter>
      <aside className="footer__wrapper">
        <section className="footer__nav__wrapper">
          {menus.map(({ title, items }, idx) => {
            return (
              <div className="footer__nav" key={`footer__nav__${idx}`}>
                <h1>{title}</h1>
                <Nav direction="horizontal" items={items} />
              </div>
            );
          })}
        </section>
        <div className="footer__news-letter">
          <h4 className="footer__news-letter-header">Join our newsletter</h4>
          <p>We will send you updates on new products and discounts.</p>
        </div>
      </aside>
      <div className="footer__copy-right">
        <p>Copyright &copy; Celtic Elements {new Date().getFullYear()}</p>
        <a
          href="https://whatjackhasmade.co.uk"
          rel="noopener noreferrer"
          target="_blank"
        >
          Website by Jack Pritchard
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
