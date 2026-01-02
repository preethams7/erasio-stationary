

let accessToken = null;

// Set access token in memory
export const setAccessToken = (token) => {
  accessToken = token;
};

// Get access token from memory
export const getAccessToken = () => accessToken;
