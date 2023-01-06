create database nodejs_api;

--Table to manage the recipes we upload to the website.
create table recipe
(
    id               int auto_increment primary key,
    name             varchar(255) not null,
    difficulty       int          not null,
    ingredients      varchar(255) not null,
    preparation_time int          not null,
    cooking_time     int          not null,
    note             int          not null
);

-- Table to manage the user accounts.
create table user
(
    id           int auto_increment primary key,
    last_name    varchar(255)  not null,
    first_name   varchar(255)  not null,
    is_admin     int default 0 not null,
    email        varchar(255)  not null,
    password     varchar(255)  not null,
    phone_number varchar(255)  not null,
    constraint email
        unique (email),
    constraint phone_number
        unique (phone_number)
);

