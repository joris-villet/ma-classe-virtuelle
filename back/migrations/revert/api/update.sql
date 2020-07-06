-- Revert school:api/update from pg

BEGIN;

DROP FUNCTION IF EXISTS edit_teacher(t json), edit_student(t json), edit_card(t json), edit_class(t json), edit_label(t json);

COMMIT;
