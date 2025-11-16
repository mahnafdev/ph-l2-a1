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

type TItems = Array<{ title: string; rating: number }>;
const filterByRating = (items: TItems): TItems => {
	return items.filter((item) => item.rating >= 4.0);
};

type TUsers = Array<{ id: number; name: string; email: string; isActive: boolean }>;
const filterActiveUsers = (users: TUsers): TUsers => {
	return users.filter((user) => user.isActive);
};
