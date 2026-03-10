// mongodb

1)createCollection-> it is like table creation
  syntax :-  db.createCollection("users")---> it created a users connection 

 2) InsertOne (document)
    syntax eg :- insertOne({name:"hasrith",age:10,city:"hyd"}) 
    
    insertMany(document)
  3) synatx eg:- db.users.insertMany([{name:"lufy",age:50,city:"delhi"},{name:"naruto",age:60,city:"goa"}])
   
  4) findOne()
    synatx eg:- db.users.findOne() -----> it will show an existing first record  , same like select in sql
 
 5) find()
  syntax eg :- db.users.find()------> it will show all existing records in database 

  db.users.findone({ field name eg: name:{$eq:"zoro"}}) -----> here $eg is (<=> operator in mongodb)

  6) db.users.find({age:{$gt:18}}) ----> to find age greater than equal to 18\

  7) when data is not defined findOne will give ----> 
                              find will give ...

8)
db.users.find({age:{$in:[21,23,27]}}) .....> used when you want multiple age like or condition 

/// find the users whose age is above 25 and city 
end (or) or operator we use array to check multiple conditions


db.users.find({$and:[{age:{$gt:20}},{city:"hyd"}]})

db.users.find({$or :[{age:{$gt:20}},{city:"hyd"}]}).......> even one condition satisfies it shows 


9) update op ($set)
 synatx eg :- db.users.updateOne({name:"hasrith"},{$set:{name:"hasrith rao",age:20}})
    .......> here ($set ) command is used for update a record 
 
10) delete op
 synatx eg:-  db.users.deleteOne({name:"hasrith rao"})
 

 /// nested document

 eg:- db.users.insertOne({name:"asta",age:18,marks:[90,80,99],address:{city:"hyd",pincode:500062}})
 --> it conatins name ,age ans address and in address city and pincode 

 ---> to find and address from an record 
      eg :- db.users.findOne({"address.city":"hyd"})

-----> ( to update or add street to record  )
db.users.updateOne({name:"asta"},{$set:{"address.street":"ECIL"}})

------> ( to add or update phone no)
 db.users.updateOne({name:"asta"},{$set:{mobile:9989828906}})
 
-------> ( to delete an record)
db.users.updateOne({name:"asta"},{$unset:{"address.city":""}})


-------> (set op  )  ( to update a new record in the form of array )

db.users.updateOne({name:"asta"},{$set:{skills:["mongodb","react"]}})
  ( $push op)
-------> ( to add an etxtra skill to an array of record )
db.users.updateOne({name:"asta"},{$push:{skills:"angular"}})

------> ( to insert multiple elements in an array using {$each} op )
db.users.updateOne({name:"asta"},{$push:{skills:{$each:["vue","nextjs"]}}})


------> ( to delete last element {$pop})
db.users.updateOne({name:"asta"},{$pop:{skills:1}})


------>( to find the particular skilld in an record {$all})
db.users.find({skills:{$all:["html","react"]}})

-------> ( to remove the _id which is default )
db.users.findOne({},{name:1,_id:0})
  

  // whats is relationship btw http and tsp