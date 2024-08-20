MERN Sustainability Project Backend

This project is the backend for the MERN Sustainability Project, a Node.js application using Express, MongoDB, and Mongoose to manage and interact with business data. It provides RESTful API endpoints for creating, retrieving, and managing business information.

## Table of Contents
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [GET /](#get-)
  - [GET /about](#get-about)
  - [POST /api/become-a-creator](#post-apibecome-a-creator)
  - [GET /api/businesses](#get-apibusinesses)
  - [GET /api/businesses/:id](#get-apibusinessesid)
- [Models](#models)
- [Error Handling](#error-handling)
- [Running the Server](#running-the-server)
- [License](#license)

## Setup

To get the project up and running locally, follow these steps:

1. **Install Dependencies**: Run the following command to install all necessary dependencies:
   npm install

2. **Navigate to the src Directory**: Move into the src directory where the main server code resides:
    cd src

3. **Create a .env File: In the src directory, create a .env file with the following environment variables**:
    PORT: The port number where your server will run.
    MONGO_URI: The connection string for your MongoDB database.

4. **Start the Server: Run the following command to start the server**:

    node server.js

    The server will be running on the port specified in the .env file, or 5000 if no port is specified.

**Project Structure**
The project is organized as follows:
.

├── src
│   └── server.js     # Main server file
│   └── models
│   │   └── Business.js   # Mongoose model for the Business entity
└── .env              # Environment variables file (not included in the repository)

**Environment Variables**
The project relies on the following environment variables:

    PORT: The port number on which the server will listen.
    MONGO_URI: The MongoDB connection string used by Mongoose to connect to the database.
    These variables should be defined in a .env file located in the src directory.

## **API Endpoints**

### GET /

- **Description:** Returns a simple welcome message.
- **Response:**
	- Status: `200 OK`
	- Body: "MERN Sustainability Project Backend"
### GET /about

- **Description:** Placeholder endpoint. Currently returns an empty response.
- **Response:**
	- Status: `200 OK`
	- Body: "" (empty string)

### POST /api/become-a-creator

- **Description:** Creates a new business entry.
- **Request Body:**
	- JSON object with the following fields:
	- name (string, required)
	- description (string, required)
	- contactEmail (string, required)
	- contactPhone (string, required)
	- address (string, required)
	- website (string, optional)
	- category (string, required)
	- products (array of strings, optional)
	- Response:
	- Status: 201 Created if successful
	- Status: 500 Internal Server Error if an error occurs

### GET /api/businesses

- **Description:** Retrieves a list of all businesses.
- **Response:**
	- Status: `200 OK`
	- Body: JSON array of business objects

### GET /api/businesses/

- **Description:** Retrieves a single business by its ID.
- **Request Parameters:**
	- id (string): The ID of the business to retrieve
- **Response:**
	- Status: 200 OK if the business is found
	- Status: 404 Not Found if the business is not found
	- Status: 400 Bad Request if the provided ID is invalid

## Models
### Business Model

The Business model is defined in models/Business.js using Mongoose. It represents the schema for a business entity with the following fields:

    name (string, required): The name of the business.
    description (string, required): A description of the business.
    contactEmail (string, required): The contact email for the business.
    contactPhone (string, required): The contact phone number for the business.
    address (string, required): The address of the business.
    website (string, optional): The website of the business.
    category (string, required): The category of the business.
    products (array of strings, optional): A list of products offered by the business.
