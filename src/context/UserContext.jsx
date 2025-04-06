import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    profileImage: null, // will store a base64 URL or image URL
  });

  return (
    <UserContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
