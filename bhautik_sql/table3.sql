create table salesman_master(
    SALESMANNO varchar(6) primary key,
    SALESMANNAME varchar(20)Not Null,
    ADDRESS1 varchar(30)Not Null,
    CITY varchar(20),
    PINCODE varchar(8),
    STATE varchar(20),
    SALAMT int Not Null,
    TGTTOGET int Not Null,
    YIDSALES int Not Null,
    REAMARKS varchar(60)
);

insert into salesman_master(SALESMANNO,SALESMANNAME,ADDRESS1,CITY,PINCODE,STATE,SALAMT,TGTTOGET,YIDSALES,REAMARKS)values
('S00001','Aman','A/14','Worli','400002','Maharashtra','3000','100','50','Good'),
('S00002','Omkar','65','Nariman','400001','Maharashtra','3000','200','100','Good'),
('S00003','Raj','p-7','Bandra','400032','Maharashtra','3000','200','100','Good'),
('S00004','Ashish','A/5','Juhu','400044','Maharashtra','3500','200','150','Good');      