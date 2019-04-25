drop table if exists replies cascade;

create table replies
(
  id          serial        not null,
  pid         int           not null,
  name		    varchar(100)	not null,
  comment     varchar(500)  not null,
  date	      timestamp default CURRENT_TIMESTAMP		not null,
  primary key (id, pid),
  foreign key (pid) references posts(id)
);
