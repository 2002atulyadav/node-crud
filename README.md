# Node Microservice

This project is a simple Node.js microservice that manages user data. It provides a RESTful API for performing CRUD operations on user information.

## Project Structure

```
node-microservice
├── src
│   ├── app.js                # Entry point of the application
│   ├── routes
│   │   └── users.js          # Defines user-related routes
│   ├── controllers
│   │   └── usersController.js # Contains logic for handling user requests
│   ├── models
│   │   └── user.js           # Defines the User model
│   └── services
│       └── userService.js    # Contains business logic for user operations
├── package.json              # NPM configuration file
├── .env                      # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-microservice
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables.

5. Start the application:
   ```
   npm start
   ```

## Usage

The API provides the following endpoints for user management:

- `GET /users` - Retrieve all users
- `GET /users/:id` - Retrieve a user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update an existing user
- `DELETE /users/:id` - Delete a user by ID

## API Endpoints

### Get All Users
- **URL:** `/users`
- **Method:** `GET`
- **Response:** List of users

### Get User by ID
- **URL:** `/users/:id`
- **Method:** `GET`
- **Response:** User object

### Create User
- **URL:** `/users`
- **Method:** `POST`
- **Request Body:** `{ "name": "string", "email": "string" }`
- **Response:** Created user object

### Update User
- **URL:** `/users/:id`
- **Method:** `PUT`
- **Request Body:** `{ "name": "string", "email": "string" }`
- **Response:** Updated user object

### Delete User
- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Response:** No content (204)

## License

This project is licensed under the MIT License.