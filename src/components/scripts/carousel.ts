import Glide from '@glidejs/glide'

export function initCarousel(selector: string) {
	const glide = new Glide(selector, {
		type: 'carousel',
		focusAt: 'center',
		perView: 4,
		autoplay: 3500,
		animationDuration: 700,
		gap: 20,
		classes: {
			activeNav: '[&>*]:bg-slate-700'
		},
		breakpoints: {
			1024: { perView: 4 },
			640: { perView: 2 }
		}
	} as any)

	glide.mount()
}
