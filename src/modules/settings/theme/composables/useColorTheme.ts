import { colorThemes } from '../lib/colorThemes'

export const useColorTheme = () => {
	const colorMode = useColorMode()
	const { ui } = useAppConfig()
	const currentTheme = computed(() =>
		colorThemes.find(theme => theme.color === ui.colors.primary)
	)

	const setTheme = (color: string) => {
		ui.colors.primary = color
		localStorage.setItem('colorMode', color)
	}

	const isDark = computed({
		get() {
			return colorMode.value === 'dark'
		},
		set(_isDark) {
			colorMode.preference = _isDark ? 'dark' : 'light'
		}
	})
	return {
		isDark,
		colorMode,
		setTheme,
		currentTheme
	}
}
