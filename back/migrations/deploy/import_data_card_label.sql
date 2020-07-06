-- Deploy school:import_data_card_label to pg

BEGIN;

INSERT INTO label(title, color) VALUES
('Révision', '#22BA61'),
('Important', '#de4d71'),
('Lecture', '#1994D4'),
('Entrainement', '#A13BDB'),
('Information', '#2CFAA1'),
('Mathématiques', '#F58D8D'),
('Français', '#78D4F1'),
('Histoire', '#C98765'),
('Géographie', '#75C485'),
('Anglais', '#EBD860'),
('Art plastique', '#C383CC'),
('Musique', '#DAAB4C');

INSERT INTO card(title, content, position, list_id, label_id, class_id, link) VALUES
('Les nombres jusqu’à 79', 'Ranger les nombres dans l''ordre croissant et décroissant
1) Regarde la vidéo pour te souvenir de comment procéder.
2) Ranger au brouillon les nombres suivants du plus grand au plus petit : 64 - 53 - 73 - 43- 62
Si vous avez le temps, même exercice mais du plus petit au plus grand : 75 - 32 - 55 - 62 -79.', 0, 135, 6, 1, 'https://lesfondamentaux.reseau-canope.fr/video/ranger-plusieurs-nombres-a-deux-chiffres.html'),
('Les nombres jusqu’à 79', 'Nous quittons la reproduction pour nous consacrer à un cycle secourisme.
Vous pouvez (que les élèves viennent ou non à l''école) inscrire vos enfants à ce jeu mis en place par les pompiers', 0, 141, 8, 2, ' https://sauvequiveut.fr/barracks');


INSERT INTO card(title, content, position, list_id, label_id, class_id, video) VALUES
('Etude video', 'Ecouter 3 fois le début de la vidéo sans la regarder (1 minute 02).
Dire à quelqu’un les mots que l’on a reconnu, chercher de quoi peut parler l’extrait.
Regarder la vidéo, puis prendre le temps d’associer les mots à ce qui est écrit', 0, 135, 10, 2, 'https://www.youtube.com/watch?v=cTlzz7ahRVA'),
('Etude des sons', 'Regarde la vidéo ci dessous (prends un crayon et un cahier de brouillon) + la feuille d''encodage', 0, 134, 1, 1, 'https://www.youtube.com/watch?v=ildOQy8GOHM&feature=emb_logo'),
('Etude des sons', 'Ecouter 3 fois le début de la vidéo sans la regarder (1 minute 20).
Dire à quelqu''un les mots que l''on a reconnu, chercher de quoi peut parler l''extrait.
Regarder la vidéo, puis prendre le temps d''associer les mots à ce qui est écrit ', 0, 139, 10, 2, 'https://www.youtube.com/watch?v=p-wFe5M2jzY'),
('Etude des sons', 'Regarde la vidéo ci dessous (prends un crayon et un cahier de brouillon) + la feuille d''encodage', 0, 139, 1, 1, 'https://www.youtube.com/watch?v=ildOQy8GOHM&feature=emb_logo'),
('Les partages', 'Regarde la vidéo ci-dessous Prends un cahier de brouillon et un crayon.
Prends aussi si tu en as des petits objets (une quinzaine) comme des pions, des crayons, des jetons, des briques de lego par exemple.', 0, 145, 6, 1, 'https://www.youtube.com/watch?v=V2PEIS7g-S0&feature=emb_logo'),
('Etude des sons', 'Voici un petit tuto pour faire de la 3D. La personne qui dessine se débrouille très bien, ne soyez donc pas vexé si ce que vous faites se rapproche de ce que vous voyez sans l’égaler.', 0, 128, 11, 2, 'https://www.youtube.com/watch?v=R5A84gLkcZQ'),
('Les nombres jusqu’à 69', 'Ranger les nombres dans l''ordre croissant et décroissant
2) Ranger au brouillon les nombres suivants du plus grand au plus petit : 64 - 53 - 68 - 43- 49
Si vous avez le temps, même exercice mais du plus petit au plus grand : 65 - 32 - 55 - 62 -46.', 0, 129, 6, 1, 'https://lesfondamentaux.reseau-canope.fr/video/ranger-plusieurs-nombres-a-deux-chiffres.html'),
('Etude des sons', 'Voici un petit tuto pour faire de la 3D. La personne qui dessine se débrouille très bien, ne soyez donc pas vexé si ce que vous faites se rapproche de ce que vous voyez sans l’égaler.', 0, 129, 11, 2, 'https://www.youtube.com/watch?v=R5A84gLkcZQ'),
('somewhere over the rainbow', 'Ecouter la version de IZ de « somewhere over the rainbow » :
Refaire le refrain , si ce n’est pas trop compliqué, tenter de de faire la chanson entière.', 0, 138, 12, 2, 'https://www.youtube.com/watch?v=luiewmX8hw0'),
('Découverte du monde', 'Nous avons travaillé sur les dents, pour continuer à apprendre, vous pouvez regarder cette vidéo de C''est pas sorcier.', 0, 137, 5, 1, 'https://youtu.be/fMTrXPWQhT0');





INSERT INTO card(title, content, position, list_id, label_id, class_id) VALUES
('Calcul mental', 'Sur ardoise ou cahier de brouillon:
mémoriser les compléments à 10 combien pour aller de 3 à 10, de 5 à 10, de 8 à10, de 4 à 10, de 9 à 10, de 6 à 10, de 1 à 10, de 7 à 10', 0, 130, 6, 1),
('Les générations', '1-MA GÉNÉRATION
un frère / une _______________
un________________ / une cousine
un neveu / une ________________
un _______________ / une fille
2-LA GÉNÉRATION DES PARENTS
un père / une ________________
un ________________ / une maman
un beau-père / une _________________
un ________________/ une tante', 0, 142, 1, 1),
('Calculs', 'Réaliser la page 32 du fichier Jocatop "Je réussis mes calculs"', 0, 131, 6, 1),
('Etude des sons', '-relire une fois la fiche de syllabes et de mots terminant par "et" dans le cahier jaune
-faire les mots croisés "et" et répondre aux devinettes avec les même mots que dans les mots croisés (déjà imprimés dans la pochette violette)', 0, 130, 7, 1),
('Les mots étiquettes', 'Barre l’instrus dans chaque liste de mots
- une rose, une marguerite, une pâquerette, un chêne, une tulipe
- une robe, une jupe, un coussin, un pantalon, un pull, un teeshirt
- le salon, la cuisine, l’histoire, la chambre, la salle de bain, le garage', 0, 136, 7, 1),
('Piscine', 'N''oublier pas vos affaires de piscine pour jeudi', 0, 131, 2, 1),
('La petite Poule rousse', 'Lire "poule rousse" texte 3', 0, 132, 3, 1),
('Calcul', 'Faire les exercices 3 à 8 pages 48-49', 0, 130, 6, 2),
('Ortho-lexique', 'Exercices 8 à 14 pages 152-153', 0, 131, 7, 2),
('Participe passé', 'Complète les participes passés.
1. Les voisins sont pass__ nous voir.
2. Mon frère m’a passé__ sa raquette.
3. Léa a passé__ de bonnes vacances !', 0, 132, 7, 2),
('La 1ere guerre mondial', 'Relir le chapitre sur la 1ere guerre Mondial page 123 à 125', 0, 130, 8, 2),
('L''europe', 'Revisé le nom des pays qui compose l''union Européene', 0, 133, 8, 2),
('L''imparfait', 'Transpose le texte en utilisant le passé composé ou l’imparfait.
Nous sommes en train de faire nos exercices.
Soudain, le prof de maths avance dans l’allée et scrute les tables. Il s’arrête et demande à Kim de lui donner son cahier. ', 0, 134, 7, 2),
('Soustractions', 'Faire la page 56 dans le cahier "je réussis mes calculs" (soustractions en ligne)', 0, 137, 1, 1),
('Petite soeur Li', 'Lis les trois grains de riz épisode 7
Demander à votre enfant s''il connait le sens des mots suivants au fur et à mesure de la lecture et les lui expliquer si besoin :
-surgir : sortir très vite, par surprise des branches de bambou
-immense : gigantesque, très grand
-foncer : aller très vite
-le lit du fleuve : c''est le creux dans le quel coule le fleuve (ou la rivière).
Quand on dit que la rivière sort de son lit, c''est qu''elle déborde et provoque une inondation.', 0, 140, 3, 1),
('Les nombres jusqu''a 79', 'Réaliser la page 42 du fichier Jocatop "Je réussis mes calculs"', 0, 138, 6, 1),
('Petits problèmes oraux', '-Sami a 2 billes, il en gagne 5 à la récré. Combien en a-t-il maintenant ?
-Ava a 4 billes. Elle en gagne 3 à la récré. Combien en a-t-elle maintenant ?
-Mathis a 10 billes. Il en perd 7. Combien de billes reste-t-il à Mathis ?
-Au début de la récré, Emma avait 12 billes. Elle en a perdu 5. Combien lui reste-t-il de billes à la fin de la récréation ?', 0, 138, 4, 1),
('Le vocabulaire', 'Faire les numéros 3 et 4 de la fiche de révisions imprimée vendredi', 0, 141, 7, 1),
('Piscine', 'N''oublier pas vos affaires de piscine pour jeudi', 0, 138, 2, 1),
('La petite Poule rousse', 'Lire "poule rousse" texte 4 (lire 2 fois ou 1 fois + 1 relecture par l''adulte)', 0, 139, 3, 1),
('Géometrie', 'Faire les exercices 1 à 12 pages 78-79', 0, 133, 6, 2),
('La phrase', '1) Complète la définition
Une phrase est une suite de.................qui a du................. . Elle commence par une .................et se termine, généralement par un ............. .', 0, 137, 7, 2),
('Les formes de phrases', 'Souligne en jaune les phrases affirmatives et en bleu les négatives:
- Les lémuriens vivent dans les arbres.
- Le menuisier n’a pas pris son échelle.
- Au printemps, les éleveurs tondent les moutons.
- Elisa n’a aucune envie de jouer au basket.', 0, 140, 7, 2),
('Les fleuves de France', 'Faire les exercices des pages 123-124', 0, 137, 9, 2),
('Les rois et Reines', 'Relire le chapitre sur le couronnement page 36', 0, 140, 8, 2),
('Géometrie', 'Faire les exercices 1 à 12 pages 78-79', 0, 137, 6, 2),
('Typographie', 'Partir de son prénom, s’obliger à mixer les types d’écritures (majuscules, minuscule) avec les éléments vus en classe (partir d’un trait que l’on épaissit) puis tenter de le mettre en relief.', 0, 136, 11, 2),
('Question', '1. Cherche les mots « mugissement », « barrissement », « piaillement » et « hennissement ». A quoi ces mots correspondent-ils ?
2. Celui qui parle est-il un garçon ou une fille ? Justifie.
3. En quoi consistent les bricolages de la télévision ?
4. La réaction de l’enfant n’est-elle pas un peu étonnante face à qui arrive à sa famille? Explique.
5. Quel rôle a l’enfant vis-à-vis de ses parents ?
6. Cherche les différents sens du mot navet. Vois-tu un sens caché à la phrase? Lequel ?
7. Ecris un texte dont le titre est « console »', 0, 142, 7, 2),
('Nature des mots', 'Recopie les mots soulignés et indique leur nature :
Comme il a très faim, Barnabé mange salement. En plus, il est assis sur une chaise trop petite. Demain, il fera un effort !', 0, 144, 7, 2),
('Calculs', 'Pose et calcule les opérations :
1. 993 : 4
2. 8,28 x 11,7
3. 7310,13 - 282,256', 0, 146, 6, 2),
('La revolution francaise', 'Revoir le paragraphe sur la republique et se qui la mise en danger', 0, 143, 9, 2),
('Petite soeur Li', 'Lire l''épisode n° 5 de l''histoire "les trois grains de riz".
Expliquer ce que veut dire "adroit" (intelligent/futé ou habile de ses mains, qui arrive à faire des choses
très précises avec ses mains)', 0, 143, 3, 1),
('Addition', '', 0, 144, 7, 1),
('Le son OIN/ION', 'Entoure le bon mot .
▪ Tu n’habites pas très lion / loin de l’école.
▪ Il faut se laver les moins / mains avant de manger.
▪ Prends bien soir / soin de te cahiers.
▪ On met un pion / point à la fin d’une phrase.
▪ Il a reçu un coup de poing / pois dans la figure.
▪ Il a rejoint / repeint son vélo en bleu.', 0, 146, 4, 1),
('Sortie au chateau a Motte', 'Rappel pour la sortie de lundi prochain, prévoir une casquette et une gourde', 0, 147, 2, 1);


COMMIT;
