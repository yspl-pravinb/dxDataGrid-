const federalHolidays = [
    new Date(2017, 0, 1),
    new Date(2017, 0, 2),
    new Date(2017, 0, 16),
    new Date(2017, 1, 20),
    new Date(2017, 4, 29),
    new Date(2017, 6, 4),
    new Date(2017, 8, 4),
    new Date(2017, 9, 9),
    new Date(2017, 10, 11),
    new Date(2017, 10, 23),
    new Date(2017, 11, 25),
];

const customers = [{
    "ID": 1,
    "CompanyName": "Premier Buy",
    "Address": "7601 Penn Avenue South",
    "City": "Richfield",
    "State": "Minnesota",
    "Zipcode": 55423,
    "Phone": "(612) 291-1000",
    "Fax": "(612) 291-2001",
    "Website": "http://www.nowebsitepremierbuy.com"
}, {
    "ID": 2,
    "CompanyName": "ElectrixMax",
    "Address": "263 Shuman Blvd",
    "City": "Naperville",
    "State": "Illinois",
    "Zipcode": 60563,
    "Phone": "(630) 438-7800",
    "Fax": "(630) 438-7801",
    "Website": "http://www.nowebsiteelectrixmax.com"
}, {
    "ID": 3,
    "CompanyName": "Video Emporium",
    "Address": "1201 Elm Street",
    "City": "Dallas",
    "State": "Texas",
    "Zipcode": 75270,
    "Phone": "(214) 854-3000",
    "Fax": "(214) 854-3001",
    "Website": "http://www.nowebsitevideoemporium.com"
}, {
    "ID": 4,
    "CompanyName": "Screen Shop",
    "Address": "1000 Lowes Blvd",
    "City": "Mooresville",
    "State": "North Carolina",
    "Zipcode": 28117,
    "Phone": "(800) 445-6937",
    "Fax": "(800) 445-6938",
    "Website": "http://www.nowebsitescreenshop.com"
}, {
    "ID": 5,
    "CompanyName": "Braeburn",
    "Address": "1 Infinite Loop",
    "City": "Cupertino",
    "State": "California",
    "Zipcode": 95014,
    "Phone": "(408) 996-1010",
    "Fax": "(408) 996-1012",
    "Website": "http://www.nowebsitebraeburn.com"
}, {
    "ID": 6,
    "CompanyName": "PriceCo",
    "Address": "30 Hunter Lane",
    "City": "Camp Hill",
    "State": "Pennsylvania",
    "Zipcode": 17011,
    "Phone": "(717) 761-2633",
    "Fax": "(717) 761-2334",
    "Website": "http://www.nowebsitepriceco.com"
}, {
    "ID": 7,
    "CompanyName": "Ultimate Gadget",
    "Address": "1557 Watson Blvd",
    "City": "Warner Robbins",
    "State": "Georgia",
    "Zipcode": 31093,
    "Phone": "(995) 623-6785",
    "Fax": "(995) 623-6786",
    "Website": "http://www.nowebsiteultimategadget.com"
}, {
    "ID": 8,
    "CompanyName": "EZ Stop",
    "Address": "618 Michillinda Ave.",
    "City": "Arcadia",
    "State": "California",
    "Zipcode": 91007,
    "Phone": "(626) 265-8632",
    "Fax": "(626) 265-8633",
    "Website": "http://www.nowebsiteezstop.com"
}, {
    "ID": 9,
    "CompanyName": "Clicker",
    "Address": "1100 W. Artesia Blvd.",
    "City": "Compton",
    "State": "California",
    "Zipcode": 90220,
    "Phone": "(310) 884-9000",
    "Fax": "(310) 884-9001",
    "Website": "http://www.nowebsiteclicker.com"
}, {
    "ID": 10,
    "CompanyName": "Store of America",
    "Address": "2401 Utah Ave. South",
    "City": "Seattle",
    "State": "Washington",
    "Zipcode": 98134,
    "Phone": "(206) 447-1575",
    "Fax": "(206) 447-1576",
    "Website": "http://www.nowebsiteamerica.com"
}, {
    "ID": 11,
    "CompanyName": "Zone Toys",
    "Address": "1945 S Cienega Boulevard",
    "City": "Los Angeles",
    "State": "California",
    "Zipcode": 90034,
    "Phone": "(310) 237-5642",
    "Fax": "(310) 237-5643",
    "Website": "http://www.nowebsitezonetoys.com"
}, {
    "ID": 12,
    "CompanyName": "ACME",
    "Address": "2525 E El Segundo Blvd",
    "City": "El Segundo",
    "State": "California",
    "Zipcode": 90245,
    "Phone": "(310) 536-0611",
    "Fax": "(310) 536-0612",
    "Website": "http://www.nowebsiteacme.com"
}];

$(() =>
{
    const now = new Date();

    $('#date').dxDateBox({
        type: 'date',
        value: now,
    });

    $('#time').dxDateBox({
        type: 'time',
        value: now,
        inputAttr: { 'aria-label': 'Time' },
    });

    $('#date-time').dxDateBox({
        type: 'datetime',
        value: now,
        inputAttr: { 'aria-label': 'Date Time' },
    });

    $('#custom').dxDateBox({
        displayFormat: 'EEEE, MMM dd',
        value: now,
        inputAttr: { 'aria-label': 'Custom Date' },
    });

    $('#date-by-picker').dxDateBox({
        pickerType: 'rollers',
        value: now,
        inputAttr: { 'aria-label': 'Picker Date' },
    });

    $('#disabled').dxDateBox({
        type: 'datetime',
        disabled: true,
        value: now,
        inputAttr: { 'aria-label': 'Disabled' },
    });

    $('#disabledDates').dxDateBox({
        type: 'date',
        pickerType: 'calendar',
        value: new Date(2017, 0, 3),
        disabledDates: federalHolidays,
        inputAttr: { 'aria-label': 'Disabled' },
    });

    $('#clear').dxDateBox({
        type: 'time',
        showClearButton: true,
        value: new Date(2015, 11, 1, 6),
        inputAttr: { 'aria-label': 'Clear Date' },
    });

    const startDate = new Date(1981, 3, 27);

    $('#birthday').dxDateBox({
        applyValueMode: 'useButtons',
        value: startDate,
        max: new Date(),
        min: new Date(1900, 0, 1),
        inputAttr: { 'aria-label': 'Birth Date' },
        onValueChanged(data)
        {
            dateDiff(new Date(data.value));
        },
    });

    function dateDiff(date)
    {
        const diffInDay = Math.floor(Math.abs((new Date() - date) / (24 * 60 * 60 * 1000)));
        return $('#age').text(`${diffInDay} days`);
    }

    dateDiff(startDate);

    let treeView; let
        dataGrid;

    const syncTreeViewSelection = function (treeViewInstance, value)
    {
        if (!value)
        {
            treeViewInstance.unselectAll();
            return;
        }

        value.forEach((key) =>
        {
            treeViewInstance.selectItem(key);
        });
    };

    const makeAsyncDataSource = function (jsonFile)
    {
        return new DevExpress.data.CustomStore({
            loadMode: 'raw',
            key: 'ID',
            load()
            {
                return $.getJSON(`data/${jsonFile}`);
            },
        });
    };


    $('#gridBox').dxDropDownBox({
        value: [3],
        valueExpr: 'ID',
        placeholder: 'Select a value...',
        displayExpr: 'CompanyName',
        showClearButton: true,
        inputAttr: { 'aria-label': 'Owner' },
        dataSource: customers,
        contentTemplate(e)
        {
            const v = e.component.option('value');
            const $dataGrid = $('<div>').dxDataGrid({
                dataSource: e.component.getDataSource(),
                columns: ['CompanyName', 'City', 'Phone'],
                hoverStateEnabled: true,
                paging: { enabled: true, pageSize: 10 },
                filterRow: { visible: true },
                scrolling: { mode: 'virtual' },
                height: 345,
                selection: { mode: 'multiple' },
                selectedRowKeys: v,
                onSelectionChanged(selectedItems)
                {
                    const keys = selectedItems.selectedRowKeys;
                    e.component.option('value', keys);
                },
            });

            dataGrid = $dataGrid.dxDataGrid('instance');

            e.component.on('valueChanged', (args) =>
            {
                const { value } = args;
                dataGrid.selectRows(value, false);
            });

            return $dataGrid;
        },
    });
});