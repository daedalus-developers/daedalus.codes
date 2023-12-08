import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// Check if the user is logged in
	console.log('I was called from layout.servcer.ts');
	

  if ( !locals.DB.authStore.isValid && !locals.user ) {
    return {};
  }

	// console.log(locals.user);
	return {
		user: locals.user
	};
};
