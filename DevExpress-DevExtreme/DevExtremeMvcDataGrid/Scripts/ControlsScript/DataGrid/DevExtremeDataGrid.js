$(() =>
{
    //Get selected row id.
    var selectedRows = 0;

    //Record lock, UnLock, Read-only Row CSS class.
    var signalRLockRowColor = 'lockedRowColor';
    var signalRUnLockRowColor = 'unlockRowColor';
    var readonlyRowColor = 'readonlyRowColor';

    //Data URL
    const url = $('#hfBaseUrl').val() + 'api/DataGridWebApi';
    //var varColModel = $("#hfColModel").val();
    //var strColumnNames = JSON.parse(varColModel);

    //UpdateJSONObjectOfColModel(strColumnNames);

    //Context menu click event.
    function onContextMenuClick()
    {
        if (selectedRows)
        {
            alert("Selected RowData: " + JSON.stringify(selectedRows[0]));
            return;
        }
    }


    //Context Menu Items
    const contextMenuItems = [
        {
            text: 'Assign/UnAssign',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',
            items: [
                {
                    text: 'Assign/UnAssign A to B',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                },
                {
                    text: 'Assign/UnAssign C to B',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                },
                {
                    text: 'Assign/UnAssign D to B',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                }
            ],
        },
        {
            text: 'Update',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/icon-folder-assign.png',
            items: [
                {
                    text: 'Add B',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                },
                {
                    text: 'Delete B',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                },
                {
                    text: 'Modify B',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                }],
        },

        {
            text: 'View Details',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/ViewDetails.png',

        },
        {
            text: 'View Action Function',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',
        },

        {
            text: 'View Fields',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',
        },
        {
            text: 'View Tab Sequence',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',
        }
    ];

    //Configure Context Menu
    $('#context-menu').dxContextMenu({
        dataSource: contextMenuItems,
        width: 'auto',
        target: '#grid',
        onItemClick: function (e)
        {
            //Skip parent context menu items.
            if (!e.itemData.items)
            {
                // Prevent event propagation to the parent element
                e.event.stopPropagation();
                onContextMenuClick();
            }

        }
    });

    //Signal R 
    // Start the connection to the SignalR hub.
    var connection = $.hubConnection();
    var chatHubProxy = connection.createHubProxy('chatHub');

    // Declare a proxy to reference the hub.

    // Create a function to handle the incoming messages from the server.
    chatHubProxy.on('broadcastMessage', function (rowColor, rowData)
    {
        //Get Row data 
        var rowData = JSON.parse(rowData);
        if (rowData)
        {
            //Get index by unique field.
            var currentRowIndex = $("#grid").dxDataGrid("getRowIndexByKey", rowData["OrderID"]);

            //Remove Row Selection Color.
            $("#grid").find(".dx-data-row").removeClass("dx-selection");

            //Remove Row Locked Row Color.
            $("#grid").find(".dx-data-row").removeClass("lockedRowColor");

            //Remove Row UnLock Row Color.
            $("#grid").find(".dx-data-row").removeClass("unlockRowColor");

            //Remove Read-only Row  Color.
            $("#grid").find(".dx-data-row").removeClass("readonlyRowColor");

            //Add required color via signal r.
            $("#grid").dxDataGrid("getRowElement", currentRowIndex).addClass(rowColor);
        }
    });


    $('#grid').dxDataGrid({

        dataSource: {

            //Paging, filtering, sorting works on server-side.
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
            //Add, Update, Delete API Calls
            store: DevExpress.data.AspNet.createStore({
                key: 'OrderID', // ["OrderID", "EmployeeID"],
                loadUrl: `${url}/Orders`,
                insertUrl: `${url}/InsertOrder`,
                updateUrl: `${url}/UpdateOrder`,
                deleteUrl: `${url}/DeleteOrder`,
            }),
        },

        //Row Editing
        editing: {
            mode: 'row',
            //Permissions
            allowAdding: true,
            allowDeleting: true,
            allowUpdating: true,
            //Confirmation message on delete records
            confirmDelete: true,
            useIcons: true,
            //New row position when add button clicks.
            newRowPosition: 'viewportBottom',

        },

        //Filter-bar in grid header 
        headerFilter: { visible: true }, //Drop-down with check-box. Near the captions.

        //Filter Settings
        filterRow: {
            visible: true,
            applyFilter: 'auto',
        },

        pager: {
            visible: true,
            //PageSize
            allowedPageSizes: [15, 30, 45, 'all'],

            showPageSizeSelector: true,
            showInfo: true,
            showNavigationButtons: true,
            displayMode: 'compact'
        },

        //Sort settings
        sorting: {
            mode: "single"
        },

        //PageSize
        paging: {
            enabled: true,
            pageSize: 15, // number of rows per page
            pageIndex: 0 // initial page index
        },

        //Alternate Row Color
        rowAlternationEnabled: true,

        //Column and row lines
        showColumnLines: true,
        showRowLines: true,

        //Row selection 
        //focusedRowEnabled: true,
        //focusedRowIndex: 0,

        //Auto width true.
        columnAutoWidth: true,

        /*
        Specifies how the UI component resizes columns.

        nextColumn -    When a user resizes a column, the width of the next column changes.

        widget -        When a user resizes a column, the width of the UI component changes.
                        This mode is ignored if you specify the width of any column in percent.
   
        */
        columnResizingMode: 'nextColumn',

        //Tool-tip
        cellHintEnabled: true,

        //Allow resizing
        allowColumnResizing: true,

        //Required for remote data-source

        remoteOperations: {
            sorting: true,
            filtering: true,
            paging: true,
            groupPaging: false,
            grouping: false,
            summary: true
        },

        //Allow re-ordering
        allowColumnReordering: true,

        //Allow hover
        hoverStateEnabled: true,

        //Grouping default auto expand.
        grouping: {
            autoExpandAll: true,
            contextMenuEnabled: true,
            allowCollapsing: true,
        },

        //Group panel for drag and drop
        groupPanel: {
            visible: true,
        },

        height: 'auto',

        //Show grid borders
        showBorders: true,

        //Selection Mode
        selection: {
            mode: 'single',
        },

        //Column Chooser
        columnChooser: {
            enabled: true,
            mode: "select", // or "dragAndDrop"

            position: {
                my: "right top",
                at: "right bottom",
                of: ".dx-datagrid-column-chooser-button"
            }
        },

        //Col Model
        columns: [

            {
                //Row Template
                dataField: 'AttachmentIcon',
                caption: '',
                allowFiltering: false,
                allowSorting: false,
                allowColumnReordering: false,
                allowColumnResizing: false,
                allowHiding: false,
                allowEditing: false,
                allowExporting: false,
                allowFixing: false,
                allowGrouping: false,
                allowHeaderFiltering: false,
                allowHiding: false,
                allowReordering: false,
                allowResizing: false,
                allowSearch: false,
                fixed: true,
                showInColumnChooser: false,
                width: '30px',
                cellTemplate(container, options)
                {
                    $('<div>')
                        .append($('<img>', {
                            src: $('#hfBaseUrl').val() + 'Content/image/icon-attachment.png'
                        }).attr('attachmentonclick', 'attachmentonclick'))
                        .appendTo(container);
                },
                dataType: 'string'
            },
            {
                cssClass: "gridColumn",
                caption: 'OrderID',
                dataField: 'OrderID',
                dataType: 'number',
                allowHiding: true,
                width: 'auto', //Required to set auto-width option to be work.
               

            },
            {
                cssClass: "gridColumn", // For header styles
                dataField: 'CustomerID',
                caption: 'Customer',
                allowHiding: false,
                width: 'auto', //Required to set auto-width option to be work.
                dataType: 'string',
                allowEditing:false,
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field Customer must be a string with a maximum length of 5.',
                    max: 5,
                }],
                /*editorOptions: { searchEnabled: false },*/
                //Drop-down Column
                lookup: {
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: 'Value',
                        loadUrl: `${url}/CustomersLookup`,
                        onBeforeSend(method, ajaxOptions)
                        {
                            ajaxOptions.xhrFields = { withCredentials: true };
                        },
                    }),
                    valueExpr: 'Value',
                    displayExpr: 'Text',
                },

            },
            {
                cssClass: "gridColumn",
                dataType: 'date',
                dataField: 'OrderDate',
                dataType: 'date',
                allowHiding: true,
                width: 'auto', //Required to set auto-width option to be work.
                validationRules: [{
                    type: 'required',
                    message: 'The OrderDate field is required.',
                }],
                format: 'dd MMMM, yyyy'
            },
            {
                cssClass: "gridColumn",
                dataField: 'RequiredDate',
                dataType: 'datetime',
                allowHiding: true,
                width: 'auto', //Required to set auto-width option to be work.
                validationRules: [{
                    type: 'required',
                    message: 'The OrderDate field is required.',
                }],
                format: 'MM/dd/yyyy HH:mm:ss'
            },
            {
                cssClass: "gridColumn",
                dataField: 'Freight',
                dataType: 'number',
                allowHiding: true,
                width: 'auto', //Required to set auto-width option to be work.

                format: "#0.0###"
                //format: {
                //    type: "fixedPoint",
                //    //useCurrencyAccountingStyle: false,
                //    precision: 2
                //},

            },
            {
                cssClass: "gridColumn",
                dataField: 'ShipCountry',
                /*
                Specifies whether a user can hide the column using the column chooser at runtime. Applies only if columnChooser.enabled is true.
                */
                allowHiding: true,

                dataType: 'string',
                width: 'auto', //Required to set auto-width option to be work.
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field ShipCountry must be a string with a maximum length of 15.',
                    max: 15,
                }],
                cellTemplate(container, options)
                {

                    $('<div>')
                        .append($('<a>', {
                            href: '#',
                            class: 'hyperlinkText'
                        }).attr('hyperlinkonclick', 'hyperlinkonclick').text(options.data["ShipCountry"]))
                        .appendTo(container);
                },
            },
            {
                cssClass: "gridColumn",
                dataField: "IsActive",
                caption: "Active",
                dataType: "boolean",
                width: 'auto',
                //editorType: "dxCheckBox",
                editorOptions: {
                    enableThreeStateBehavior: true
                },
                allowHiding: true,
                headerFilter: {
                    dataSource: [
                        { text: "Active", value: true },
                        { text: "Inactive", value: false }
                    ]
                }//,
                //filterType: "check",
                //filterValue: true,
                //filterOperations: ['=', '<>']
            },
            {
                dataType: "string",
                cssClass: "gridColumn",
                dataField: 'ShipVia',
                caption: 'Shipping Company',
                allowHiding: true, // Specifies whether a user can hide the column using the column chooser at runtime. Applies only if columnChooser.enabled is true.
                width: 'auto', //Required to set auto-width option to be work.
                dataType: 'number',
                lookup: {
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: 'Value',
                        loadUrl: `${url}/ShippersLookup`,
                        onBeforeSend(method, ajaxOptions)
                        {
                            ajaxOptions.xhrFields = { withCredentials: true };
                        },
                    }),
                    valueExpr: 'Value', //drop-down key and value
                    displayExpr: 'Text',
                },
            },
            {
                dataType: "string",
                cssClass: "gridColumn",
                dataField: 'ShipName',
                editorType: "dxAutocomplete",
                editorOptions: {
                    dataSource: {
                        load: function (options)
                        {
                            var temp = $.ajax({
                                url: `${url}/ShipNameLookup`,
                                dataType: "json",
                                data: { search: options.searchValue }, // Pass the search value as a parameter
                                async: false
                            });
                            return temp;
                        },
                        map: function (item)
                        {
                            return item;
                        }
                    },
                },
            },
            {
                dataType: "string",
                cssClass: "gridColumn",
                dataField: 'ShipAddress',
                allowHiding: true,
                width: 'auto',//Required to set auto-width option to be work.
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field ShipName must be a string with a maximum length of 60.',
                    max: 60,
                }],
            },
            {
                dataType: "string",
                cssClass: "gridColumn",
                dataField: 'ShipCity',
                allowHiding: true,
                width: 'auto',//Required to set auto-width option to be work.
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field ShipName must be a string with a maximum length of 15.',
                    max: 15,
                }],
            },
            {
                dataType: "string",
                cssClass: "gridColumn",
                dataField: 'ShipRegion',
                allowHiding: true,
                width: 'auto',//Required to set auto-width option to be work.
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field ShipName must be a string with a maximum length of 15.',
                    max: 15,
                }],
            },
            {
                dataType: "string",
                cssClass: "gridColumn",
                dataField: 'ShipPostalCode',
                allowHiding: true,
                width: 'auto',//Required to set auto-width option to be work.
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field ShipName must be a string with a maximum length of 10.',
                    max: 10,
                }],
            },


        ],

        //Aggregate

        //columns: strColumnNames,
        summary: {

            totalItems: [{
                column: 'Freight',
                summaryType: 'sum',
                //Show custom text in summary.
                customizeText: function (data)
                {
                    //Show dollar formatting.
                    var precision = 2; // Number of decimal places
                    var formattedValue = "Sum: $" + data.value.toFixed(precision);
                    return formattedValue;
                }
            },
            {
                column: 'CustomerID',
                summaryType: 'count',
            }],

        },

        onCellPrepared(e)
        {
            //Display all column header text align to left.
            if (e.rowType === 'header')
            {
                e.cellElement[0].style.textAlign = 'left';
            }

            //Show context menu on right click.
            if (e.rowType === "data")
            {
                e.cellElement.on("contextmenu", function (event)
                {
                    event.preventDefault();
                    var rowIndex = e.rowIndex;
                    $("#grid").dxContextMenu("instance").option("rowIndex", rowIndex);
                    $("#grid").dxContextMenu("instance").show(event.pageX, event.pageY);
                });

            }
        },

        //Tool bar items
        toolbar: {
            items: ['addRowButton', 'applyFilterButton', 'columnChooserButton', 'exportButton', 'groupPanel', 'revertButton', 'saveButton', 'searchPanel',

                {
                    location: "after",
                    widget: "dxButton",
                    options: {
                        icon: 'rowproperties',
                        elementAttr: {
                            id: "btnBatchEdit"
                        },

                        // text: $('#hfEditMode').val() === 'batch' ? "Start Batch Edit" : "Use Inline Edit",
                        onClick: function (e)
                        {

                            var dataGrid = $("#grid").dxDataGrid("instance");

                            // Update the editing mode to 'batch'
                            dataGrid.option("editing.mode", ($('#hfEditMode').val() === 'batch' ? "batch" : "row"));

                            $('#btnBatchEdit').attr('title', $('#hfEditMode').val() === 'batch' ? "Start Inline Edit" : "Use Batch Edit");

                            $('#hfEditMode').val($('#hfEditMode').val() === 'batch' ? "row" : "batch");

                            dataGrid.refresh();
                        }
                    }
                },
                {
                    location: "after",
                    widget: "dxButton",
                    options: {
                        icon: 'clearsquare',
                        elementAttr: {
                            id: "btnClearFilter"
                        },
                        onClick: function (e)
                        {
                            $("#grid").dxDataGrid("instance").clearFilter();
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxSelectBox',
                    options: {
                        placeholder: 'Selected Row Actions',
                        width: 'auto',
                        showClearButton: true,
                        items: [

                            {
                                value: 'lockrow',
                                text: 'Lock Selected Row',
                            },
                            {
                                value: 'unlockRow',
                                text: 'UnLock Selected Row',
                            },
                            {
                                value: 'readonlyRow',
                                text: 'Readonly Selected Row',
                            }],
                        displayExpr: 'text',
                        valueExpr: 'value',

                        onValueChanged(e)
                        {
                            var rowColor;
                            switch (e.value)
                            {
                                case 'lockrow': {
                                    rowColor = signalRLockRowColor;
                                    break;
                                }
                                case 'unlockRow': {
                                    rowColor = signalRUnLockRowColor;
                                    break;
                                }
                                case 'readonlyRow': {
                                    rowColor = readonlyRowColor;
                                    break;
                                }

                            }

                            connection.start().done(function ()
                            {
                                if (selectedRows != 0)
                                {
                                    chatHubProxy.invoke('send', rowColor, JSON.stringify(selectedRows[0]));
                                }
                            });
                        },
                    },
                },

            ]
        },
        onContentReady: function (e)
        {
            //Always select first row on grid refresh.
            //var grid = e.component;
            //var firstRowElement = grid.getRowElement(0);

            //if (firstRowElement)
            //{
            //    grid.selectRowsByIndexes([0]);
            //}
        },
        onSelectionChanged: function (e)
        {
            //Maintain selected row ids.
            //selectedRows = e.selectedRowsData;
        },
        onRowPrepared: function (e)
        {
            //Select row on context menu click.
            if (e.rowType === 'data')
            {
                setTimeout(() =>
                {
                    e.rowElement.on('contextmenu',
                        args =>
                        {
                            var dataGrid = $("#grid").dxDataGrid("instance");

                            dataGrid.clearSelection();

                            setTimeout(() =>
                            {
                                e.component.selectRows([e.key]);

                            });

                            args.preventDefault();
                        });
                });
            }
        },
        //onEditorPreparing: function (e)
        //{
        //    debugger
        //    //Disable search option in drop-down column
        //    if (e.dataField == "CustomerID" && e.parentType == "dataRow")
        //    {
        //        e.editorOptions.searchEnabled = false;
        //    }
        //}
    });

    //Attachment icon click
    $(document).off('click', '[attachmentonclick]'); //Event is de-registered properly.
    $(document).on('click', '[attachmentonclick]', function (args)
    {
        alert('attachment clicked');

    });

    //HypeLink icon click
    $(document).off('click', '[hyperlinkonclick]'); //Event is de-registered properly.
    $(document).on('click', '[hyperlinkonclick]', function (args)
    {
        alert($(this).text());
    });


    //Display tool-tip for toolbar button.
    setTimeout(() =>
    {
        $('#btnBatchEdit').attr('title', "Use Batch Edit");
        $('#btnClearFilter').attr('title', "Clear Filters");

    });

    function UpdateJSONObjectOfColModel(strColumnNames)
    {
        try
        {
            //debugger
            for (var i = 0; i < strColumnNames.length; i++)
            {
                
                if (strColumnNames[i].editorType != undefined && strColumnNames[i].editorType == "dxAutocomplete")
                {
                    debugger

                    var dataField = strColumnNames[i].dataField;
                    this["YOJ_DataGridAutoComViewName" + strColumnNames[i].dataField] = strColumnNames[i].dataField;

                    strColumnNames[i].editorOptions.dataSource = {
                        load: function (options)
                        {
                            debugger
                            console.log(dataField)
                            var resultData = $.ajax({
                                url: `${url}/ShipNameLookup`,
                                dataType: "json",
                                data: { search: options.searchValue }, // Pass the search value as a parameter
                                async: false
                            });

                            return resultData;
                        },
                        //key: "Value", // Replace with your key property
                        map: function (item)
                        {
                            return item;
                        }
                    }
                }
            }

            return;
        }
        catch (ex)
        {
            
        }
    }

});
