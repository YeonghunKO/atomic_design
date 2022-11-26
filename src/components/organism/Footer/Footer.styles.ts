import styled from 'styled-components';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.flexColumn}
  width: 100%;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.black};
  gap: 1rem;
  padding: 1rem;

  .footer__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .footer__nav__wrapper {
      display: flex;
      justify-content: space-around;
      flex-grow: 0.6;

      .footer__nav {
        ${({ theme }) => theme.flexColumn}
        justify-content: flex-end;
        align-items: center;
      }
    }
    .footer__news-letter {
      flex-grow: 0.2;
    }
  }
  .footer__copy-right {
    width: 100%;
    font-size: 10px;
    ${({ theme }) => theme.flexColumn}
    align-items: center;
  }
`;

export default StyledFooter;
