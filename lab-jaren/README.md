# Lab-36 Firebase auth

Firebase authentication differs from Mongo in that we don't need to create a user model or fleshed-out routes for signup and login. With Mongo, once a user signed up or logged in they would stay logged in and the token would be open for use by others to make requests. With Firebase once a token is generated the user is "logged out", meaning the token no longer persists in localStorage as it did with Mongo.
