import { useContext } from 'react';
import { ContentContext } from './userContext';

function useContentUser() {
  const { userContent, setUserContent } = useContext(ContentContext);

  return {
    userContent,
    setUserContent
  };
}

export { useContentUser };
