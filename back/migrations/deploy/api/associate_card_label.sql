-- Deploy school:api/associate_card_label to pg

BEGIN;

-- associate one label as one card
CREATE FUNCTION create_associate(t json)
    RETURNS card
AS $$
UPDATE card SET
	label_id = (t->>'labelid')::int
WHERE id = (t->>'cid')::int
RETURNING *;
$$ LANGUAGE sql STRICT;

-- dissociate one label as one card
CREATE FUNCTION delete_associate(cid int)
    RETURNS card
AS $$
UPDATE card SET
	label_id = NULL
WHERE id = 2
RETURNING *;
$$ LANGUAGE sql STRICT;

COMMIT;
