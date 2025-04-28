import { defineStore } from 'pinia'

import { ColumnService, type IColumnDto } from './api/column.service'
import { useAppStore } from '~/shared/stores/AppStore'

export const useTaskStore = defineStore('TaskStore', () => {
	const currentColumns = ref<IColumnDto[]>([])
	const appStore = useAppStore()

	const setCurrentColumns = (columns: IColumnDto[]) => {
		currentColumns.value = columns.map(column => ({
			...column,
			position: String(column.position)
		}))
	}

	const { fetch: getColumns } = useQuery({
		queryFn: () => ColumnService.getColumnsByBoardId(appStore.currentBoard!.id),
		onSuccess: data => {
			setCurrentColumns(data.data)
		},
		enabled: true
	})
	return {
		currentColumns,
		setCurrentColumns,
		getColumns
	}
})
