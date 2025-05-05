import { tagsColors } from '~/modules/workspace/tags/lib/tagsColors'
import type { TagColor } from '~/modules/workspace/tags/types'

export const getTagColorByPrimary = (primaryColor: string): TagColor => {
	return tagsColors.find(color => color.primary === primaryColor) as TagColor
}
export const generateTagColor = (): TagColor => {
	return tagsColors[Math.floor(Math.random() * tagsColors.length)]
}
