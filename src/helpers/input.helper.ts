export function isValidInput(value: string | undefined): boolean {
	if (typeof value == "undefined") return false;
	value = (value).trim();
	value = value.toLowerCase();
	return value.length > 0;
}
