# JSSteelTable
JS SteelTable - A responsive Jquery Table for multiple purposes

This is a fork of [raftopyannis/jsirontable](https://github.com/raftopyannis/jsirontable),
in order to remove draggable functionality not wanted, and to add the ability to have
a 2D table (ie with columns produced from the data).

This table provides a responsive JQuery table which includes:
- Column Sorting
- Fixed header
- Dynamic data
- Custom column view
- Column Rearrange

Examples of use are show in the example.html file.

Here's some simple examples of usage though:

```javascript
var options = {
    data: songs,
    fixedheader: true,
    scrollable: true,
    fitHeight: true,
    sortable: true,
    columns: [
        { title: "ID", datafield: "id", visible: false, width: "10%" },        
        { title: "Title", datafield: "title", width: "100px",datafields: [{key: "data-translate", value: "{{lang.main.title}}"}] },
        { title: "Is New", datafield: "isnew", width: "50%" },
        { title: "Duration", datafield: "duration" },
        { title: "Artist", datafield: "artist" },
        { title: "Bpm", datafield: "bpm" },        
        { title: "Path", datafield: "path", visible: false },
        { 
            title: "Actions", 
            datafield: "actions", 
            view: function ( data ) { 
                return '<a href="javascript:ClickActionBtn(\''+data.id+'\');" class="action_icon action_icon_edit"><i class="material-icons">edit</i></a>' 
            }
        },
    ]
};
$('.jssteeltable').JSSteelTable(options);

```

It also provides the following Event Listeners
- OnInitialized() - When the Table has finished loading
- OnError() - When an Error occurs
- OnReload() - When the table reloads
- OnSort() - Gets called after sorting has benn completed
- BeforeSort() - Gets called before sorting occurs

Example: 

```javascript
var options = {
    data: songs,
    fixedheader: true,
    scrollable: true,
    fitHeight: true,
    sortable: true,
    columns: [
        { title: "ID", datafield: "id", visible: false, width: "10%" },        
        { title: "Title", datafield: "title", width: "100px",datafields: [{key: "data-translate", value: "{{lang.main.title}}"}] },
        { title: "Is New", datafield: "isnew", width: "50%" },
        { title: "Duration", datafield: "duration" },
        { title: "Artist", datafield: "artist" },
        { title: "Bpm", datafield: "bpm" },        
        { title: "Path", datafield: "path", visible: false },
        { 
            title: "Actions", 
            datafield: "actions", 
            view: function ( data ) { 
                return '<a href="javascript:ClickActionBtn(\''+data.id+'\');" class="action_icon action_icon_edit"><i class="material-icons">edit</i></a>' 
            }
        },
    ],
    OnInitialized: function()
    {
        console.log("Initialized");
    },
    OnError: function(error)
    {
        console.log(error);
    }
};

var jssteeltable = $('.jssteeltable').JSSteelTable(options);

```

or declaring them in a later state

```javascript

jssteeltable.OnInitialized(function() {
});

jssteeltable.OnError(function(error) {
});

jssteeltable.OnReload(function() {
});

jssteeltable.OnSort(function() {
});

jssteeltable.BeforeSort(function() {
});

```

