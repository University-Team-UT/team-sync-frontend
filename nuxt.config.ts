import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	srcDir: 'app',
	vite: {
		plugins: [tailwindcss()]
	},

	ui: {
		theme: {
			colors: [
				'primary',
				'root',
				'alt',
				'secondary',
				'info',
				'success',
				'warning',
				'error'
			]
		}
	},

	components: [
		{ path: '~/shared/components', prefix: '' },
		{
			path: '~/modules',
			pattern: '*/components/**/*.vue',
			pathPrefix: false
		}
	],
	imports: {
		dirs: [
			'composables',
			'modules/**/composables',
			'shared/composables',
			'shared/utils'
		]
	},
	i18n: {
		vueI18n: 'i18n.config.ts',
		lazy: true,
		strategy: 'prefix',
		langDir: 'locales/',
		defaultLocale: 'ru',
		locales: [
			{
				code: 'ru',
				iso: 'ru-RU',
				name: 'Русский',
				file: 'ru.ts'
			},
			{
				code: 'en',
				iso: 'en-US',
				name: 'English',
				file: 'en.ts'
			}
		]
	},

	css: ['~/assets/css/main.css'],

	modules: [
		'@nuxt/eslint',
		'@nuxt/image',
		'@nuxt/fonts',
		'@pinia/nuxt',
		'@nuxtjs/i18n',
		'@vueuse/nuxt',
		'@nuxt/ui'
	],
	fonts: {
		families: [
			{
				name: 'Manrope',
				provider: 'google'
			}
		],

		defaults: {
			weights: [400, 500, 600, 700, 800, 300, 200],
			styles: ['normal', 'italic'],
			subsets: [
				'cyrillic-ext',
				'cyrillic',
				'greek-ext',
				'greek',
				'vietnamese',
				'latin-ext',
				'latin'
			]
		}
	},
	appConfig: {
		ui: {
			button: {
				slots: {
					base: 'cursor-pointer rounded-xl'
				}
			},
			colors: {
				primary: 'blue',
				neutral: 'zinc',
				root: 'var(--ui-root-950)',
				alt: 'var(--ui-root-900)'
			}
		}
	}
})
