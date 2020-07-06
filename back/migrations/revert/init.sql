-- Revert school:init from pg

BEGIN;

DROP TABLE IF EXISTS list, card, label, class, teacher, student, teacher_has_class;

COMMIT;
