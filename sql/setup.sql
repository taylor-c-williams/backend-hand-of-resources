DROP TABLE IF EXISTS melb

CREATE TABLE melb (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  stagename TEXT NOT NULL,
  birthdate INTEGER NOT NULL
);


DROP TABLE IF EXISTS emma

CREATE TABLE emma (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  stagename TEXT NOT NULL,
  birthdate INTEGER NOT NULL
);


DROP TABLE IF EXISTS melaniec

CREATE TABLE melaniec (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  stagename TEXT NOT NULL,
  birthdate VARCHAR NOT NULL
);


DROP TABLE IF EXISTS geri

CREATE TABLE geri (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  stagename TEXT NOT NULL,
  birthdate VARCHAR NOT NULL
);


DROP TABLE IF EXISTS victoria

CREATE TABLE victoria (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  stagename TEXT NOT NULL,
  birthdate VARCHAR NOT NULL
);

