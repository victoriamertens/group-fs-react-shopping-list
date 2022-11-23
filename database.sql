

-- shopping_list will be the name of the database

CREATE TABLE item_list (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80),
    "quantity" DECIMAL,
    "unit" VARCHAR(10),
    "purchased" BOOLEAN DEFAULT false
);

INSERT INTO item_list 
    ("name", "quantity", "unit")
VALUES
    ('Apples', 10, 'units'),
    ('Peanuts', 1003, 'lbs'),
    ('Pants', 1, 'pair')
;

