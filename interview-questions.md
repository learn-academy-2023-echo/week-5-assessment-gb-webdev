# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would super be used in a Ruby class?

Your answer: To use inheritance, passing down key pairs from the parent class to the child 

Researched answer: we use super (without any argument) to pass down the arguments from the parent class to the child class. Any current arguments in the child class will be overridden by the inheritance of the parent arguments.

2. What is a gem?

Your answer: A package of code snippets that can be added to ruby. 

Researched answer: A gem is an open sourced library, packaged with extra data to allow us to use custom methods in ruby. 

3. What is a relational database? Are there other kinds of databases? 

Your answer: A relational database is set up of columns and rows, each instance of a class has it's own primary key/unique identifier. The columns are named and have their own custom data type for input.

Researched answer: A collection of data items organized into columns and rows, these can be updated, created and managed or deleted. They are relational by being connected to eachother, for example a customer making a purchase, or updating their own account of their view and front end part of their portion of data in the database. This is different than Excel for example which is just a database without true relational qualities, it does have columns and rows, however it's just a spreadsheet software. There are other types like Hierarchical, Network, Object-oriented and NoSQL databases.


4. What are primary keys? Why purpose does a primary key serve?

Your answer: A primary key is a numeric unique identifier for the instance of a class created in a database. It allows us to find the data in a table easier. They are fully unique and can not be replaced, even if they are deleted, another primary key can not be that number again.

Researched answer: In a relational database table, their are each distinct columns, rows and data that go into that table. These are all uniquely identified by their own primary key. This helps us locate, identify the unique data piece. It also prevents duplication of records, helps us with updating or deleting and specifying those records. Helps us ensure that fields aren't null, helps us set up relationships between the tables. Also lets us accesses the data by row level, which is easy for people to interpret 

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: get, post, put&patch, delete
            read create   update   delete

Researched answer: The same as above :D

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Is a process that confirms the model is doing what is intended. We do this by testing a set of data and simply seeing if it is correct and accepted.

2. RESTful routes: This maps http verbs to crud actions that are defined in our controllers. The restful route actions are index, new, create, show, edit, update, and destroy.

3. ERB: Is a template engine, when the ruby language is created it is embedded into html. The ruby expressions will be displayed in the browser in html form. 

4. Params: Params are a series of key pair values, these values are strings, this string iniquely identifies a restful resource in the rails app. Params are requested by a users browser, commonly for a http get request, these params are encoded in the URL. 

5. API: An application program interface is a way for computers to communicate to other external systems.
