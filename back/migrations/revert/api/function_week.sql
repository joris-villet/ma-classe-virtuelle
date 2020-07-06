-- Revert school:api/function_week from pg

BEGIN;

DROP FUNCTION IF EXISTS list_card_label_by_class(int);

COMMIT;
