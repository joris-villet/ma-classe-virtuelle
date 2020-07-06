-- Deploy school:init to pg

BEGIN;

CREATE TABLE teacher (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name text NOT NULL,
	last_name text NOT NULL,
	birth_date date NOT NULL,
	password text NOT NULL,
	email text NOT NULL UNIQUE,
	avatar text
);

CREATE TABLE class (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	code text NOT NULL
);

CREATE TABLE teacher_has_class (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	class_id int NOT NULL REFERENCES class(id),
	teacher_id int NOT NULL REFERENCES teacher(id) ON DELETE CASCADE
);

CREATE TABLE student (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	first_name text NOT NULL,
	last_name text NOT NULL,
	birth_date date,
	password text NOT NULL,
	email text NOT NULL UNIQUE,
	avatar text,
	class_id int REFERENCES class(id) ON DELETE CASCADE
);

CREATE TABLE list (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title text NOT NULL,
	date_school timestamptz NOT NULL UNIQUE,
	week int NOT NULL
);

CREATE TABLE label(
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title text NOT NULL,
	color text NOT NULL DEFAULT '#fff'
);

CREATE TABLE card (
	id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title text,
	content text NOT NULL,
	position int DEFAULT 0,
	list_id int REFERENCES list(id),
	label_id int REFERENCES label(id) ON DELETE CASCADE,
	class_id int REFERENCES class(id),
	link text,
	video text
);

COMMIT;
