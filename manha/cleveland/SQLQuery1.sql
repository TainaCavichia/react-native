CREATE TABLE Especialidades(
	id INT PRIMARY KEY IDENTITY,
	Nome VARCHAR(200) NOT NULL,
)

INSERT INTO Especialidades(Nome)
VALUES	('Otorrinolaringologia'),
		('Ginecologia'),
		('Obstetrícia')

ALTER TABLE medicos
ADD Especialidade int foreign key references Especialidades(id);
select * from medicos

UPDATE medicos
SET Especialidade = 2
