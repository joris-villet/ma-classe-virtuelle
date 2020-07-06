-- Revert school:api/function_list_by_week_by_teacher from pg

BEGIN;

DROP FUNCTION IF EXISTS list_by_week_by_teacher(int, int, int);

COMMIT;
