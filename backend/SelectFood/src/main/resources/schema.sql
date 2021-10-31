drop table if exists FOOD CASCADE;
drop table if exists MEMBER CASCADE;
drop table if exists SELECTED_FOOD CASCADE;
drop table if exists LIKE_FOOD CASCADE;
drop table if exists DISLIKE_FOOD CASCADE;

CREATE TABLE FOOD
(
    FOOD_ID integer PRIMARY KEY,
    NAME varchar(100) NOT NULL,
    TAG varchar(200) NOT NULL,
    INGREDIENT varchar(200) NOT NULL,
    YOUTUBE_URL varchar(200) NOT NULL
);

CREATE TABLE MEMBER
(
    MEMBER_ID   integer PRIMARY KEY,
    NICK_NAME varchar (100) NOT NULL,
    EMAIL varchar(100) NOT NULL,
    PASSWORD varchar(100) NOT NULL
);

CREATE TABLE SELECTED_FOOD
(
    SELECTED_FOOD_ID integer PRIMARY KEY,
    MEMBER_ID integer NOT NULL,
    constraint fk_selected_food_member_id FOREIGN KEY(MEMBER_ID)
        references MEMBER(MEMBER_ID) on delete cascade,
    FOOD_ID integer NOT NULL,
    constraint fk_selected_food_food_id FOREIGN KEY(FOOD_ID)
        references FOOD(FOOD_ID) on delete cascade
);

CREATE TABLE LIKE_FOOD
(
    LIKE_FOOD_ID integer PRIMARY KEY,
    MEMBER_ID integer NOT NULL,
    constraint fk_like_food_member_id FOREIGN KEY(MEMBER_ID)
        references MEMBER(MEMBER_ID) on delete cascade,
    FOOD_ID integer NOT NULL,
    constraint fk_like_food_food_id FOREIGN KEY(FOOD_ID)
        references FOOD(FOOD_ID) on delete cascade
);

CREATE TABLE DISLIKE_FOOD
(
    DISLIKE_FOOD_ID integer PRIMARY KEY,
    MEMBER_ID integer NOT NULL,
    constraint fk_dislike_member_id FOREIGN KEY(MEMBER_ID)
        references MEMBER(MEMBER_ID) on delete cascade,
    FOOD_ID integer NOT NULL,
    constraint fk_dislike_food_food_id FOREIGN KEY(FOOD_ID)
        references FOOD(FOOD_ID) on delete cascade
);