$(() =>
{
    $('#gridContainer').dxDataGrid({
        dataSource: customers,
        allowColumnResizing: true,
        keyExpr: 'ID',
        columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax',
                {
                dataField: 'Status',
                lookup: {
                    dataSource: statuses,
                    valueExpr: 'id',
                    displayExpr: 'name',
                },
                validationRules: [{ type: 'required' }],
                    width: 200,
                    editCellTemplate: dropDownBoxEditorTemplate,
                //editorOptions: {
                //    itemTemplate(itemData, itemIndex, itemElement)
                //    {
                //       // const v = e.component.option('value');
                //        const $dataGrid = $('<div>').dxDataGrid({
                //            dataSource: statuses,
                //            columns: ['id', 'name', 'value'],
                //            hoverStateEnabled: true,
                //            paging: { enabled: true, pageSize: 10 },
                //            filterRow: { visible: true },
                //            scrolling: { mode: 'virtual' },
                //            height: 500, 
                //            selection: { mode: 'multiple' },
                //           // selectedRowKeys: v,
                            
                //        });

                //       let dataGrid = $dataGrid.dxDataGrid('instance');

                //        //e.component.on('valueChanged', (args) =>
                //        //{
                //        //    const { value } = args;
                //        //    dataGrid.selectRows(value, false);
                //        //});

                //        return $dataGrid.appendTo(itemElement);
                //       // table.appendTo(itemElement);
                //        //const table = $('<table>').addClass('table table-sm').appendTo(itemElement);
                //        //const tbody = $('<tbody>').appendTo(table);
                //        //const tr = $('<tr>').appendTo(tbody);
                //        //$('<td>').text(itemData.name).appendTo(tr);
                //        //const td = $('<td>').appendTo(tr);
                //        //$('<img>').attr('src', `images/icons/status-${itemData.id}.svg`).appendTo(td);
                //        //$('<td>').text(itemData.value).appendTo(tr);
                //        //if (itemData != null)
                //        //{
                //        //    const imageContainer = $('<span>').addClass('status-icon middle').appendTo(itemElement);
                //        //    $('<img>').attr('src', `images/icons/status-${itemData.id}.svg`).appendTo(imageContainer);
                //        //    $('<span>').addClass('middle').text(itemData.name).appendTo(itemElement);
                //        //} else
                //        //{
                //        //    $('<span>').text('(All)').appendTo(itemElement);
                //        //}
                //    },
                //},
            },        ],
        showBorders: true,
        paging: {
            enabled: true,
            pageSize: 15,
        },
        headerFilter: {
            visible: true,
        },
        searchPanel: {
            visible: true,
        },
        editing: {
            mode: 'cell',
            allowUpdating: true,
            allowAdding: true,
        }
    });
});

function dropDownBoxEditorTemplate(cellElement, cellInfo)
{
    return $('<div>').dxDropDownBox({
        dropDownOptions: { width: 500 },
        dataSource: statuses,
        value: cellInfo.value,
        valueExpr: 'id',
        displayExpr: 'name',
        inputAttr: { 'aria-label': 'Status' },
        contentTemplate(e)
        {
            return $('<div>').dxDataGrid({
                dataSource: statuses,
                remoteOperations: true,
                keyExpr:'id',
                columns: ['id', 'name', 'value'],
                hoverStateEnabled: true,
                scrolling: { mode: 'virtual' },
                height: 250,
                selection: { mode: 'single' },
                selectedRowKeys: [cellInfo.value],
                focusedRowEnabled: true,
                focusedRowKey: cellInfo.value,
                onSelectionChanged(selectionChangedArgs)
                {
                    e.component.option('value', selectionChangedArgs.selectedRowKeys[0]);
                    cellInfo.setValue(selectionChangedArgs.selectedRowKeys[0]);
                    if (selectionChangedArgs.selectedRowKeys.length > 0)
                    {
                        e.component.close();
                    }
                },
            });
        },
    });
}

const statuses = [{
    id: 1, name: 'Not Started',value:'a',
}, {
        id: 2, name: 'In Progress', value: 'b',
}, {
    id: 3, name: 'Deferred', value: 'b',
}, {
    id: 4, name: 'Need Assistance', value: 'b',
}, {
    id: 5, name: 'Completed', value: 'b',
},
];
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
    Status : 2
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
    Status : 2
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
    Status : 2
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
    Status : 2
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
    Status : 3
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
    Status : 4
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
    Status : 2
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
    Status : 2
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
    Status : 2
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
    Status : 2
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
    Status : 2
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
    Status : 2
}];
