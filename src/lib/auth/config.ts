import { CLIENT_ID, CLOUD_INSTANCE, TENANT_ID, CLIENT_SECRET } from '$env/static/private';

export const msalConfig = {
	auth: {
		clientId: CLIENT_ID,
		authority: CLOUD_INSTANCE + TENANT_ID,
		clientSecret: CLIENT_SECRET
	}
};
