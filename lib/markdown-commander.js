'use babel';

import {
    CompositeDisposable
} from 'atom';

export default {

    subscriptions: null,

    activate(state) {
        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register markdown-commander commands
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'markdown-commander:list': () => this.unorderedList(),
            'markdown-commander:unordered-list': () => this.unorderedList(),
            'markdown-commander:task-list': () => this.unorderedTaskList(),
            'markdown-commander:unordered-task-list': () => this.unorderedTaskList(),
            'markdown-commander:ordered-list': () => this.orderedList(),
            'markdown-commander:ordered-task-list': () => this.orderedTaskList()
        }));
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    serialize() {
        return {};
    },

    generateList(prefix) {
        var editor = atom.workspace.getActiveTextEditor(),
            selections = editor.getSelections();

        selections.forEach(function(selection) {
            var text = selection.getText(),
                range = selection.getBufferRange(),
                startRow = range.start.row,
                endRow = range.end.row,
                startCol = 0,
                endCol,
                currentRowPrefix,
                targetRowPrefix;

            while (startRow <= endRow) {
                currentRowPrefix = editor.getTextInBufferRange(
                    [
                        [startRow, 0],
                        [startRow, prefix.length]
                    ]
                );

                if (currentRowPrefix === prefix) {
                    targetRowPrefix = "";
                    endCol = prefix.length;
                } else {
                    targetRowPrefix = prefix;
                    endCol = 0;
                }

                editor.setTextInBufferRange(
                    [
                        [startRow, startCol],
                        [startRow, endCol]
                    ],
                    targetRowPrefix
                );

                startRow += 1;
            }
        });
    },

    unorderedList() {
        console.log("unordered list");

        this.generateList("- ");
    },

    unorderedTaskList() {
        console.log("unordered task list");

        this.generateList("- [ ] ");
    },

    orderedList() {
        console.log("ordered list");

        this.generateList("1. ");
    },

    orderedTaskList() {
        console.log("ordered task list");

        this.generateList("1. [ ] ");
    }

};
