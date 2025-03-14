export default defineI18nLocale(() => ({
	welcome: 'Welcome',
	auth: {
		index: 'Login or Register with',
		providers: {
			yandex: 'Login with Yandex ID',
			vk: 'Login with VK',
			email: 'Continue with Email'
		},
		or: 'Or',
		inputs: {
			email: 'Enter your email'
		},
		buttons: {
			continue: 'Continue',
			help: 'Need help?'
		}
	},
	search: 'Search',
	invite: {
		index: 'Invite people',
		title: 'Invite people to your workspace',
		description:
			'Your teammates get a link to the project and will be able to work with you',
		link: 'The text to copy has not been generated yet',
		copy: 'Copy',

		tabs: {
			team: 'Team member',
			guest: 'Guests',
			content: {
				title: 'Invite link',
				tooltip:
					'Users who follow this link will be automatically attached to the workspace'
			}
		},

		footer: {
			mail: 'Mail...',
			role: 'Participant',
			more: 'Add more',
			cancel: 'Cancel',
			send: 'Invite people'
		}
	}
}))
