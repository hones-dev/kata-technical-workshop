
function calculateTax(productType, price, country) {
    let tax = 0;

    if (country === 'US') {
        if (productType === 'food') {
            tax = 0;
        } else if (productType === 'electronics') {
            tax = price * 0.07;
        } else if (productType === 'clothing') {
            if (price > 100) {
                tax = price * 0.05;
            } else {
                tax = price * 0.08;
            }
        } else {
            tax = price * 0.06;
        }
    } else if (country === 'UK') {
        if (productType === 'food') {
            tax = price * 0.05;
        } else if (productType === 'electronics' || productType === 'clothing') {
            tax = price * 0.2;
        } else {
            tax = price * 0.15;
        }
    } else {
        tax = price * 0.1;
    }

    return tax;
}

module.exports = {
    calculateTax
};
