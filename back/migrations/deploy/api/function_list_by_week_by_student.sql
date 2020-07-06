-- Deploy school:api/function_list_by_week_by_student to pg

BEGIN;

CREATE FUNCTION list_by_week_by_student(week int, classid int, studid int)
    RETURNS SETOF RECORD
AS $$			
SELECT class.code, student.class_id, student.id student_id, tmp.* FROM student
JOIN class ON class.id = student.class_id
			INNER JOIN list_card_label_by_week(week, classid) tmp(list_id int, list_title timestamptz, all_card json, week int)
			ON student.id = studid;
$$ LANGUAGE sql STABLE;


COMMIT;
