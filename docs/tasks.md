---
id: tasks
title: Tasks
---
This page lists all tasks in the wiki.

# jME3 Doku Tasks

![tasks\_jme3\_noform](tasks_jme3_noform)

# SDK Doku Tasks

![tasks\_sdk\_noform](tasks_sdk_noform)

## Creating Tasks

Place `~~TASK~~` on any page to mark it as a task. The title (first
heading) is considered to be the summary of the task, the contents its
description. Use Alt-N on mac to create a \~ character.

## Full usage description

    ~~TASK:[user]?[due date][priority]~~

| \[user\] | person responsible for this task – either user or full name                                                             | optional; default is unassigned       |
| -------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
|          | date the task should be completed in YYYY-MM-DD form; if only year or year and month are given, the last day is assumed | optional; default is without due date |
|          | low, medium `!`, high `!!` or critical `!!!` expressed with 0 to 3 exclamation marks                                    | optional; default is low priority     |

If a task is unassigned, any registered user of the wiki can accept it.
Once a task is taken, the user to whom it is assigned to can change the
status of the task to one of these values:

  - rejected – task is not worthwhile or not accepted by user

  - new – reassign task so somebody else can take it

  - accepted – user took over task but did not yet start the work

  - started – work on task started

  - done – work on task completed

If the task is done, other users can verify whether it’s really done. If
yes, the status can be set to verified.

The priority is reflected by the intensity of the orange shade of the
task box.

Next to the title of the task box is an icon. It links to download an
.ics file for the task. That can be imported by almost any calendar
application that understands the VTODO component of the iCalendar
standard.
