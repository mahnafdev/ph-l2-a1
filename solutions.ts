const formatValue = (
	value: string | number | boolean,
): string | number | boolean | undefined => {
	if (typeof value === "string") return value.toUpperCase();
	else if (typeof value === "number") return value * 10;
	else if (typeof value === "boolean") return !value;
};

const getLength = <T>(iterable: T): number | undefined => {
	if (typeof iterable === "string") return iterable.length;
	else if (Array.isArray(iterable)) return iterable.length;
};

class Person {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	getDetails() {
		return `'Name: ${this.name}, Age: ${this.age}'`;
	}
}

type Items = Array<{ title: string; rating: number }>;
const filterByRating = (items: Items): Items | undefined => {
	if (items.every((item) => item.rating >= 0.0 && item.rating <= 5.0))
		return items.filter((item) => item.rating >= 4.0);
};
const products: Items = [
	{ title: "Pen", rating: 4.4 },
	{ title: "Notebook", rating: 5 },
	{ title: "Bag", rating: 3.5 },
];

type Users = Array<{ id: number; name: string; email: string; isActive: boolean }>;
const filterActiveUsers = (users: Users): Users => {
	return users.filter((user) => user.isActive);
};

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
	const { title, author, publishedYear, isAvailable } = book;
	return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
		isAvailable ? "Yes" : "No"
	}`;
};

type TArray = Array<string | number>;
const getUniqueValues = (arrA: TArray, arrB: TArray): TArray => {
	const uniqueArr: TArray = [];
	let uniqueArrIdx = 0;
	for (let i = 0; i < arrA.length; i++) {
		let isUnique = true;
		for (let j = 0; j < uniqueArr.length; j++) {
			if (arrA[i] === uniqueArr[j]) {
				isUnique = false;
				break;
			}
		}
		if (isUnique) {
			uniqueArr[uniqueArrIdx] = arrA[i]!;
			uniqueArrIdx++;
		}
	}
	for (let i = 0; i < arrB.length; i++) {
		let isUnique = true;
		for (let j = 0; j < uniqueArr.length; j++) {
			if (arrB[i] === uniqueArr[j]) {
				isUnique = false;
				break;
			}
		}
		if (isUnique) {
			uniqueArr[uniqueArrIdx] = arrB[i]!;
			uniqueArrIdx++;
		}
	}
	return uniqueArr;
};

type Products = Array<{ name: string; price: number; quantity: number; discount?: number }>;
const calculateTotalPrice = (products: Products): number => {
	const totalPrice = products.reduce((totalPrice, product) => {
		const { price, quantity, discount } = product;
		const summedPrice = price * quantity;
		const discountedPrice = discount
			? summedPrice - (summedPrice * discount) / 100
			: summedPrice;
		return totalPrice + discountedPrice;
	}, 0);
	return totalPrice;
};
