import styled from 'styled-components';
import { device } from '@src/components/particles/MediaQueries';

const StyledHeader = styled.header`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header__navigation {
    /* top: -100%; */
    /* position: relative; */
    top: 40%;
    border-bottom: 1.5px solid ${({ theme }) => theme.grey100};

    nav {
      gap: 10px;
      background-color: ${({ theme }) => theme.offWhite};
      flex-direction: column;
      svg {
      }
      @media ${device.md} {
        flex-direction: row;
      }
    }

    transition: 0.5s top ease;
  }

  img {
    position: absolute;

    left: unset;
    top: 10%;
    width: 5rem;
    height: 5rem;

    @media ${device.md} {
      left: 50%;
    }
  }
`;

export default StyledHeader;
