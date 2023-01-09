create database nodejs_api;

-- Table "recipe":
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

-- Insert table "recipe":
insert into nodejs_api.recipe (id, name, difficulty, ingredients, preparation_time, cooking_time, note)
values  (1, 'Soupe aux légumes', 1, '1 litre de bouillon de légumes, 1 carotte, 1 courgette, 1 poivron, 1 oignon, sel, poivre', 10, 20, 4),
        (2, 'Tarte aux pommes', 3, 'Pâte brisée, 6 pommes, 30g de beurre, 60g de sucre, 1 oeuf, cannelle', 20, 40, 5),
        (3, 'Poulet aux champignons', 2, '4 blancs de poulet, 250g de champignons, 1 oignon, huile d''olive, sel, poivre, persil', 10, 20, 4),
        (4, 'Gratin dauphinois', 2, '500g de pommes de terre, 20cl de lait, 1 gousse d''ail, sel, poivre, fromage râpé', 15, 45, 5),
        (5, 'Omelette aux tomates', 1, '2 oeufs, 2 tomates, sel, poivre', 5, 10, 4);


-- Table "user":
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

-- Insert table "user":
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


-- Table "category":
create table nodejs_api.category
(
    id     int auto_increment primary key,
    name   varchar(255)  not null,
    note   int default 0
);

-- Insert table "category":
insert into nodejs_api.category (id, name, note)
values  (1, 'Française', 5),
        (2, 'Chinoise', 4),
        (3, 'Italienne', 4),
        (4, 'Japonaise', 3),
        (5, 'Anglaise', 1);


-- Table "category":
create table nodejs_api.restaurant
(
    id           int auto_increment primary key,
    name         varchar(255)  not null,
    address      varchar(255)  not null,
    cuisine_type int           not null,
    note         int default 0 not null,
    constraint restaurant___cuisine_type_fk
        foreign key (cuisine_type) references nodejs_api.category (id)
);

-- Insert table "category":
insert into nodejs_api.restaurant (id, name, address, cuisine_type, note)
values  (1, 'Le Potager Gourmand', '12 rue des Fleurs', 1, 4),
        (2, 'Chez Marcel', '23 avenue de la République', 3, 3),
        (3, 'La Petite Auberge', '45 rue des arbres', 1, 5),
        (4, 'La Cantine de la Plage', '34 boulevard de l''Océan', 5, 2),
        (5, 'Le Palais de Jade', '56 avenue du soleil', 2, 4);