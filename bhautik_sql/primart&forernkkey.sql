create table user2 (
    CLIENTNO varchar(6),
    NAME  varchar(20),
    ADDRESS1 varchar(30),
    CITY  varchar(15),
    PINCODE varchar(8),
    STATE varchar(15), 
    BALDUE int
);  

insert into user2 (CLIENTNO,NAME,ADDRESS1,CITY,PINCODE,STATE,BALDUE) values('C00001','Ivan bayross','A/14','Mumbai','400054','Maharashtra',15000);

insert into user2 (CLIENTNO,NAME,ADDRESS1,CITY,PINCODE,STATE,BALDUE) values
('C00002','Mamta Muzumbar','65','Madras','780001','Tamil Nadu',0),
('C00003','chhaya Bansar','P-7','Mumbai','400057','Maharastra',5000),
('C00004','Ashwini joshi','A/5','Banglore','560001','Karnataka',0),
('C00005','Hansel Colaco','juhu','Munbai','400060','Maharashtra',2000),
('C00006','Deepk sharma','Bandra','Mangolore','560050','Karnataka',0);
