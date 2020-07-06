-- Deploy school:api/function_card_whith_label to pg

BEGIN;

CREATE FUNCTION card_with_label(cid int)
RETURNS RECORD AS $$
	SELECT card.*, label.title title_label, label.color color_label
	FROM card
	JOIN label ON card.label_id = label.id
	WHERE card.id = cid
$$ LANGUAGE sql STABLE STRICT;

COMMIT;
