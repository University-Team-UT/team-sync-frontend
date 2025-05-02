import 'vue-i18n'

declare module 'vue-i18n' {
	export interface DefineLocaleMessage {
		welcome: string
		hello: string
		toaster: {
			success: string
		}
		roles: {
			admin: string
			worker: string
			visitor: string
		}
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
				password: {
					enter: string
					repeat: string
				}
			}
			buttons: {
				continue: string
				help: string
			}
			alert: {
				title: string
				description: string
			}
			bottom: string
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
		avatar: {
			dropdown: {
				settings: string
				logout: string
				theme: string
				help: string
				support: string
				suggestion: string
				keys: string
				partners: string
			}
		}
	}
}
