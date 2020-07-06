-- Deploy school:api/update to pg

BEGIN;

-- edit teacher
CREATE FUNCTION edit_teacher(t json)
    RETURNS teacher
AS $$
UPDATE teacher SET
	first_name = t->>'first_name',
	last_name = t->>'last_name',
	birth_date = (t->>'birth_date')::date,
	password = t->>'password',
	email = t->>'email',
	avatar = t->>'avatar'
WHERE id = (t->>'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;


--edit student
CREATE FUNCTION edit_student(t json)
    RETURNS student
AS $$
UPDATE student SET
	first_name = t->>'first_name',
	last_name = t->>'last_name',
	birth_date = (t->>'birth_date')::date,
	password = t->>'password',
	email = t->>'email',
	avatar = t->>'avatar',
	class_id = (t->>'class_id')::int
WHERE id = (t->>'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

--edit card
CREATE FUNCTION edit_card(t json)
    RETURNS card
AS $$
UPDATE card SET
	title = t->>'title',
	content = t->>'content',
	position = (t->>'position')::int,
	list_id = (t->>'list_id')::int,
	label_id = (t->>'label_id')::int,
	class_id = (t->>'class_id')::int,
	link = t->>'link',
	video =t->>'video'
WHERE id = (t->>'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

--edit class
CREATE FUNCTION edit_class(t json)
    RETURNS class
AS $$
UPDATE class SET
	code = t->>'code'
WHERE id = (t->>'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

--created label
CREATE FUNCTION edit_label(t json)
    RETURNS label
AS $$
UPDATE label SET
	title = t->>'title',
	color = t->>'color'
WHERE id = (t->>'id')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
