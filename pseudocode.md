START
INPUT harga, quantity, member

    IF harga bukan angka finite
       OR harga <= 0
       OR quantity bukan bilangan bulat
       OR quantity <= 0
       OR member bukan boolean THEN
        OUTPUT "Input tidak valid"
        STOP
    ENDIF

    SET subtotal = harga * quantity
    IF member = TRUE THEN
        SET diskon = subtotal * 0.10
    ELSE
        SET diskon = 0
    ENDIF

    SET totalSetelahDiskon = subtotal - diskon
    IF totalSetelahDiskon >= 250000 THEN
        SET ongkir = 0
    ELSE
        SET ongkir = 15000
    ENDIF

    SET totalBayar = totalSetelahDiskon + ongkir
    OUTPUT totalBayar

END
