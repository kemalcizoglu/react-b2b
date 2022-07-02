    
  const getName = () => {
    const nameString = localStorage.getItem('username');
    const userName = JSON.parse(nameString);
    if(userName !== null){
        return userName
    }
  };

  const saveName = (userName) => {
    localStorage.setItem('username', JSON.stringify(userName));
    return userName;
  };



  const removeName = () => {
    localStorage.removeItem('username');
  };

  export {
    getName,
    saveName,
    removeName
  }