BEGIN;

    INSERT INTO distributor_list
        (region_name,company_name,phone_number,email_address,physical_address)
    VALUES
        ('North America', 'Life Source', '919-720-0000', 'Life@gmail.com', '1234 House Dr, Raleigh, NC'),
        ('Central America', 'Aqua Source', '236-21-532', 'Aqua@gmail.com', 'Edif Torre Cristal, Guatemala'),
        ('China', 'Clean Source', '123-1284-3105', 'Clean@gmail.com', '15hao Lou Wu Kuang DA Xia 1891'),
        ('India', 'Eureka Source', '02223443448', 'Eureka@gmail.com', 'S 402 Part 2,Greater Kailash');





    COMMIT;


    