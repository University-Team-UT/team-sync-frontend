import type { ITask } from '../lib/types'

import { API } from '~/shared/api/config'

export interface IColumnDto {
	id: string
	title: string
	color: string
	position: number | string
	boardId: string
	tasks: ITask[]
}

export interface IFilterDto {}
export const ColumnService = {
	async getColumnsByBoardId(boardId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IColumnDto[]>(API.COLUMNS.GET_COLUMNS(boardId))
	},
	async getFilteredByBoardId(dto: IFilterDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IColumnDto[]>(API.COLUMNS.GET_FILTERED, {
			params: { dto }
		})
	},

	async createColumn(boardId: string, title: string, color: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.COLUMNS.CREATE(boardId), { title, color })
	},
	async deleteColumn(columnId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.COLUMNS.DELETE(columnId))
	},
	async updateColumn(columnId: string, title: string, color: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.COLUMNS.UPDATE(columnId), { title, color })
	},
	async updatePosition(columnId: string, newPosition: number) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.COLUMNS.CHANGE_POSITION(columnId), {
			newPosition
		})
	}
}
