-- Deploy school:import_data to pg

BEGIN;

INSERT INTO teacher(first_name, last_name, birth_date, password, email) VALUES
('marie', 'durant', '1970-10-02', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'marie@gmail.com');

INSERT INTO class(code) VALUES
('classe CP'),
('classe CM2');

INSERT INTO student(first_name, last_name, birth_date, password, email, class_id) VALUES
('Alexis', 'Dumas', '2005-01-25', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'alexis@gmail.com', 1),
('Alexandre', 'Serpent', '2005-02-13', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'alex@gmail.com', 1),
('André', 'Dupont', '2005-03-20', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'andre@gmail.com', 1),
('Morgane', 'Vallès', '2005-02-17', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'morgane@gmail.com', 1),
('Frederic', 'Dupont', '2005-04-20', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'frederic@gmail.com', 2),
('Thomas', 'Villet', '2005-05-17', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'thomas@gmail.com', 2),
('Gaelle', 'Candille', '2005-01-25', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'gaelle@gmail.com', 2),
('Alexandre', 'Droulez', '2005-02-13', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'alexandre@gmail.com', 2),
('Margaux', 'Dupont', '2005-03-20', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'margaux@gmail.com', 2),
('Mélanie', 'Vallès', '2005-02-17', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'melanie@gmail.com', 2),
('Marc', 'Dupont', '2005-04-20', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'marc@gmail.com', 2),
('Joris', 'Villet', '2005-05-17', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'joris@gmail.com', 2),
('jean', 'valejean', '2005-03-10', '$2b$10$nR5LWIlLopGrga/Mvc06veQOmGcA7aquJygVU/uYZFTj6e97tlb/q', 'jean@gmail.com', 2);


INSERT INTO teacher_has_class(teacher_id, class_id) VALUES
(1, 1),
(1, 2);

COMMIT;
