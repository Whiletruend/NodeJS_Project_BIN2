create database nodejs_api;

--Table to manage the recipes we upload to the website.
create table nodejs_api.recipe
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
create table nodejs_api.user
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

--Insert de la table user :

insert into nodejs_api.user (id, last_name, first_name, is_admin, email, password, phone_number)
values  (1, 'Bongage', 'Benjamin', 1, 'benjamin.bongage@edu.devinci.fr', 'bbongage', '0636353241'),
        (2, 'Moutima', 'Marien', 1, 'marien.moutima@edu.devinci.fr', 'skibidi', '0745856855'),
        (3, 'Bellahoues', 'Ewen', 1, 'ewen.bellahoues@edu.devinci.fr', 'PantheonM7', '0601133711'),
        (4, 'Dupont', 'Pierre', 0, 'pierre.dupont@gmail.com', 'secret', '0634547890'),
        (5, 'Durand', 'Paul', 0, 'paul.durand@gmail.com', 'secret', '0674567890'),
        (6, 'Bourgeois', 'Jacques', 0, 'jacques.bourgeois@gmail.com', 'secret', '0634967890'),
        (7, 'Martin', 'Marie', 0, 'marie.martin@gmail.com', 'secret', '0734567890'),
        (8, 'Petit', 'Anne', 0, 'anne.petit@gmail.com', 'secret', '0634567820'),
        (9, 'Leroy', 'David', 0, 'david.leroy@gmail.com', 'secret', '0634167890'),
        (10, 'Moreau', 'Emilie', 0, 'emilie.moreau@gmail.com', 'secret', '0634567891'),
        (11, 'Laurent', 'Julien', 0, 'julien.laurent@gmail.com', 'secret', '0634567899'),
        (12, 'Simon', 'Céline', 0, 'celine.simon@gmail.com', 'secret', '0634567892'),
        (13, 'Meunier', 'Sophie', 0, 'sophie.meunier@gmail.com', 'secret', '0634567893'),
        (14, 'Lefebvre', 'Gilles', 0, 'gilles.lefebvre@gmail.com', 'secret', '0636567890'),
        (15, 'Roux', 'Sylvie', 0, 'sylvie.roux@gmail.com', 'secret', '0634557890'),
        (16, 'Garnier', 'Laurence', 0, 'laurence.garnier@gmail.com', 'secret', '0634561890'),
        (17, 'Rey', 'Vincent', 0, 'vincent.rey@gmail.com', 'secret', '0623456729'),
        (18, 'Fournier', 'Dominique', 0, 'dominique.fournier@gmail.com', 'secret', '0612335678');




