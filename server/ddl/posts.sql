drop table if exists posts cascade;

create table posts
(
  id          serial        not null,
  name				varchar(100)	not null,
  region      varchar(250)  not null,
  comment     varchar(500)  not null,
  date			  timestamp		  not null,
  primary key (id)
);
