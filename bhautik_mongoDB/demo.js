use development
show dbs
show collection 
db.createCollection ("user");

db.student.insertOne({
    name: "John",
    age:20,
    email:"John@test.in",
    hobbies: ["sport","Dancing"],
    address:{
        line1:'208,city-center',
        line2:'Yogichowk',
        city:'surat',
        state:'Gujarat',
        country:'India',
        pincode:395010
    }
});

db.student.insertMany([
    {
        name: "smith",
        age: 22,
        email: "smith@test.in",
        subjects: ["Maths","science"],
    },
    {
        name: "Prerak",
        gender: 'male',
        email: "prerak@test.in",
        subjects:{
            maths: 50,
            sci: 30,
            eng: 33
        },
    },
    {
        name: "Braham",
        gender: 'male',
        age: 26,
        subjects:{
            maths: 20,
            sci: 30,
            eng: 33
        },
    },
]);

// db.student.find()
db.student.findmany({name: "Braham"})