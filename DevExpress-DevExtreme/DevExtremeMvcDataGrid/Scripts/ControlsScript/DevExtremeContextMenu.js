const contextMenuItems = [
    {
        text: 'Share',
        items: [
            { text: 'Facebook' },
            { text: 'Twitter' }],
    },
    { text: 'Download' },
    { text: 'Comment' },
    { text: 'Favorite' },
];

var menuItems = [];

$(() =>
{
    //Example 1

    $('#context-menu').dxContextMenu({
        items: contextMenuItems,
        width: 200,
        target: '#image',
        onItemClick(e)
        {
            if (!e.itemData.items)
            {
                DevExpress.ui.notify(`The "${e.itemData.text}" item was clicked`, 'success', 1500);
            }
        },
    });

    //Example 2

    //var ContextMenuTestList = JSON.parse($('#ContextMenuTestList').val());

    //for (const [key, value] of Object.entries(ContextMenuTestList))
    //{
    //    menuItems.push(value);
    //}

    //$('#product-menu').dxContextMenu({
    //    dataSource: menuItems,
    //    width: 200,
    //    target: '#image',
    //    displayExpr: 'ProductName',
    //    keyExpr: 'ProductID',
    //    onItemClick(e)
    //    {
    //        //if (!e.itemData.ProductID)
    //        //{
    //        DevExpress.ui.notify(`The "${e.itemData.ProductName}" item was clicked`, 'success', 1500);
    //        //}
    //    },
    //});

    //Example 3

    //Context Menu Items
    const contextMenuItemsIcons = [
        {
            text: 'Add Document',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',
            items: [
                {
                    text: 'Assign/UnAssign Document1 to Document2',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',
                    items: [
                        {
                            text: 'Assign/UnAssign E to F',
                            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                        }],
                },
                {
                    text: 'Assign/UnAssign Document2 to Document3',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                },
                {
                    text: 'Assign/UnAssign Document3 to Document4',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                }
            ],
        },
        {
            text: 'Modify Document',
            icon: $('#hfBaseUrl').val() + 'Content/MenuImages/icon-folder-assign.png',
            items: [
                {
                    text: 'Modify Document1',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                },
                {
                    text: 'Modify Document2',
                    icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png',

                },
                {
                    text: 'Modify Document3',
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
    $('#context-menu-withicons').dxContextMenu({
        dataSource: contextMenuItemsIcons,
        width: 'auto',
        target: '#menuiconbutton',
        onItemClick: function (e)
        {
            //Skip parent context menu items.
            if (!e.itemData.items)
            {
                // Prevent event propagation to the parent element
                e.event.stopPropagation();
                onContextMenuClick(e);
            }
        }
    });

    function onContextMenuClick(e)
    {
        alert(`The "${e.itemData.text}" item was clicked`);
        return;
    }
});