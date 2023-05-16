import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getTokens } from '$lib/auth/services';

export const GET: RequestHandler = async (event) => {
	const redirectTo = await getTokens(event);
	throw redirect(302, redirectTo);
};
