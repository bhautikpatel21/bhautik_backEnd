create table user(
        id int,
        firstname varchar(20),
        lastname varchar(30),
        gender varchar(20),
        email varchar(30),
        mobileNo int
);    

insert into user (id,firstname,lastname,gender,email,mobileNo) values(1,'bhautik','Dudhat','Male','bhautik@test.in',46646787);

insert into user (id,firstname,lastname,gender,email,mobileNo)values
(2,'sachin','tendulkar','male','sachin@test.in',6484),
(3,'virat','kohli','Male','chuku@test.in',27187),
(4,'virrendra','sehvag','Male','viru@test.in',1871),
(5,'rohit','sharma','Male','rohit@test.in',1154);

insert into user values(6,'kl','rahul','Male','kl@test.in',616979);

insert into user (id,firstname,lastname,gender,mobileNo)values
(7,'jasprit','bumrah','Male',18798718);
