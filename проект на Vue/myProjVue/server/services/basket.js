function _search(arr, id) {
    return arr.find(item => item.id == id);
}

module.exports = {
    add(basket, item) {
        basket.contents.push(item);
        basket.amount += item.price;
        return basket;
    },
    change(basket, id, quantity) {
        let find = _search(basket.contents, id);
        if (quantity == 1) {
            find.quantity += quantity;
            basket.amount += find.price;
        } else if (quantity == -1) {
            find.quantity += quantity;
            basket.amount -= find.price;
        }
        return basket;
    },
    delete(basket, id) {
        let find = _search(basket.contents, id);
        basket.contents.splice(basket.contents.indexOf(find), 1);
        basket.amount -= find.price;
        return basket;
    }
}