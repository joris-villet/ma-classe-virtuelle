-- Deploy school:api/create to pg

BEGIN;

--created teacher
CREATE FUNCTION new_teacher(t json)
RETURNS teacher AS $$

INSERT INTO teacher(
    first_name, last_name, birth_date, password, email, avatar)
VALUES (t->>'first_name', t->>'last_name', (t->>'birth_date')::date, t->>'password', t->>'email', t->>'avatar')
RETURNING *;

$$ LANGUAGE sql STRICT;


--created student
CREATE FUNCTION new_student(t json)
RETURNS student AS $$

INSERT INTO student(
    first_name, last_name, password, email, class_id)
VALUES (t->>'first_name', t->>'last_name', t->>'password', t->>'email', (t->>'class_id')::int)
RETURNING *;

$$ LANGUAGE sql STRICT;


--created card
CREATE FUNCTION new_card(t json)
RETURNS card AS $$

INSERT INTO card(
    title, content, position, list_id, label_id, class_id, link, video)
VALUES (t->>'title', t->>'content', (t->>'position')::int, (t->>'list_id')::int, (t->>'label_id')::int, (t->>'class_id')::int, t->>'link', t->>'video')
RETURNING *;

$$ LANGUAGE sql STRICT;

--created class
CREATE FUNCTION new_class(t json)
RETURNS class AS $$

INSERT INTO class(code)
VALUES (t->>'code')
RETURNING *;

$$ LANGUAGE sql STRICT;

--created label
CREATE FUNCTION new_label(t json)
RETURNS label AS $$
INSERT INTO label(
    title, color)
VALUES (t->>'title', t->>'color')
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;