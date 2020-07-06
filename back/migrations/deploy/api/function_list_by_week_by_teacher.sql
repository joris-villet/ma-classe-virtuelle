-- Deploy school:api/function_list_by_week_by_teacher to pg

BEGIN;

CREATE FUNCTION list_by_week_by_teacher(week int, classid int, tid int)
    RETURNS SETOF RECORD
AS $$			
SELECT code, class_id, teacher_id, tmp.*  FROM teacher_has_class
			JOIN class ON class.id = teacher_has_class.class_id
			 JOIN list_card_label_by_week(week, teacher_has_class.class_id) tmp(list_id int, list_title timestamptz, all_card json, week int)
			 ON teacher_has_class.teacher_id = tid
			 ORDER BY class_id, tmp.list_id;
$$ LANGUAGE sql STABLE;

COMMIT;
