// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle:
		'Champion Cleaning WNY. Local company dedicated to providing dependable residential and commerical cleaning services.',
	siteDescription:
		'Champion Cleaning WNY is a new local cleaning solution in Western New York offering services from deep cleaning to standard cleans for commercial operations.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Champion Cleaning WNY logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
