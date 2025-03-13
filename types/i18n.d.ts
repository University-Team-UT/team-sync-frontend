import 'vue-i18n';





declare module 'vue-i18n' {
	export interface DefineLocaleMessage {
		welcome: string
		hello: string
		search: string
		invite: {
			index: string
			title: string
			description: string
			tabs: {
				team: string
				guest: string
				content: {
					title: string
					tooltip: string
				}
			}
		}
	}
}