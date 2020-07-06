-- Deploy school:api/function_list_by_week to pg

BEGIN;

CREATE FUNCTION list_card_label_by_week(wk int, classid int)
    RETURNS SETOF RECORD
AS $$		
WITH card_with_label AS (
	SELECT card.*, label.title title_label, label.color color_label
	FROM card
	JOIN label ON card.label_id = label.id
	WHERE card.class_id = classid
	ORDER BY card.id
),
card_by_week AS (
	SELECT card_with_label.list_id, json_agg(card_with_label.*) "data"
	FROM card_with_label
	GROUP BY card_with_label.list_id)
SELECT list.id list_id, list.date_school list_title, card_by_week.data all_card, list.week week
FROM list
LEFT JOIN card_by_week ON card_by_week.list_id = list.id
WHERE list.week = wk AND date_part('year', date_school) = (SELECT date_part('year', current_date));
$$ LANGUAGE sql STABLE;

COMMIT;
