export function isValidInput(value: string | undefined): boolean {
	if (typeof value == "undefined") return false;
	value = (value as string).trim();
	value = value.toLowerCase();
	return value.length > 0;
}
