/* Un bloc de commentaire
*/

--une ligne de commentaire

/* Create a table called Personnes */
CREATE TABLE Personnes(Id integer PRIMARY KEY, prenom text, age int, metier text );

/* Create few records in this table */
INSERT INTO Personnes VALUES(1,'Tom', 28 , 'Cuisinier');
INSERT INTO Personnes VALUES(2,'Lucy', 18 , 'Etudiante');
INSERT INTO Personnes VALUES(3,'Frank', 31 , 'Cariste');
INSERT INTO Personnes VALUES(4,'Jane',  21 , 'Musicienne' );
INSERT INTO Personnes VALUES(5,'Robert', 54 , 'Chauffeur');

-- 1. Afficher les toutes les colonnes de la table personnes

select*from Personnes;

-- 2. Afficher juste le prénom
SELECT prenom FROM personnes;

-- 3 affichez le prenom et l'age

SELECT prenom,age FROM personnes;


-- 4 Affichez les informations de Lucy

SELECT * FROM personnes WHERE prenom = 'Lucy';-- touche 4 " ' "

-- 5 affichez le prenom et l'age du Cuisinier

SELECT prenom, age from personnes where metier = 'Cuisinier';

-- 6 Affichez les personnes qui ne sont pas Cariste

select * from personnes WHERE metier !='Cariste';

select * from personnes WHERE metier <> 'Cariste';

select * from personnes WHERE not metier ='Cariste';
-- 7 Affichez les personnes de plus de 30 ans

select * from personnes where age > 30;

-- 8 Affichez les personnes de moins de 40 ans

select * from personnes where age < 40;
 
-- 9 Afficher la personne de moins de 30 ans et qui est musicienne

select * from personnes where age < 30 and metier = 'Musicienne';

-- 10 Afficher le Cuisinier et le Chauffeur

select * from personnes where metier = 'Cuisinier' or metier ='Chauffeur';

--11 Affichez les personnes de moins de 40 ans et qui ont un id > 2
select * from personnes where id > 2 and age < 40 ;

-- 12. trouvez les prénoms qui contiennent un 'a'

select * from personnes where prenom like '%a%';

-- 13. Trouvez les métiers qui contiennent à la fois un 'e' et un 'r'

select * from personnes where metier like '%e%'and metier like '%r%';

-- Bonus Affichez les personnes qui ont un métier qui contient au moins 2 voyelles identiques trié par ordre alphabétique de prénom

select * from personnes where metier like '%a%a%' or metier like '%e%e%' or metier like '%i%i%' or metier like '%o%o%'or metier like '%u%u%' or metier like '%y%y%' or metier like '%E%e%' order by prenom;

-- 14. Affichez le Cariste, le Cuisinier et l'Etudiante

select * from personnes where metier ='Cariste' or metier = 'Cuisinier' or metier = 'Etudiante';

select * from personnes where metier in ('Cariste','Cuisinier','Etudiante');
-- 15. affichez les personnes entre 20 et 40 ans

select * from personnes where age >= 20 and age <= 40;

select *from personnes where age between 20 and 40;

-- 16. Affichez toute la table par ordre croissant d'age

select * from personnes order by age;

-- 17. Affichez les personnes qui ne sont pas compris entre 20 et 40 ans par ordre décroissant d'age

select * from personnes where age <= 20 or age >=40 order by age desc;

SELECT * from personnes where age not between 20 and 40 order by age desc;


-- Creation de table 

create table voiture(id_voiture int primary key not null,marque varchar(20),modele varchar(20),prix float,date_circulation date,couleur varchar(20));

-- insertion donnees

INSERT INTO voiture VALUES(1,'bmw', 'm5' , 138000,'2019-05-26','bleu');

-- lecture des donnes entrees

select * from voiture;

-- insertion donnees suite

INSERT INTO voiture VALUES(2,'ford', 'mustang' , 75000,'1969-02-05','noir');
INSERT INTO voiture VALUES(3,'toyota', 'yaris' , 15350,'2020-12-07','rouge');
INSERT INTO voiture VALUES(4,'nissan', 'primera' , 1700,'1998-07-20','blanc');

--verification tableau

select * from voiture;

--inserez une colonne "FK_id_voiture(int)" a la table "personnes"

ALTER TABLE personnes ADD column FK_id_voiture int;

-- verification ds la table personnes

select * from personnes;

-- UPDATE (insertion de donnees)

update personnes set fk_id_voiture=1 where prenom='Jane';

--verification

select fk_id_voiture from personnes where prenom ='Jane';

-- suite UPDATE

update personnes set fk_id_voiture=2 where prenom='Robert';
update personnes set fk_id_voiture=3 where prenom='Tom';
update personnes set fk_id_voiture=4 where prenom='Frank';

select*from personnes;
-- affichez la personne qui n'a pas de fk_id_voiture

select prenom from personnes where fk_id_voiture is null;

-- affichez les personnes qui ont une voiture
select prenom from personnes where fk_id_voiture is not null;

-- JOIN-ction des deux tables (ajout de la colonne "FK_id_voiture" lie a la table personnes via "id")

--affichez le prenom ,la marque et le modele des personnes qui "ont" une voiture.
select prenom,marque,modele from personnes join voiture on fk_id_voiture = id_voiture;

-- VIEW

create view propriete as select prenom,marque,modele from personnes join voiture on fk_id_voiture = id_voiture;

-- verif donnees

select* from propriete;

-- Lucy aquiere une voiture(id 5,'renault','twingo',5000,"1998-05-05","vert")

insert into voiture values (5,'renault','twingo',5000,'1998-05-05','vert');

--on lie le vehicule a lucy

update personnes set fk_id_voiture = 5 where prenom = 'Lucy';

-- verification des nouvelles donnes


--creation d'un 6eme vehicule

insert into voiture values (6,'renault','twingo',5000,'1998-05-05','orange');

-- verif donnees

select * from voiture;

-- suppression du 6 eme vehicule

DELETE from voiture where couleur like 'orange';

-- verif donnees

select * from voiture;
