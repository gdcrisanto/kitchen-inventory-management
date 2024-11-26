const {
	TYPE,
	PROJECT_ID,
	PRIVATE_KEY_ID,
	PRIVATE_KEY,
	CLIENT_EMAIL,
	CLIENT_ID,
	AUTH_URI,
	TOKEN_URI,
	AUTH_PROVIDER_X509_CERT_URL,
	CLIENT_X509_CERT_URL,
	UNIVERSE_DOMAIN,
} = process.env;

export const config = {
	type: TYPE,
	project_id: PROJECT_ID,
	private_key_id: PRIVATE_KEY_ID,
	private_key: PRIVATE_KEY,
	client_email: CLIENT_EMAIL,
	clientId: CLIENT_ID,
	authUri: AUTH_URI,
	tokenUri: TOKEN_URI,
	authProviderX509CertUrl: AUTH_PROVIDER_X509_CERT_URL,
	clientX509CertUrl: CLIENT_X509_CERT_URL,
	universe_domain: UNIVERSE_DOMAIN,
};
