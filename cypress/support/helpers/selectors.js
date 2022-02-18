const selector = {
	querySelectorBuilder: (selector) => {
		return `[data-testid=${selector}]`;
	}
};

module.exports = selector;
