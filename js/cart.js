function calcTotal() {
    const prices = document.querySelectorAll(".price");
    const qty = document.querySelectorAll(".qty");
    const sum = document.querySelectorAll('.total');
    let total = 0;

    for (let c = 0; c < prices.length; c++) {
        const subtotal = parseInt(prices[c].innerText) * qty[c].value;
        total += subtotal;
    }
    for (let c = 0; c < sum.length; c++) {
        sum[c].innerHTML = total;
    }
}