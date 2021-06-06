
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Yogurt",
		lactose: false,
		nutFree: true,
		price: 1.99,
		organic: false,
		image: '/images/yogurt.jpg'
	},
	{
		name: "Organic Almond Granola",
		lactose: true,
		nutFree: false,
		price: 2.35,
		organic: true,
		image: '/images/almondgranola.jpg'
	},
	{
		name: "Organic Salmon",
		lactose: true,
		nutFree: true,
		price: 10.00,
		organic: true,
		image: '/images/salmon.jpg'
	},
	{
		name: "French Fries",
		lactose: true,
		nutFree: true,
		price: 3.99,
		organic: false,
		image: '/images/frenchfries.jpg'
	},
	{
		name: "Organic Vanilla Ice Cream",
		lactose: false,
		nutFree: true,
		price: 6.99,
		organic: true,
		image: '/images/vanillaicecream.jpg'
	},
	{
		name: "Almond Ice Cream",
		lactose: false,
		nutFree: false,
		price: 6.99,
		organic: false,
		image: '/images/almondicecream.jpg'
	},
	{
		name: "Organic Milk",
		lactose: false,
		nutFree: true,
		price: 1.99,
		organic: true,
		image: '/images/milk.jpg'
	},
	{
		name: "Organic Bread",
		lactose: true,
		nutFree: true,
		price: 1.49,
		organic: true,
		image: '/images/bread.jpg'
	},
	{
		name: "Organic Eggs",
		lactose: true,
		nutFree: true,
		price: 2.99,
		organic: true,
		image: '/images/eggs.jpg'
	},
	{
		name: "Peanut Butter",
		lactose: true,
		nutFree: false,
		price: 6.99,
		organic: false,
		image: '/images/peanutbutter.jpg'
	}

];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, lactose, nut, organic) {
	let products = [];

	prods.sort(function(a, b){
			return a.price - b.price;
	})

	for (let i=0; i<prods.length; i+=1) {
		if (lactose && !prods[i].lactose) continue;
		if (nut && !prods[i].nutFree) continue;
		if (organic && !prods[i].organic) continue;
		products.push(prods[i]);

	}
	return products;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=1) {
		totalPrice+=chosenProducts[i].price;
	}
	return totalPrice;
}
