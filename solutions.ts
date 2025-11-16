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
const filterByRating = (items: Items): Items => {
	return items.filter((item) => item.rating >= 4.0);
};

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

const printBookDetails = (book: Book): void => {
	const { title, author, publishedYear, isAvailable } = book;
	console.log(
		`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
			isAvailable ? "Yes" : "No"
		}`,
	);
};
