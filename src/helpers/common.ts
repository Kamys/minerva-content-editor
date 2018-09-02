/**
 * Extract text or HTML from eventClipboardEvent.
 */
export const extractText = (e: ClipboardEvent): string => {
	const types        = e.clipboardData.types;

	if (types.includes('text/html')) {
		return e.clipboardData.getData('text/html');
	}

	if (types.includes('text/plain')) {
		return e.clipboardData.getData('text/plain');
	}

	return '';
};