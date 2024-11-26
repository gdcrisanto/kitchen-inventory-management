'use server';
import { google } from 'googleapis';
import { config } from '@/config/config';

export const getSheetData = async () => {
	const {
		type,
		project_id,
		private_key_id,
		private_key,
		client_email,
		universe_domain,
	} = config;
	const glAuth = await google.auth.getClient({
		projectId: project_id,
		credentials: {
			type,
			project_id,
			private_key_id,
			private_key,
			client_email,
			universe_domain,
		},
		scopes: ['https://www.googleapis.com/auth/spreadsheets'],
	});

	const glSheets = google.sheets({ version: 'v4', auth: glAuth });

	const data = await glSheets.spreadsheets.values.get({
		spreadsheetId: '1E3WjYi3YY3AzLRMwVsxD7z3_mi9U8T2b8bQpV8WKGHY',
		range: 'A1',
	});

	return { data: data.data.values };
};
