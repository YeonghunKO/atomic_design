import styled from 'styled-components';

const StyledPostContent = styled.main`
  ${({ theme }) => theme.flexColumn}
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 80%;
`;

export default StyledPostContent;
