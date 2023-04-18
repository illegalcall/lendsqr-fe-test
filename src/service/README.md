## Service

A service class has been created in this project, which can be instantiated to call the methods defined in it. The service class provides a wrapper for making HTTP calls directly to the API.

The following methods are defined in the service class:

1. `login`: This method is used to authenticate a user and return an access token.
2. `getUsers`: This method is used to retrieve a list of users from the API.
3. `getUserDetails`: This method is used to retrieve detailed information about a specific user.

The service class calls the routes defined in the <b>api</b> folder, which centralizes the HTTP calls and makes it easier to modify them in the future. This approach also makes it less error-prone and more maintainable.

By using this service class, developers can easily make HTTP calls to the API without worrying about the implementation details, such as setting headers or handling errors. This promotes separation of concerns and makes the code more modular and reusable.

This service class helps you integrate with the API efficiently and with consistency.