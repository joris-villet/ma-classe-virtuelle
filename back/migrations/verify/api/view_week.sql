-- Verify school:api/view_week on pg

BEGIN;

SELECT * FROM v_next_week

ROLLBACK;
