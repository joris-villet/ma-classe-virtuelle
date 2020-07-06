-- Revert school:api/function_week_teacher from pg

BEGIN;

DROP FUNCTION IF EXISTS list_card_label_by_teacher(int);

COMMIT;
