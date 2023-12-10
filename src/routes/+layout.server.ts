export const load = async ({ locals }) => {
	if (!locals.DB.authStore.isValid && !locals.user) {
		return {};
	}

	return {
		user: locals.user
	};
};
