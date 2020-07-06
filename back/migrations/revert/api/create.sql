-- Revert school:api/create from pg

BEGIN;

DROP FUNCTION IF EXISTS new_teacher(t json), new_student(t json), new_card(t json), new_class(t json), new_label(t json);

COMMIT;
