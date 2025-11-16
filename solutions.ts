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
