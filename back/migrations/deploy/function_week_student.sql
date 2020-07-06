-- Deploy school:function_week_student to pg

BEGIN;

CREATE FUNCTION list_card_label_by_student(studid int)
    RETURNS SETOF RECORD
AS $$			
SELECT class.code, student.class_id, student.id student_id, tmp.* FROM student
JOIN class ON class.id = student.class_id
INNER JOIN list_card_label_by_class(student.class_id) tmp(list_id int, list_title timestamptz, all_card json, week int)
			ON student.id = studid;
$$ LANGUAGE sql STABLE;

COMMIT;
