import 'vue-i18n'

declare module 'vue-i18n' {
	export interface DefineLocaleMessage {
		welcome: string
		hello: string
	}
}
