create table tasks (
    id integer primary key auto_increment,
    title varchar(200) not null,
    description varchar(300),
    done boolean not null default 0,
    createAt timestamp not null default default current_timestamp
)