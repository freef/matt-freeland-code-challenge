! Matt Freeland Code Challenge for Passfolio

the other repo related to this code challenge can be found here:
https://github.com/freef/code-challenge-react-app

[x] create a postgres backend using node.js
[] create a backedn using firebase cloud store
[] provide login/logout/sign-up actions and authenticate users
[] Provide a front-end application to utilize these apis

!! Quiz
!!! Question 1
  - the first function is static and is performed on the class itself rather than a class object
  - the second function will return undefined because this is in its own scope
  - the last function is an es6 'fat arrow' function and will print the number as the function is anonymous and "this" will refer to the object rather than the function.

!!! Question 2
Any kind of float with more than two decimal places would work to store monetary information, but the money type or a float capped at 2 decimal places is ideal to prevent rounding errors.

!!! Question 3
A) Perform math operations on the field?
this can depend on the datatype of the field, but in general I would perform simple operations within an update function using the express.js library and pull the field value into a variable for complex operations. Then update the field with the new value

B) Format the field for display?
I would write a function to format the field after querying using javascripts tools for formatting strings or the Math library and call this function after querying the data but before sending the response.


C) Update the field in the database?
'const update = await req.context.models.Table.update({field: value}, {where: {paramaters:paramaters}})'

!! Set up
This project requires a postgreSQL database is set up for the application called codechallenge, which should be configured in a .env file.

run NPM install to install dependencies.

The react app makes an api call to a firebase databse but i eventually decided this behaviour should be governed by a the express.js application. I was unable to add the firebase features back in under deadline. My firebase credentials have been removed from this project for security.
