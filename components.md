# Data

## Data layer

- To do list
  - id
  - task name
  - isDone

## Data modification

- Load to do list
- Add new task
- Toggle task isDone
- Delete task

# Components

## App

- Show layout component

## Layout

- Show list "To Do List" title with heading
- Show task list component
- Show form component

## Task list

- Receives list of tasks
- Show a task component list

## Task card

- Receives toggle task isDone action
- Receives delete task action
- Receives a new task

- Shows a task name inside a span
- Show button component to toggle the isDone task
- Show button component to delete task
- Send "❌" to button component undone the task
- Send "✅" to button component that the task isDone
- Send "🗑️" to button component to delete task
- Sends toggle task isDone action to button component that shows isDone task
- Sends delete task action to button component that delete task

## Button

- Receives an icon
- Receives an action
- Show received icon inside a button
- On click executes the receiveds action

## Form

- Receives the add task action
- Shows and input for the new task with label "create task"
- Show a button "Create" to submit the form
- On submit executes the received add task action
