import styled from 'styled-components';
import { device } from '@src/components/particles/MediaQueries';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.offWhite};
  position: relative;
  min-height: 7rem;
  width: 100%;

  img {
    z-index: 3;
    position: relative;
    left: 1rem;
    top: 1rem;
    width: 5rem;
    height: 5rem;

    @media ${device.sm} {
      position: absolute;
      transform: translateY(5%);
      left: 50%;
    }
  }

  .header__navigation__wrapper {
    position: fixed;
    transform: translate3d(0, -130%, 0);
    z-index: 2;
    width: 100%;
    background-color: ${({ theme }) => theme.offWhite};
    display: flex;
    flex-direction: column;

    @media ${device.sm} {
      transform: translate3d(0, 0%, 0);
      min-height: inherit;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .header__navigation {
      border-bottom: 1.5px solid ${({ theme }) => theme.grey100};
      padding: 1rem;

      @media ${device.sm} {
        border: 0;
      }
      nav {
        gap: 10px;
        flex-direction: column;

        @media ${device.sm} {
          flex-direction: row;
        }
      }
    }
    transition: 0.5s all ease;
  }

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 4;
    @media ${device.sm} {
      display: none;
    }
  }

  &.show {
    .header__navigation__wrapper {
      transform: translate3d(0, 0%, 0);
    }
  }
`;

export default StyledHeader;
