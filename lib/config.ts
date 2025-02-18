const config = {
	env: {
		apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
		imagekit: {
			publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_URL_PUBLIC_KEY,
			url: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
			privateKey: process.env.IMAGEKIT_URL_PRIVATE_KEY,
		},
	},
}

export default config
