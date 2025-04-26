export const API = {
	AUTH: {
		LOGIN: '/auth/login',
		REGISTER: '/auth/register',
		CHANGE_PASSWORD: '/auth/change-password'
	},
	ACCOUNT: {
		GET_ACCOUNT: '/account',
		UPDATE_ACCOUNT: '/account/update-account',
		DELETE_ACCOUNT: '/account/delete-account'
	},
	WORKBENCH: {
		GET_WORKBENCH: '/workbench',
		CREATE_WORKBENCH: '/workbench/create',
		UPDATE_WORKBENCH: '/workbench/update',
		DELETE_WORKBENCH: (id: string) => `/workbench/delete/${id}`
	},
	MEMBERS: {
		GET_MEMBERS: '/members',
		INVITE_USERS: (memberId: string) => `members/invite-users/${memberId}`,
		REMOVE_MEMBER: (id: string) => `/members/remove-member/${id}`,
		EDIT_MEMBER_ROLE: (id: string) => `/members/edit-member-role/${id}`,
		EXCLUDE_MEMBER: (id: string) => `/members/exclude-member/${id}`,
		GET_INVITE_INFO: (id: string) => `/members/get-invite-info/${id}`,
		ACCEPT_INVITE: (id: string) => `/members/accept-invite/${id}`
	},
	PROJECT: {
		GET_BY_WORKBENCH_ID: (id: string) => `/project/get-by-workbench-id/${id}`,
		CREATE_PROJECT: (id: string) => `/project/create-project/${id}`,
		UPDATE_PROJECT: (id: string) => `/project/update-project/${id}`,
		DELETE_PROJECT: (id: string) => `/project/delete-project/${id}`
	},
	BOARD: {
		GET_BOARDS: (projectId: string) => `/board/${projectId}`,
		GET_BY_BOARD_ID: (boardId: string) => `/board/get-by-board-id/${boardId}`,
		CREATE_BOARD: (projectId: string) => `/board/create/${projectId}`,
		UPDATE_BOARD: (boardId: string) => `/board/update/${boardId}`,
		DELETE_BOARD: (boardId: string) => `/board/delete/${boardId}`
	},
	COLUMNS: {
		GET_COLUMNS: (boardId: string) => `/columns/${boardId}`,
		GET_FILTERED: `/columns/get-filtered`,
		CREATE: (boardId: string) => `/columns/create/${boardId}`,
		UPDATE: (columnId: string) => `/columns/update/${columnId}`,
		DELETE: (columnId: string) => `/columns/delete/${columnId}`,
		CHANGE_POSITION: (columnId: string) =>
			`/columns/change-position/${columnId}`
	},
	TAGS: {
		GET_BY_WORKBENCH_ID: (workbenchId: string) =>
			`/tags/get-tags-by-workbench/${workbenchId}`,
		CREATE: (workbenchId: string) => `/tags/create-tag/${workbenchId}`,
		UPDATE: (tagId: string) => `/tags/update-tag/${tagId}`,
		DELETE: (tagId: string) => `/tags/delete-tag/${tagId}`,
		ASSIGN_TAG: (taskId: string, tagId: string) =>
			`/tags/assign-tag/${taskId}/${tagId}`,
		UNASSIGN_TAG: (taskId: string, tagId: string) =>
			`/tags/unassign-tag/${taskId}/${tagId}`
	},
	TASKS: {
		CREATE_TASK: '/task/create-task',
		SET_EXECUTOR: (taskId: string) => `/task/set-executor/${taskId}`,
		MOVE_POSITION: (taskId: string) => `/task/move-position/${taskId}`,
		SET_DEADLINE: (taskId: string) => `/task/set-deadline/${taskId}`,
		SET_PRIORITY: (taskId: string) => `/task/set-priority/${taskId}`,
		CHANGE_STATUS: (taskId: string) => `/task/change-status/${taskId}`,
		SET_TAG: (taskId: string) => `/task/set-tag/${taskId}`,
		REMOVE_TAG: (taskId: string) => `/task/remove-tag/${taskId}`,
		ADD_SUBTASK: '/task/add-subtask',
		UPDATE_SUBTASK: (subtaskId: string) => `/task/update-subtask/${subtaskId}`,
		REMOVE_SUBTASK: (subtaskId: string) => `/task/remove-subtask/${subtaskId}`,
		DELETE_TASK: (taskId: string) => `/task/delete-task/${taskId}`,
		GET_TASKS_BY_WORKBENCH_ID: (workbenchId: string) =>
			`get-tasks-by-workbench-id/${workbenchId}`,
		GET_TASKS_BY_EXECUTOR_ID: (workbenchId: string) =>
			`get-tasks-by-executor-id/${workbenchId}`
	},
	COMMENTS: {
		CREATE: (taskId: string) => `/comments/${taskId}`,
		SEND: (taskId: string, workbenchId: string) =>
			`/comments/send/${taskId}/${workbenchId}`,
		DELETE: (commentId: string, userId: string, workbenchId: string) =>
			`/comments/delete/${commentId}/${userId}/${workbenchId}`
	}
} as const
