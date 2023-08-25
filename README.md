# M49-REST-API
# M49-REST-API


POST http://localhost:5001/users/register

 {
    "username":"username2",
    "email":"abcd@abc.com",
    "password":"password2"
}

{
  "message": "Successfully registered",
  "user": {
    "id": 3,
    "username": "username2",
    "email": "abcd@abc.com",
    "password": "$2b$10$.yjGR/sxu2AQxrVKGUAPt.FyXZaqA1sl564qCHerYG3NRa5fbHn5i",
    "updatedAt": "2023-08-24T08:53:06.517Z",
    "createdAt": "2023-08-24T08:53:06.517Z"
  }
}


POST http://localhost:5001/users/login


 {
    "username":"username2",
    "email":"abcd@abc.com",
    "password":"password2"
}
{
  "message": "success",
  "user": {
    "username": "username2",
    "email": "abcd@abc.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjkyODY3MjM3fQ.FllobvhL4GGlyGgG4m3pXzYjVftwwsuGMo9cav2zvRM"
  }
}

GET http://localhost:5001/users/getUsers

add header Authorization:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjkyODY3MjM3fQ.FllobvhL4GGlyGgG4m3pXzYjVftwwsuGMo9cav2zvRM

{
  "message": "success",
  "users": [
    {
      "id": 2,
      "username": "username1",
      "email": "abc@abc.com",
      "password": "",
      "emailId": 1,
      "createdAt": "2023-08-24T05:14:12.000Z",
      "updatedAt": "2023-08-24T05:14:12.000Z",
      "EmailId": 1
    },
    {
      "id": 3,
      "username": "username2",
      "email": "abcd@abc.com",
      "password": "",
      "emailId": null,
      "createdAt": "2023-08-24T08:53:06.000Z",
      "updatedAt": "2023-08-24T08:53:06.000Z",
      "EmailId": null
    }
  ]
}



PUT http://localhost:5001/users/updateUser


 {
    "username":"username2",
    "email":"username2@abc.com",
    "password":"password2"
}
{
  "message": "Success"
}


POST http://localhost:5001/email/addEmail
{
    "emailName":"user@abc.com"
}

{
  "message": "success",
  "newEmail": {
    "id": 1,
    "emailName": "user@abc.com",
    "updatedAt": "2023-08-24T09:10:05.320Z",
    "createdAt": "2023-08-24T09:10:05.320Z"
  }
}




POST http://localhost:5001/users/register
 {
    "username":"username1",
    "email":"user@abc.com",
    "password":"password1"
}

{
  "message": "Successfully registered",
  "user": {
    "id": 2,
    "username": "username1",
    "email": "user@abc.com",
    "password": "$2b$10$P.yJPa7.lZQPgSWp6pHGAegQ2UYx3UN154XusZRu4C3buS7oMMf5q",
    "EmailId": 1,
    "updatedAt": "2023-08-24T09:12:17.761Z",
    "createdAt": "2023-08-24T09:12:17.761Z"
  }
}