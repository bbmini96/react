import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/user-info')
                          .then((data)=> {
                            setUser(data);
                            console.log(data);
                           });
        //  setUser(data);
        window.location.href = '/user-info';
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h2>User Information</h2>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Picture: <img src={user.picture} alt="Profile" style={{ width: '100px', height: '100px' }} /></p>
          <p>Role: {user.role}</p>
          <p>Create Date: {user.createDate}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfo;
