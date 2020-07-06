-- Deploy school:api/view_week to pg

BEGIN;

--semaine en cours
CREATE VIEW v_current_week AS
SELECT * FROM list WHERE date_part('week', date_school) = (SELECT date_part('week', current_date))
AND date_part('year', date_school) = (SELECT date_part('year', current_date));


COMMIT;
