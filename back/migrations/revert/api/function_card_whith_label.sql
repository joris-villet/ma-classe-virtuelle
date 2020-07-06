-- Revert school:api/function_card_whith_label from pg

BEGIN;

DROP FUNCTION IF EXISTS card_with_label(int);

COMMIT;
