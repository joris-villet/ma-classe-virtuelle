-- Revert school:api/function_list_by_week_by_student from pg

BEGIN;

DROP FUNCTION IF EXISTS list_by_week_by_student(int, int, int);


COMMIT;
