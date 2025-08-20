// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Champion Maid Service',
		aboutText:
			'Champion Maid Service is a locally owned cleaning company serving Western New York. We take pride in delivering reliable, friendly, and professional cleaning services that make your home sparkle and your life a little easier.',
		logo: {
			src: `${import.meta.env.BASE_URL}logo.svg`,
			alt: 'The tailwind astro theme',
			text: 'Champion Maid Service'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: `${import.meta.env.BASE_URL}features`
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: `${import.meta.env.BASE_URL}faq`
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: `${import.meta.env.BASE_URL}pricing`
				}
				/*{
					subCategory: 'Changelog',
					subCategoryLink: `${import.meta.env.BASE_URL}changelog`
				},
				{
					subCategory: 'Terms',
					subCategoryLink: `${import.meta.env.BASE_URL}terms`
				}*/
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: `${import.meta.env.BASE_URL}about`
				}
				/*{
					subCategory: 'News',
					subCategoryLink: `${import.meta.env.BASE_URL}blog`
				},
				{
					subCategory: 'Careers',
					subCategoryLink: `${import.meta.env.BASE_URL}blog`
				}*/
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: `${import.meta.env.BASE_URL}contact`
				},
				{
					subCategory: 'Support',
					subCategoryLink: `${import.meta.env.BASE_URL}contact`
				},
				{
					subCategory: 'Join us',
					subCategoryLink: `${import.meta.env.BASE_URL}contact`
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Champion Maid Service 20XX.'
	}
}
