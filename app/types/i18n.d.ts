import 'vue-i18n'

declare module 'vue-i18n' {
	export interface DefineLocaleMessage {
		welcome: string
		hello: string
		auth: {
			index: string
			providers: {
				yandex: string
				vk: string
				email: string
			}
			or: string
			inputs: {
				email: string
			}
			buttons: {
				continue: string
				help: string
			}
		}
	}
}
