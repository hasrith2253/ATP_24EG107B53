 - Create HTTP Server
        - Create Employee Schema(
                name,email,mobile,designation & companyName
                ) and model
        - Define REST API routes for
                - Create Employee
                - Read all employees
                - Edit employee
                - Delete Employee



        client side app and server side application can interact with each other over http protocol by making http request and http response \

        to make http request from client side application one can use either fetch funtion or axios modules \

        the folowing are the http request types
        GET-to read all the resources 
        POST- to create new resources
        PUT- to update entire resource
        DELETE- to delete a resource
        PATCH-  to update resource partially

        the post,put, and patch request types can have the body property which can hold json data, where as get and delete request do not have body property and they can send the data through url