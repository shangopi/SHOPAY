create database shopay;

CREATE TABLE category (
    category_id int(10) NOT NULL AUTO_INCREMENT, 
    name varchar(255) NOT NULL, 
    PRIMARY KEY (category_id));


CREATE TABLE sub_category (
    sub_category_id int(10) NOT NULL AUTO_INCREMENT, 
    name varchar(255) NOT NULL, 
    PRIMARY KEY (sub_category_id));

/*category has sub category*/
CREATE TABLE has (
    category_id int(10) NOT NULL, 
    sub_category_id int(10) NOT NULL, 
    PRIMARY KEY (category_id, sub_category_id),
     FOREIGN KEY(category_id) REFERENCES category(category_id),
    FOREIGN KEY(sub_category_id) REFERENCES sub_category(sub_category_id)
    );


CREATE TABLE product (
    product_id int(10) NOT NULL AUTO_INCREMENT, 
    sku varchar(255) NOT NULL, 
    title varchar(255) NOT NULL, 
    weight int(10) NOT NULL, 
    default_varient_id int(10) NOT NULL, 
    PRIMARY KEY (product_id));

/*sub category contains product*/
CREATE TABLE contains (   
    sub_category_id int(10) NOT NULL, 
    product_id int(10) NOT NULL, 
    PRIMARY KEY (sub_category_id, product_id),
    FOREIGN KEY(sub_category_id) REFERENCES sub_category(sub_category_id),
    FOREIGN KEY(product_id) REFERENCES product(product_id)
    );


CREATE TABLE custom_attribute (
    attribute_id int(10) NOT NULL AUTO_INCREMENT, 
    value varchar(255) NOT NULL, 
    product_id int(10) NOT NULL, 
    name varchar(255) NOT NULL, 
    PRIMARY KEY (attribute_id),
    FOREIGN KEY(product_id) REFERENCES product(product_id)
    );

CREATE TABLE variant (
    variant_id int(10) NOT NULL AUTO_INCREMENT, 
    count int(10) NOT NULL, 
    price int(10) NOT NULL, 
    product_id int(10) NOT NULL, 
    name varchar(255) NOT NULL,
    image varchar(255) NOT NULL, 
    description varchar(12255) NOT NULL, 
    PRIMARY KEY (variant_id),
    FOREIGN KEY(product_id) REFERENCES product(product_id)
    );

 
CREATE TABLE customer (
    cust_id int(10) NOT NULL AUTO_INCREMENT, 
    name varchar(255) NOT NULL, 
    telephone int(10) NOT NULL, 
    PRIMARY KEY (cust_id));

CREATE TABLE `order` (
    order_id int(10) NOT NULL AUTO_INCREMENT, 
    phone int(10) NOT NULL, 
    delivery_method varchar(255) NOT NULL, 
    payment_method varchar(255) NOT NULL, 
    order_date varchar(255) NOT NULL, 
    status varchar(255) NOT NULL, 
    cust_id int(10) NOT NULL, 
    PRIMARY KEY (order_id),
    FOREIGN KEY(cust_id) REFERENCES customer(cust_id)
    );

CREATE TABLE order_variant (
    order_id int(10) NOT NULL, 
    variant_id int(10) NOT NULL, 
    quantity int(10) NOT NULL, 
   FOREIGN KEY(order_id) REFERENCES `order`(order_id),
   FOREIGN KEY(variant_id) REFERENCES variant(variant_id)

     );

CREATE TABLE cart (
    variant_id int(10) NOT NULL, 
    quantity int(10) NOT NULL, 
    cust_id int(10) NOT NULL,
    FOREIGN KEY(variant_id) REFERENCES variant(variant_id),
    FOREIGN KEY(cust_id) REFERENCES customer(cust_id)
    
    );















/*
ALTER TABLE cart DROP FOREIGN KEY FKcart912969;
ALTER TABLE `order` DROP FOREIGN KEY FKorder542699;
ALTER TABLE order_variant DROP FOREIGN KEY FKorder_vari991716;
ALTER TABLE cart DROP FOREIGN KEY FKcart189789;
ALTER TABLE order_variant DROP FOREIGN KEY FKorder_vari121065;
ALTER TABLE custom_attribute DROP FOREIGN KEY FKcustom_att225960;
ALTER TABLE variant DROP FOREIGN KEY FKvariant638931;
ALTER TABLE `contains` DROP FOREIGN KEY FKcontains871517;
ALTER TABLE `contains` DROP FOREIGN KEY FKcontains819496;
ALTER TABLE has DROP FOREIGN KEY FKhas369115;
ALTER TABLE has DROP FOREIGN KEY FKhas792832;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS `contains`;
DROP TABLE IF EXISTS custom_attribute;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS has;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS order_variant;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS sub_category;
DROP TABLE IF EXISTS variant;
*/