import styled from 'styled-components';

const StyledPostContent = styled.main`
  ${({ theme }) => theme.flexColumn}
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 80%;

  img {
    min-width: 70vw;
    min-height: 50vh;
    background-size: cover;
  }
`;

export default StyledPostContent;
