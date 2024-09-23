/*
Q1. Creating and Dropping Database & Collection
Task 1: ~ Create a new MongoDB database named "PWSKILLS".
Task 2: ~ Create a collection named "Employees" within the "PWSKILLS" database.
Task 3:~ Insert several documents representing employees into the "Employees" collection.
Task 4:~ Retrieve and display all documents from the "Employees" collection.
Task 5:~ Drop the "Employees" collection.
Task 6:~ Drop the "PWSKILLS" database.
*/


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





// Q2. Insert a new document representing a customer into the "Customers" collection.

use PWSKILLS  

db.Customers.insertOne({
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "123-456-7890",
    address: {
        street: "123 Elm St",
        city: "Somewhere",
        state: "CA",
        zip: "90210"
    }
})
// - Adjust the fields (like `name`, `email`, `phone`, etc.) based on your customer data requirements.
// - If the "Customers" collection doesn't exist, MongoDB will create it automatically when you insert the document.



// Q3. Retrieve and display all documents from the "Customers" collection.
use PWSKILLS 
db.Customers.find().pretty()
// Explanation:
// db.Customers.find() retrieves all documents in the "Customers" collection.
// The pretty() method formats the output to be more readable.
// This command will display all customer documents in a structured format.




// Q4. Update the address of a specific customer.
use PWSKILLS 

db.Customers.updateOne(
    { name: "Michael Brown" },  
    {
        $set: {
            address: {
                street: "456 Oak St",
                city: "Newtown",
                state: "CA",
                zip: "90211"
            }
        }
    }
)


// Q5. Query for customers who have made purchases over a certain amount.

use PWSKILLS  
db.Customers.find({
    purchases: { $elemMatch: { total: { $gt: 100 } } }  // Adjust 100 to your desired amount
}).pretty()


// Q6. Remove a customer from the "Customers" collection.
use PWSKILLS

db.Customers.deleteOne({ name: "Michael Brown" })  // Replace with the criteria for the customer you want to remove


// ### Explanation:
// - The argument to `deleteOne()` is a query that specifies which customer document to remove (in this case, the one with the name "Michael Brown").
// - You can change the query to use any unique identifier (like email or ID) based on your schema.




// Q7. Create a new database named "SchoolDB".
To create a new MongoDB database named "SchoolDB," you can use the following command:

use SchoolDB

### Explanation:
- The `use` command switches to the "SchoolDB" database. If it doesn't already exist, MongoDB will create it when you first store data in it.

### Next Steps:
- You can create collections and insert documents into "SchoolDB" as needed. For example, you might create a "Students" collection like this:

db.createCollection("Students")

Let me know if you need further steps or examples!






// Q8. Insert documents into the "Students" collection with fields like name, age, and grade.

use SchoolDB  

db.Students.insertMany([
    { name: "Alice Smith", age: 14, grade: "9th" },
    { name: "Bob Johnson", age: 15, grade: "10th" },
    { name: "Charlie Brown", age: 13, grade: "8th" }
])


// Q9. Query for students older than a specific age or belonging to a particular grade.
use SchoolDB  
db.Students.find({
    $or: [
        { age: { $gt: 14 } },  // Replace 14 with your desired age
        { grade: "10th" }      // Replace "10th" with your desired grade
    ]
}).pretty()





// Q10. Update the grade of a specific student in the "Students" collection.
use SchoolDB  

db.Students.updateOne(
    { name: "Alice Smith" },  // Replace with the name or unique identifier of the student
    { $set: { grade: "10th" } }  // Replace with the new grade
)




// Q11. Insert documents into the "Teachers" collection representing teachers with fields like name, subject, and experience.
use SchoolDB  

db.Teachers.insertMany([
    { name: "Mr. Adams", subject: "Math", experience: 5 },
    { name: "Ms. Baker", subject: "English", experience: 8 },
    { name: "Dr. Clark", subject: "Science", experience: 10 }
])




// Q12. Query for teachers specializing in a specific subject or with more than a certain amount of experience.
use SchoolDB  // Ensure you're in the correct database

db.Teachers.find({
    $or: [
        { subject: "Math" },  // Replace with your desired subject
        { experience: { $gt: 6 } }  // Replace 6 with your desired experience level
    ]
}).pretty()





// Q13. Update the experience of a specific teacher in the "Teachers" collection.
use SchoolDB  // Ensure you're in the correct database

db.Teachers.updateOne(
    { name: "Mr. Adams" },  // Replace with the name or unique identifier of the teacher
    { $set: { experience: 6 } }  // Replace with the new experience level
)



