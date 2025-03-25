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
		invite: {
			index: string
			title: string
			description: string
			link: string
			copy: string
			tabs: {
				team: string
				guest: string
				tooltip: string
				mail: string
				role: string
				more: string
			}
			footer: {
				cancel: string
				send: string
			}
		}
	}
}
