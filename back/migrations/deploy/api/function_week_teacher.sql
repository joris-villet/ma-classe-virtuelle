-- Deploy school:api/function_week_teacher to pg

BEGIN;

CREATE FUNCTION list_card_label_by_teacher(tid int)
    RETURNS SETOF RECORD
AS $$			
SELECT code, class_id, teacher_id, tmp.*  FROM teacher_has_class
			JOIN class ON class.id = teacher_has_class.class_id
			INNER JOIN list_card_label_by_class(teacher_has_class.class_id) tmp(list_id int, list_title timestamptz, all_card json, wwek int)
			ON teacher_has_class.teacher_id = tid;
$$ LANGUAGE sql STABLE;

COMMIT;
