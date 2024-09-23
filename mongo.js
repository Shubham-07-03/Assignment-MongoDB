Here’s how you can accomplish each task using MongoDB commands in the MongoDB shell or a suitable MongoDB client:

// ### Task 1: Create a new MongoDB database named "PWSKILLS"
use PWSKILLS

// ### Task 2: Create a collection named "Employees" within the "PWSKILLS" database
db.createCollection("Employees")


// ### Task 3: Insert several documents representing employees into the "Employees" collection

db.Employees.insertMany([
    { name: "John Doe", position: "Software Engineer", salary: 60000 },
    { name: "Jane Smith", position: "Product Manager", salary: 80000 },
    { name: "Alice Johnson", position: "UX Designer", salary: 55000 }
])


// ### Task 4: Retrieve and display all documents from the "Employees" collection

db.Employees.find().pretty()


// ### Task 5: Drop the "Employees" collection

db.Employees.drop()


// ### Task 6: Drop the "PWSKILLS" database

use PWSKILLS
db.dropDatabase()


// ### Notes:
// - Ensure you have MongoDB running and you are connected to the server where you want to execute these commands.
// - Adjust the document fields as needed to fit your employee data model.
