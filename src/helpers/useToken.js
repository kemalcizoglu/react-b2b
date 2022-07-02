    
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if(userToken !== null){
        return userToken
    }
  };

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    return userToken;
  };


  const removeToken = () => {
    localStorage.removeItem('token');
  };



  const getAdminToken = () => {
    const tokenString = localStorage.getItem('admin_token');
    const userToken = JSON.parse(tokenString);
    if(userToken !== null){
        return userToken
    }
  };

  const saveAdminToken = (userToken) => {
    localStorage.setItem('admin_token', JSON.stringify(userToken));
    return userToken;
  };


  const removeAdminToken = () => {
    localStorage.removeItem('admin_token');
  };
  export {
    getToken,
    saveToken,
    removeToken,
    getAdminToken,
    saveAdminToken,
    removeAdminToken
  }