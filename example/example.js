

// Using Example Data

var options = {    
    data: songs,
    nodatatext: "No Entries here",
    nodata_datafields: [{key: "data-translate", value: "{{lang.main.title}}"}],
    debug: true, // Done
    maxHeight: 300, // Done
    fixedheader: true,
    scrollable: true, // Done
    fitHeight: true,
    sortable: true, // Done
    headerfontsize: "12pt", // Done
    cellfontsize: "12pt", // Done
    columns: [
        { title: "ID", datafield: "id", visible: true, width: "10%" },        
        { title: "Title", datafield: "title", width: "100px", datafields: [{key: "data-translate", value: "{{lang.main.title}}"}] },
        { title: "Is New", datafield: "isnew", width: "10%" },
        { title: "Duration", datafield: "duration" },
        { title: "Artist", datafield: "artist" },
        { title: "Bpm", datafield: "bpm" },        
        { title: "Test", datafield: "test" },        
        { title: "Path", datafield: "path", visible: false },
        { 
            title: "Actions", 
            datafield: "actions", 
            view: function ( data ) { 
                return '<a href="javascript:ClickActionBtn(\''+data.id+'\');" class="action_icon action_icon_edit"><i class="material-icons">delete_forever</i></a>' 
            }
        },
    ]
};

var jssteeltable = $('.jssteeltable').JSIronTable(options);
jssteeltable.OnInitialized(function()
{
    
});

jssteeltable.OnError(function(error)
{
    
});

jssteeltable.OnReload(function()
{
    
});

jssteeltable.OnSort(function()
{
    
});

jssteeltable.BeforeSort(function()
{
    
});

//console.log(jssteeltable.GetRows());


/*
var SECOND_jssteeltable = $('.second_jssteeltable').JSIronTable(options);
SECOND_jssteeltable.OnInitialized(function()
{
    
});*/


setTimeout(function()
{
    /* SECOND_jssteeltable.options.data = [];
    SECOND_jssteeltable.Reload(); */
    //jssteeltable.Reload();
    console.log("Reload");
}, 3000);


//console.log($('.jssteeltable').JSIronTable());

function ClickActionBtn(data)
{    
    var row = jssteeltable.GetRow(function(e)
    {    
        var found = null;
        if(e.data.id === data)
        {
            found = e;
        }
        return found;
    });

    $(row.element).css({"background-color": "yellow"});
    $(row.element).addClass("disabled");

    jssteeltable.RemoveRow(row);
}