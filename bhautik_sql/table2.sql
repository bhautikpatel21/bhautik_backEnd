create table product_master(
    PRODUCTNO varchar(6) Primary key,
    DECSCRIPTION varchar(15),
    PROFITPERCENT varchar(5),
    UNITMEASURE varchar(10),
    QTYONHAND varchar(8),
    REORDERLVL varchar(9),
    SELLPRICE varchar(9),
    COSTPRICE varchar(9)
);    

insert into product_master (PRODUCTNO,DECSCRIPTION,PROFITPERCENT,UNITMEASURE,QTYONHAND,REORDERLVL,SELLPRICE,COSTPRICE)values
('P00001','T-shirt','5','Piece','200','50','350','250'),
('P0345','shirt','6','Piece','150','50','500','350'),
('P06734','cotton jeans','5','Piece','100','20','60','450'),
('P07865','jeans','5','Piece','100','20','750','500'),
('P07868','Trousers','2','Piece','150','50','850','550'),
('P07885','pull Overs','2.5','Piece','80','30','700','450'),
('P07965','Denim shirtd','4','Piece','100','40','350','250'),
('P07975','Lycra Tops','5','Piece','70','30','300','175'),       
('P08865','skirts','5','Piece','75','30','450','300');
-- ________________________________________________________________________________________________--