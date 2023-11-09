export async function customFetch(url: string, options: RequestInit = {}) {
	const headers = {
		'X-RapidAPI-Key': '569090e6bbmsh0cf6f220209002ap167d5cjsn2fe295c2b18a',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}

	const response = await fetch(`https://moviesdatabase.p.rapidapi.com${url}`, {
		...options,
		headers: {
			...options.headers,
			...headers
		}
	})

	if (!response.ok) {
		throw new Error(`Request failed with status: ${response.status}`)
	}

	return response.json()
}
