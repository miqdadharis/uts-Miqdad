function hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
        return 10;
    } else if (subtotal >= 50000) {
        return 5;
    } else {
        return 0;
    }
}