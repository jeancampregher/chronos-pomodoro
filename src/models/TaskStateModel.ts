import type { TaskModel } from './TaskModels';

export type TaskStateModel = {
  tasks: TaskModel[]; //history
  secondsRemaining: number; //CountDown, History, MainForm, Buttons
  formattedSecondsRemaining: string; //Title, CountDown
  activeTask: TaskModel | null; //CountDown, History, MainForm, Buttons
  currentCycle: number; //Home cycles 1 a 8
  config: {
    workTime: number; //MainForm
    shortBreakTime: number; //MainForm
    longBreakTime: number; //MainForm
  };
};
