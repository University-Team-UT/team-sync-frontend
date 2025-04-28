import { API } from '~/shared/api/config'

export interface IBoardDto {
	id: string
	title: string
	projectId: string
	createdAt: string
}
export const BoardService = {
	async getBoardsByProjectId(projectId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IBoardDto[]>(API.BOARD.GET_BOARDS(projectId))
	},
	async getColumnsByBoardId(boardId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get(API.BOARD.GET_BY_BOARD_ID(boardId))
	},
	async createBoard(projectId: string, title: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.BOARD.CREATE_BOARD(projectId), { title })
	},
	async deleteBoard(boardId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.BOARD.DELETE_BOARD(boardId))
	},
	async updateBoard(boardId: string, title: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.BOARD.UPDATE_BOARD(boardId), { title })
	}
}
