import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Circle,
  CircleCheckBigIcon,
  CircleOffIcon,
  CircleQuestionMarkIcon,
  TimerIcon,
} from "lucide-react";
import type { TaskPriority, TaskStatus } from "./task.model";
import type { JSX } from "react";

export const TASK_STATUS_LABEL = {
  TODO: "Todo",
  IN_PROGRESS: "In Progress",
  BACKLOG: "Backlog",
  CANCELED: "Canceled",
  DONE: "Done",
} satisfies Record<TaskStatus, string>;

export const TASK_STATUS_ICON = {
  TODO: <Circle className="text-gray-500" size={16} />,
  IN_PROGRESS: <TimerIcon className="text-gray-500" size={16} />,
  BACKLOG: <CircleQuestionMarkIcon className="text-gray-500" size={16} />,
  DONE: <CircleCheckBigIcon className="text-gray-500" size={16} />,
  CANCELED: <CircleOffIcon className="text-gray-500" size={16} />,
} satisfies Record<TaskStatus, JSX.Element>;

export const TASK_PRIORITY_LABEL = {
  MEDIUM: "Medium",
  HIGH: "High",
  LOW: "Low",
} satisfies Record<TaskPriority, string>;

export const TASK_PRIORITY_ICON = {
  MEDIUM: <ArrowRight className="text-gray-500" size={16} />,
  HIGH: <ArrowUp className="text-gray-500" size={16} />,
  LOW: <ArrowDown className="text-gray-500" size={16} />,
} satisfies Record<TaskPriority, JSX.Element>;
