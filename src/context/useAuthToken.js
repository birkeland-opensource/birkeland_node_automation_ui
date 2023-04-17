import React from 'react'

export default function useAuthToken() {
   const getToken = () => {
       const tokenString = localStorage.getItem('token');
       const userToken = JSON.parse(tokenString);
       return userToken
   };

   const [token, setToken] = React.useState(getToken());

   const saveToken = userToken => {
       localStorage.setItem('token',JSON.stringify(userToken));
       setToken(userToken.token);
   };

   return {
       setToken : saveToken,
       token
   }
}


