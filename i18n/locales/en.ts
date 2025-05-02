export default defineI18nLocale(() => ({
	welcome: 'Welcome',
	roles: {
		admin: 'Admin',
		worker: 'Worker',
		visitor: 'Guest'
	},
	toaster: {
		success: 'The invitations have been sent out'
	},
	auth: {
		index: 'Login or Register with',
		providers: {
			yandex: 'Login with Yandex ID',
			vk: 'Login with VK',
			email: 'Continue with Email'
		},
		or: 'Or',
		inputs: {
			email: 'Enter your email',
			password: {
				enter: 'Enter password',
				repeat: 'Repeat password'
			}
		},
		buttons: {
			continue: 'Continue',
			help: 'Need help?'
		},
		alert: {
			title: 'Continue with Email',
			description: 'Create an account via email'
		},
		bottom: 'Or continue another way'
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
			mail: 'Mail...',
			role: 'Participant',
			more: 'Add more',
			content: {
				title: 'Invite link',
				tooltip:
					'Users who follow this link will be automatically attached to the workspace'
			}
		},

		footer: {
			cancel: 'Cancel',
			send: 'Invite people'
		}
	},
	avatar: {
		dropdown: {
			settings: 'Settings',
			logout: 'Log out',
			theme: 'Dark theme',
			help: 'Help Center',
			support: 'Technical support',
			suggestion: 'Suggestions',
			keys: 'Hot keys',
			partners: 'For partners'
		}
	}
}))
