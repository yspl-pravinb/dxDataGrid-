$(() =>
{
    const customers = [{
        ID: 1,
        CompanyName: 'Super Mart of the West',
        Address: '702 SW 8th Street',
        City: 'Bentonville',
        State: 'Arkansas',
        Zipcode: 72716,
        Phone: '(800) 555-2797',
        Fax: '(800) 555-2171',
        Website: 'http://www.nowebsitesupermart.com',
    }, {
        ID: 2,
        CompanyName: 'Electronics Depot',
        Address: '2455 Paces Ferry Road NW',
        City: 'Atlanta',
        State: 'Georgia',
        Zipcode: 30339,
        Phone: '(800) 595-3232',
        Fax: '(800) 595-3231',
        Website: 'http://www.nowebsitedepot.com',
    }, {
        ID: 3,
        CompanyName: 'K&S Music',
        Address: '1000 Nicllet Mall',
        City: 'Minneapolis',
        State: 'Minnesota',
        Zipcode: 55403,
        Phone: '(612) 304-6073',
        Fax: '(612) 304-6074',
        Website: 'http://www.nowebsitemusic.com',
    }, {
        ID: 4,
        CompanyName: "Tom's Club",
        Address: '999 Lake Drive',
        City: 'Issaquah',
        State: 'Washington',
        Zipcode: 98027,
        Phone: '(800) 955-2292',
        Fax: '(800) 955-2293',
        Website: 'http://www.nowebsitetomsclub.com',
    }, {
        ID: 5,
        CompanyName: 'E-Mart',
        Address: '3333 Beverly Rd',
        City: 'Hoffman Estates',
        State: 'Illinois',
        Zipcode: 60179,
        Phone: '(847) 286-2500',
        Fax: '(847) 286-2501',
        Website: 'http://www.nowebsiteemart.com',
    }, {
        ID: 6,
        CompanyName: 'Walters',
        Address: '200 Wilmot Rd',
        City: 'Deerfield',
        State: 'Illinois',
        Zipcode: 60015,
        Phone: '(847) 940-2500',
        Fax: '(847) 940-2501',
        Website: 'http://www.nowebsitewalters.com',
    }, {
        ID: 7,
        CompanyName: 'StereoShack',
        Address: '400 Commerce S',
        City: 'Fort Worth',
        State: 'Texas',
        Zipcode: 76102,
        Phone: '(817) 820-0741',
        Fax: '(817) 820-0742',
        Website: 'http://www.nowebsiteshack.com',
    }, {
        ID: 8,
        CompanyName: 'Circuit Town',
        Address: '2200 Kensington Court',
        City: 'Oak Brook',
        State: 'Illinois',
        Zipcode: 60523,
        Phone: '(800) 955-2929',
        Fax: '(800) 955-9392',
        Website: 'http://www.nowebsitecircuittown.com',
    }, {
        ID: 9,
        CompanyName: 'Premier Buy',
        Address: '7601 Penn Avenue South',
        City: 'Richfield',
        State: 'Minnesota',
        Zipcode: 55423,
        Phone: '(612) 291-1000',
        Fax: '(612) 291-2001',
        Website: 'http://www.nowebsitepremierbuy.com',
    }, {
        ID: 10,
        CompanyName: 'ElectrixMax',
        Address: '263 Shuman Blvd',
        City: 'Naperville',
        State: 'Illinois',
        Zipcode: 60563,
        Phone: '(630) 438-7800',
        Fax: '(630) 438-7801',
        Website: 'http://www.nowebsiteelectrixmax.com',
    }, {
        ID: 11,
        CompanyName: 'Video Emporium',
        Address: '1201 Elm Street',
        City: 'Dallas',
        State: 'Texas',
        Zipcode: 75270,
        Phone: '(214) 854-3000',
        Fax: '(214) 854-3001',
        Website: 'http://www.nowebsitevideoemporium.com',
    }, {
        ID: 12,
        CompanyName: 'Screen Shop',
        Address: '1000 Lowes Blvd',
        City: 'Mooresville',
        State: 'North Carolina',
        Zipcode: 28117,
        Phone: '(800) 445-6937',
        Fax: '(800) 445-6938',
        Website: 'http://www.nowebsitescreenshop.com',
    }];
    //Data URL
    const url = $('#hfBaseUrl').val() + 'api/DataGridWebApi';

    $('#gridContainer').dxDataGrid({

        remoteOperations: { paging: true },
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
        remoteOperations: true,

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
                cssClass: "gridColumn", // For header styles
                dataField: 'CustomerID',
                caption: 'Customer',
                allowHiding: true,
                width: 'auto', //Required to set auto-width option to be work.
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field Customer must be a string with a maximum length of 5.',
                    max: 5,
                }],
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
                allowHiding: true,
                width: 'auto', //Required to set auto-width option to be work.
                validationRules: [{
                    type: 'range',
                    message: 'The field Freight must be between 0 and 2000.',
                    min: 0,
                    max: 2000,
                }],

                format: {
                    type: "currency",
                    useCurrencyAccountingStyle: true,
                    precision: 2
                },

            },
            {
                cssClass: "gridColumn",
                dataField: 'ShipCountry',
                /*
                Specifies whether a user can hide the column using the column chooser at runtime. Applies only if columnChooser.enabled is true.
                */
                allowHiding: true,
                width: 'auto', //Required to set auto-width option to be work.
                validationRules: [{
                    type: 'stringLength',
                    message: 'The field ShipCountry must be a string with a maximum length of 15.',
                    max: 15,
                }],
            },
            {
                cssClass: "gridColumn",
                dataField: "IsActive",
                caption: "Active",
                dataType: "boolean",
                width: 'auto',
                editorType: "dxCheckBox",
                allowHiding: true,
                headerFilter: {
                    dataSource: [
                        { text: "Active", value: true },
                        { text: "Inactive", value: false }
                    ]
                },
                filterType: "check",
                filterValue: true,
                filterOperations: ['=', '<>']
            },
            {
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
                cssClass: "gridColumn",
                type: 'buttons',
                width: 'auto',
                caption:'Preview',
                buttons: [{
                    hint: 'Preview',
                    icon: 'copy',
                    visible(e)
                    {
                        return true;
                    },
                    disabled(e)
                    {
                        return false;
                    },
                    onClick(e)
                    {
                        alert('Preview Clicked.')
                    },
                }],
            },


        ],

        onCellPrepared(e)
        {
            //Display all column header text align to left.
            if (e.rowType === 'header')
            {
                e.cellElement[0].style.textAlign = 'left';
            }
        },

        //Tool bar items
        toolbar: {
            items: ['addRowButton', 'applyFilterButton', 'columnChooserButton', 'exportButton', 'groupPanel', 'revertButton', 'saveButton', 'searchPanel',

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
            ]
        },
        onContentReady: function (e)
        {
            //Always select first row on grid refresh.
            var grid = e.component;
            var firstRowElement = grid.getRowElement(0);

            if (firstRowElement)
            {
                grid.selectRowsByIndexes([0]);
            }
        },
        onSelectionChanged: function (e)
        {
            //Maintain selected row ids.
            selectedRows = e.selectedRowsData;
        },

        masterDetail: {
            enabled: true,
            template: function (container, options)
            {
                $("<div>")
                    .addClass("internal-grid")
                    .dxDataGrid(
                        {
                            showToolbar: false,
                            showColumnHeaders: false,
                            showRowLines: false,
                            showBorders: false,
                            columns: ["FullName"],
                            dataSource: [{
                                ID: 1,
                                FullName: 'John Heart',
                                Department: 'Management',
                                Title: 'CEO',
                            }, {
                                ID: 2,
                                FullName: 'Samantha Bright',
                                Department: 'Management',
                                Title: 'COO',
                            }],
                            customizeColumns: function (columns)
                            {
                                columns.forEach(function (column)
                                {
                                    column.cellTemplate = function (container, options)
                                    {
                                        container.addClass("no-column-line"); // Add custom class for styling
                                        container.text(options.text);
                                    };
                                });
                            },
                            masterDetail: {
                                enabled: true,
                                template: function (container, options)
                                {                                     
                                    $("<div>")
                                        .addClass("internal-grid")
                                        .dxDataGrid(
                                            {
                                                dataSource: customers,
                                                keyExpr: 'ID',
                                                columns: [
                                                    {
                                                        cssClass: "gridColumn",
                                                        dataField: 'ID',
                                                        width: 'auto',//Required to set auto-width option to be work.
                                                    },
                                                    {
                                                        cssClass: "gridColumn",
                                                        dataField: 'ZipCode',
                                                        width: 'auto',//Required to set auto-width option to be work.
                                                    },
                                                    {
                                                        cssClass: "gridColumn",
                                                        dataField: 'CompanyName',
                                                        width: 'auto',//Required to set auto-width option to be work.
                                                    },
                                                    {
                                                        cssClass: "gridColumn",
                                                        dataField: 'City',
                                                        width: 'auto',//Required to set auto-width option to be work.
                                                    },
                                                     
                                                    {
                                                        cssClass: "gridColumn",
                                                        dataField: 'State',
                                                        width: 'auto',//Required to set auto-width option to be work.
                                                    },
                                                    {
                                                        cssClass: "gridColumn",
                                                        dataField: 'Phone',
                                                        width: 'auto',//Required to set auto-width option to be work.
                                                    },
                                                    {
                                                        cssClass: "gridColumn",
                                                        dataField: 'Fax',
                                                        width: 'auto',//Required to set auto-width option to be work.
                                                    },
                                                    
                                                    {
                                                        type: 'buttons',
                                                        width: 110,
                                                        buttons: [{
                                                            hint: 'Preview',
                                                           // icon: 'copy',
                                                            visible(e)
                                                            {
                                                                return true;
                                                            },
                                                            disabled(e)
                                                            {
                                                                return false;
                                                            },
                                                            onClick(e)
                                                            {
                                                                alert('Preview Clicked.')
                                                            },
                                                        }],
                                                    },],
                                                showBorders: true,
                                                sorting: {
                                                    mode: "single" // or "multiple" | "none"
                                                },
                                                filterRow: { visible: true },
                                                headerFilter: { visible: true },
                                                grouping: {
                                                    contextMenuEnabled: true
                                                },
                                                groupPanel: {
                                                    visible: true   // or "auto"
                                                },
                                                columnResizingMode: 'nextColumn',
                                                allowColumnResizing: true,
                                                allowColumnReordering: true,
                                                columnAutoWidth: true,
                                                rowAlternationEnabled: true,
                                                masterDetail: {
                                                    enabled: true,
                                                    template: function (container, options)
                                                    {
                                                        $("<div>")
                                                            .addClass("internal-grid")
                                                            .dxDataGrid(
                                                                {
                                                                    dataSource: customers,
                                                                    keyExpr: 'ID',
                                                                    columns: [
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'ID',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'ZipCode',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'CompanyName',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'City',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'City',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'State',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'Phone',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },
                                                                        {
                                                                            cssClass: "gridColumn",
                                                                            dataField: 'Fax',
                                                                            width: 'auto',//Required to set auto-width option to be work.
                                                                        },

                                                                        ],
                                                                    showBorders: true,
                                                                    sorting: {
                                                                        mode: "single" // or "multiple" | "none"
                                                                    },
                                                                    filterRow: { visible: true },
                                                                    headerFilter: { visible: true },
                                                                    grouping: {
                                                                        contextMenuEnabled: true
                                                                    },
                                                                    groupPanel: {
                                                                        visible: true   // or "auto"
                                                                    },
                                                                    columnResizingMode: 'nextColumn',
                                                                    allowColumnResizing: true,
                                                                    allowColumnReordering: true,
                                                                    columnAutoWidth: true,
                                                                    rowAlternationEnabled: true,

                                                                }).appendTo(container).dxDataGrid('instance');
                                                    },
                                                }

                                            }).appendTo(container).dxDataGrid('instance');
                                },
                            }

                        }).appendTo(container).dxDataGrid('instance');
            },
        },
    });
});