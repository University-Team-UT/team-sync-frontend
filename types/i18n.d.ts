import 'vue-i18n'

declare module 'vue-i18n' {
	export interface DefineLocaleMessage {
		welcome: string
		hello: string
		search: string
		invite: {
			index: string
			title: string
			description: string
			link: string
			copy: string

			tabs: {
				team: string
				guest: string
				content: {
					title: string
					tooltip: string
				}
			}
			footer: {
				mail: string
				role: string
				more: string
				cancel:string
				send: string
			}
		}
	}
}
