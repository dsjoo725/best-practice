export const TASK_STATUS = ["TODO", "IN_PROGRESS", "BACKLOG", "CANCELED", "DONE"] as const;
export type TaskStatus = (typeof TASK_STATUS)[number];

export const TASK_PRIORITY = ["HIGH", "MEDIUM", "LOW"] as const;
export type TaskPriority = (typeof TASK_PRIORITY)[number];

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
};
