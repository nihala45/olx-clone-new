import React, { createContext, useState } from 'react';

export const postContext = createContext(null);

const PostProvider = ({ children }) => {
  const [postDetails, setPostDetails] = useState(null);

  return (
    <postContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </postContext.Provider>
  );
};

export default PostProvider;
