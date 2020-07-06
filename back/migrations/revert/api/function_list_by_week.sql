-- Revert school:api/function_list_by_week from pg

BEGIN;

DROP FUNCTION IF EXISTS list_card_label_by_week(int, int);

COMMIT;
