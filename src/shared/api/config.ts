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
		GET_INVITER_LINK: (workbenchId: string) => `/members/${workbenchId}`,
		GET_MEMBERS: (workbenchId: string) => `/members/get-members/${workbenchId}`,
		INVITE_USERS: (memberId: string) => `members/invite-users/${memberId}`,
		REMOVE_MEMBER: (id: string) => `/members/remove-member/${id}`,
		EDIT_MEMBER_ROLE: (id: string) => `/members/edit-member-role/${id}`,
		EXCLUDE_MEMBER: (id: string) => `/members/exclude-member/${id}`,
		GET_INVITE_INFO: (id: string) => `/members/get-invite-info/${id}`,
		ACCEPT_INVITE: (id: string) => `/members/accept-invite/${id}`
	},
	PROJECT: {
		GET_BY_WORKBENCH_ID: (id: string) => `/projects/get-by-workbench-id/${id}`,
		CREATE_PROJECT: (id: string) => `/projects/create/${id}`,
		UPDATE_PROJECT: (id: string) => `/projects/update/${id}`,
		DELETE_PROJECT: (id: string) => `/projects/delete/${id}`
	},
	BOARD: {
		GET_BOARDS: (projectId: string) => `/boards/${projectId}`,
		GET_BY_BOARD_ID: (boardId: string) => `/boards/get-by-board-id/${boardId}`,
		CREATE_BOARD: (projectId: string) => `/boards/create/${projectId}`,
		UPDATE_BOARD: (boardId: string) => `/boards/update/${boardId}`,
		DELETE_BOARD: (boardId: string) => `/boards/delete/${boardId}`
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
			`get-tasks-by-executor-id/${workbenchId}`,
		TOGGLE_SUBTASK: (subtaskId: string) => `/task/toggle-subtask/${subtaskId}`,
		UPDATE_TASK: (taskId: string) => `/task/update-task/${taskId}`,
		GET_BY_WORKBENCH_ID: (workbenchId: string) =>
			`/task/get-by-workbenchId/${workbenchId}`,
		GET_BY_EXECUTOR_ID: (executorId: string) =>
			`/task/get-by-executorId/${executorId}`
	},
	COMMENTS: {
		GET: (taskId: string) => `/comments/${taskId}`,
		SEND: (taskId: string, workbenchId: string) =>
			`/comments/send/${taskId}/${workbenchId}`,
		DELETE: (commentId: string, userId: string, workbenchId: string) =>
			`/comments/delete/${commentId}/${userId}/${workbenchId}`
	},
	NOTIFICATIONS: {
		GET_NOTIFICATIONS: `/notifications`,
		MARK_AS_READ: (notificationId: string) =>
			`/notifications/${notificationId}/read`,
		ARCHIVE: (notificationId: string) =>
			`/notifications/${notificationId}/archive`
	},
	FILES: {
		UPLOAD: '/files/upload',
		DOWNLOAD: (fileId: string) => `/files/download/${fileId}`,
		DELETE: (fileId: string) => `/files/delete/${fileId}`
	}
} as const
