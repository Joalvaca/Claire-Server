BEGIN;

    INSERT INTO claire_products
        (product_name,max_water_flow,quantity_of_qd,prefiltration,unit_dimensions,expected_life,operating_temperature,inlet_outlet)
    VALUES
        ('Clairify 12', '12 GPM', '600 grams', '< 5 micron', '11 x 3 inches', '200k gallons/ 740k liters', '41-100 ℉', '1 inch'),
        ('Clairify 1', '1 GPM', '100 grams', '< 5 micron', '12 x 3 inches', '200k gallons/ 740k liters', '41-100 ℉', '3/8 inch'),
        ('Clairify Silver', '.5 GPM', '600 grams', '< 5 micron', '11 x 3 inches', '200k gallons/ 740k liters', '41-100 ℉', '1 inch');

    COMMIT;


  