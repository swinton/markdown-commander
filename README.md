# Markdown Commander

Commands for authoring Markdown, inspired by [iA Writer](https://ia.net/writer).

## Installation

```
apm install markdown-commander
```

## Demo

![markdown-commander](https://cloud.githubusercontent.com/assets/27806/21559598/cf3393b2-ce14-11e6-9380-ae747fbe8327.gif)

## Commands

### `markdown-commander:list`

Toggle Markdown unordered list against selections.

### `markdown-commander:task-list`

Toggle Markdown task list against selections.

### `markdown-commander:ordered-list`

Toggle Markdown ordered list against selections.

### `markdown-commander:ordered-task-list`

Toggle Markdown ordered task list against selections.

## Suggested keymap

For an authentic iA Writer experience, consider adding the following to your `keymap.cson`:

```cson
'atom-text-editor':
  'cmd-l': 'markdown-commander:list'
  'alt-cmd-l': 'markdown-commander:task-list'
  'shift-cmd-l': 'markdown-commander:ordered-list'
  'shift-alt-cmd-l': 'markdown-commander:ordered-task-list'
```
