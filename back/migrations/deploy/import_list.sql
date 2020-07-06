-- Deploy school:import_list to pg

BEGIN;

INSERT INTO list (title, date_school, week)
SELECT (to_char(jours.jour, 'Day DD Month')), (jours.jour), (to_char(jours.jour, 'IW')::int)
FROM
(SELECT jour FROM 
 	(SELECT ('2020-01-01'::date + (d||' day')::interval)::date AS jour 
 FROM generate_series(0,3650) d) j 
WHERE EXTRACT (dow FROM jour) BETWEEN 1 AND 5) jours;

COMMIT;
