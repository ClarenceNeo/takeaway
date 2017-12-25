create table product (`id` int unsigned not null auto_increment primary key, 
`title` varchar(32) not null,
`price` double unsigned not null,
`cover_path` varchar(2084),
`prop` text,
`create_at` int unsigned,
`update_at` int unsigned,
`sales` int unsigned);

create table cat (`id` int unsigned not null auto_increment primary key,
`title` varchar(32) not null,
`cover_path` varchar(2084)
);

create table user (`id` int unsigned not null auto_increment primary key,
`username` varchar(24) not null,
`password` varchar(128) not null,
`location` text comment '{location_id: 1, detail: "樱花园3单元"}',
`create_at` int unsigned,
`update_at` int unsigned
);

create table cart (`id` int unsigned not null auto_increment primary key,
`product_id` int unsigned not null,
`count` int unsigned not null,
`user_id` int unsigned not null,
foreign key fk_cart_product_id(product_id)
REFERENCES product (id),
foreign key fk_cart_user_id(user_id)
REFERENCES user(id)
);

create table `order` (
`id` int unsigned not null auto_increment primary key,
`user_id` int unsigned not null,
`order_num` varchar(64) NOT NULL COMMENT '如：A-8788627842',
`product` text COMMENT '[{id: 1, count: 2},{id: 2, count: 5}]',
`snapshot` text COMMENT '{product: [{id: 1, cover_url: "...", price: 5}], user: {id: 1, username: "whh"}}',
foreign key fk_order_user_id(user_id)
REFERENCES user(id)
);


mysqldump -uroot -p takeaway > /Users/Clarence/GitHub/Project/002-takeaway/db/backup/$(date +%s).sql;

alter table user add column (premission varchar(24) not null default 'user');

alter table product add column (delivery int unsigned);
alter table product add column (delivery_tiem int unsigned);