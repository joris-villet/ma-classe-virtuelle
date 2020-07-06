-- Revert school:api/view_week from pg

BEGIN;

DROP VIEW IF EXISTS v_current_week;

COMMIT;
