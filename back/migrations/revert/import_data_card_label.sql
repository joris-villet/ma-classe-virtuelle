-- Revert school:import_data_card_label from pg

BEGIN;

DROP TABLE IF EXISTS card, label CASCADE;

COMMIT;
