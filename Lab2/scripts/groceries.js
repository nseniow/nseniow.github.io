
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Yogurt",
		lactose: false,
		nutFree: true,
		price: 1.99,
		organic: false
	},
	{
		name: "Almond Granola",
		lactose: true,
		nutFree: false,
		price: 2.35,
		organic: true
	},
	{
		name: "Salmon",
		lactose: true,
		nutFree: true,
		price: 10.00,
		organic: true
	},
	{
		name: "French Fries",
		lactose: true,
		nutFree: true,
		price: 3.99,
		organic: false
	},
	{
		name: "Vanilla Ice Cream",
		lactose: false,
		nutFree: true,
		price: 6.99,
		organic: true
	},
	{
		name: "Almond Ice Cream",
		lactose: false,
		nutFree: false,
		price: 6.99,
		organic: false
	},
	{
		name: "Milk",
		lactose: false,
		nutFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "Bread",
		lactose: true,
		nutFree: true,
		price: 1.49,
		organic: true
	},
	{
		name: "Eggs",
		lactose: true,
		nutFree: true,
		price: 2.99,
		organic: true
	},
	{
		name: "Peanut Butter",
		lactose: true,
		nutFree: false,
		price: 6.99,
		organic: false
	}

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lactose, nut, organic) {
	let product_names = [];

	prods.sort(function(a, b){
			return a.price - b.price;
	})

	for (let i=0; i<prods.length; i+=1) {
		if (lactose && !prods[i].lactose) continue;
		if (nut && !prods[i].nutFree) continue;
		if (organic && !prods[i].organic) continue;
		product_names.push((prods[i].organic ? 'Organic ' : '') + prods[i].name + " - $" + prods[i].price);
	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	console.log(chosenProducts[1]);
	for (let i=0; i<products.length; i+=1) {
		for (let j=0; j<chosenProducts.length; j+=1){
			if (chosenProducts[j].includes(products[i].name)){
					totalPrice += products[i].price;
			}
		}
	}
	return totalPrice;
}
