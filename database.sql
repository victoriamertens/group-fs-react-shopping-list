

-- shopping_list will be the name of the database

CREATE TABLE item_list (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80),
    "quantity" DECIMAL,
    "purchased" BOOLEAN DEFAULT false
);

INSERT INTO item_list 
    ("name", "quantity")
VALUES
    ('Apples', 10),
    ('Peanuts', 1003),
    ('Pants', 1)
;

ALTER TABLE "item_list"
ADD "unit" VARCHAR(10);