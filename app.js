// creating collection of custormers




// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url,function(err,db){
//   if(err) throw err;
//   dbo = db.db("mydb");
//   dbo.createCollection("persons",function(err,res){
//     if(err) throw err;
//     console.log("collection of persons created");
//     db.close();
//   });
// });

//inserting object
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url,function(err,db){
//   if(err) throw err;
//   dbo = db.db("mydb");
//    var obj = { name : "pavan" ,age : 17};
//    dbo.collection("persons").insertOne(obj,function(err,res){
//      if(err) throw err;
//      console.log("inserted one object");
//      db.close();
//    });
// });

//find one method in mongodb
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url,function(err,db){
//   if(err) throw err;
//   dbo = db.db("mydb");
//    var obj = { name : "pavan" ,age : 17};
//    dbo.collection("persons").findOne({},function(err,res){
//      if(err) throw err;
//      console.log(res.name);
//      db.close();
//    });
// });
//

//quering in mongodb

//
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//   dbo = db.db("mydb");
//   var query = { name:"pavan"};
//   dbo.collection("persons").find(query).toArray(function(err,res){
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });


//insert many persons in mongodb
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
// MongoClient.connect(url,function(err,db){
//   if(err) throw err;
//   dbo = db.db("mydb");
//   var obj = [{ name:"rajesh",
//   age :40,
//
//   },
// {
//   name : "spike",
//   age :10,
// },
// {
//   name : "flash",
//   age :67,
// }];
// dbo.collection("persons").insertMany(obj,function(err,res){
//   if(err) throw err;
//   console.log("inserted mamy objects");
//   db.close();
// });
//
//
// });
//




// sort the persons according to the field given(sorting according to the age )
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
// MongoClient.connect(url,function(err,db){
//   if(err) throw err;
//   dbo = db.db("mydb");
// dbo.collection("persons").find().sort({"age" : -1}).toArray(function(err,res){
//   if(err) throw err;
//   console.log(res);
//   db.close();
// });
// });
