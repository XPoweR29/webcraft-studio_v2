export const formatDatePL = (dateStr: string): string => {
	if(!dateStr) return "";

	return new Date(dateStr)
		.toLocaleDateString('pl-PL', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		})
		.replace('.', '');
};