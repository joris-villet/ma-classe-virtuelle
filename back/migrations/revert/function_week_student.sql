-- Revert school:function_week_student from pg

BEGIN;

DROP FUNCTION IF EXISTS list_card_label_by_student(int);

COMMIT;
