/*
-------------------------------------
==>  || Comparisopn Operators || <==
------------------------------------

*/

db.books.find({});

db.books.find({"pages" : {$eq: 384}})
db.books.find({"pages" : {$ne: 384}})

db.books.find({"pages" : {$lt: 320}})
db.books.find({"pages" : {$lte: 320}})

db.books.find({"pages" : {$gt: 505}})
db.books.find({"pages" : {$gte: 505}})

db.books.find({"pages" : {$in : [320,505,928]}})
db.books.find({"pages" : {$nin : [320,505,928]}})

db.books.find({$and: [{"pages" : {$eq: 384}},{"year" : 1350}]})

db.books.find({$or: [{"pages" : {$eq: 384}},{"year" : {$in: [1350,81846,1958]}}]})

db.books.find({$nor:[{"pages" : {$eq:384}},{"year" : {$in: [1315,1836,1958]}}]})

db.books.find({"pages " :{$not: {$lte: 384}}})