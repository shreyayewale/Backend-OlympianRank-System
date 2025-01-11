# Backend OlympianRank System  
## Project Overview  
The OlympianRank is a Node.js application built using Express.js to manage Olympic athlete rankings. The system allows users to perform CRUD (Create, Read, Update, Delete) operations on athlete data, including names, rankings, and performance statistics. It provides RESTful APIs to interact with the backend and manage the rankings data, using MongoDB for storing the data.

## Prerequisites  
Before running this project, ensure you have the following installed:

* Node.js  
* MongoDB  
* Postman (for API testing)

## Dependencies  

* Express.js – For building RESTful APIs and routing.  
* MongoDB – To store and manage the data of Olympic athletes.  
* Mongoose – For interacting with MongoDB using an object data modeling (ODM) library.  
* JWT Authentication – For securing user access and ensuring authorized API calls.  
* Postman – For testing and documenting APIs.

## MongoDB Setup  

The application connects to MongoDB running on mongodb://127.0.0.1:27017/olympics. Make sure the MongoDB service is running on the default port (27017), and the database will be automatically created when the first data is inserted.  

## How to Run the Project  

1. Clone the repository or download the project files.  
2. Open the project in your terminal or IDE.  
3. Install the dependencies by running: npm install  
4. Ensure MongoDB is running on your local machine or cloud database.  
5. Start the server using the following command: node server.js  
6. The application will be accessible at http://localhost:3000.  

## API Endpoints  

1.Get All Olympian Ranks  
URL: GET -  http://localhost:3000/mens  
Description: Retrieve a list of all Olympian rank records.  

2.Get Olympian Rank by ID  
URL: GET -  http://localhost:3000/mens/:id  
Description: Retrieve a specific Olympian rank record by ID.  
Example: /olympians/1  

3.Add a New Olympian Rank  
URL: POST -  http://localhost:3000/mens/add  
Description: Add a new Olympian rank record to the database.  
Request Body: JSON object containing rank details.  

4.Update Olympian Rank  
URL: PUT -  http://localhost:3000/mens/update/:id  
Description: Update an existing Olympian rank record by its ID.  
Request Body: JSON object with updated rank details.  

5.Delete Olympian Rank  
URL: DELETE -  http://localhost:3000/mens/delete/:id  
Description: Delete an Olympian rank record by ID.  
Example: /olympians/delete/  

## Tools and Technologies Used  

* Node.js  
* Express.js  
* MySQL  
* JWT Authentication  
* Postman  

## Author  
Shreya Laxman Yewale  
