drop table if exists comments cascade;

create table comments
(
  id          serial        not null,
  pid         int           not null,
  name		  varchar(100)	not null,
  comment     varchar(500)  not null,
  date	      timestamp		not null,
  primary key (id, pid),
  foreign key (pid) references posts(id)
);
