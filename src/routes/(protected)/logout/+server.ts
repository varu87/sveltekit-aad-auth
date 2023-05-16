import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getLogoutUri } from '$lib/auth/services';

export const GET: RequestHandler = async ({ cookies }) => {
	cookies.delete('accessToken');
	cookies.delete('idToken');
	cookies.delete('account');

	throw redirect(302, getLogoutUri());
};
