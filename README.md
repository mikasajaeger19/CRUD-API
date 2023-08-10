# CRUD-API
My first attempt at making an API that handles CREATE, READ, UPDATE and DELETE functions

This API has 3 main files.

index.js : this file acts as the main file. It chooses the port to be used and then imports 'userRoutes' from the user.js file created in the routes folder.
           It also prints a console log and message every time a GET request for the homepage is sent.

users.js (routes folder): this file routes the different API requests i.e GET, POST, DELETE and PATCH.

users.js (controllers folder): this file contains all the functions that are used to carry out the API requests. This is imported by the users.js file in the routes folder.
