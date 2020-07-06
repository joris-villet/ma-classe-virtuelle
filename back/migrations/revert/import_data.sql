-- Revert school:import_data from pg

BEGIN;

DROP TABLE teacher_has_class, student, class, teacher CASCADE;

COMMIT;
