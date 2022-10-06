import styled from 'styled-components';

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
`;

const LayoutContent = styled.div`
  width: 100%;
  max-width: 100%;
`;

export { LayoutContainer, LayoutContent };
