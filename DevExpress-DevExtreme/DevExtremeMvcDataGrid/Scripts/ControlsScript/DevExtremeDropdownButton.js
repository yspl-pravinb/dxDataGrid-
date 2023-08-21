const colors = [null, '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff', '#ff3466'];

const downloads = ['Download Trial For Visual Studio', 'Download Trial For All Platforms', 'Package Managers'];

const alignments = [
    { id: 1, name: 'Left', icon: 'alignleft' },
    { id: 4, name: 'Right', icon: 'alignright' },
    { id: 2, name: 'Center', icon: 'aligncenter' },
    { id: 3, name: 'Justify', icon: 'alignjustify' },
];

const fontSizes = [
    { size: 10, text: '10px' },
    { size: 12, text: '12px' },
    { size: 14, text: '14px' },
    { size: 16, text: '16px' },
    { size: 18, text: '18px' },
];

const lineHeights = [
    { lineHeight: 1, text: '1' },
    { lineHeight: 1.35, text: '1.35' },
    { lineHeight: 1.5, text: '1.5' },
    { lineHeight: 2, text: '2' },
];

const menus = [
    { id: "liSaveQuery", name: 'Query'},
    { id: "liGridReport", name: 'Grid Report'},
    { id: "liGridFunction", name: 'Grid Function'},
    { id: "liGridDashBoard", name: 'Grid Dashboard'},
];

menus.splice("liSaveQuery", 1);

$(() =>
{
    alert($('#hfBaseUrl').val());
    const profileSettings = [
        { id: 1, name: 'Profile', icon: $('#hfBaseUrl').val() + 'Content/MenuImages/DefaultFunction.png' },
        { id: 4, name: 'Messages', icon: 'email', badge: '5' },
        { id: 2, name: 'Friends', icon: 'group' },
        { id: 3, name: 'Exit', icon: 'runner' },
    ];


    $('#one-section').dxDropDownButton({
        text: 'Download Trial',
        icon: 'save',
        dropDownOptions: {
            width: 230,
        },
        onItemClick(e)
        {
            DevExpress.ui.notify(`Download ${e.itemData}`, 'success', 600);
        },
        items: downloads,
    });

    $('#two-sections').dxDropDownButton({
        items: profileSettings,
        splitButton: true,
        onButtonClick(e)
        {
            DevExpress.ui.notify(`Go to ${e.component.option('text')}'s profile`, 'success', 600);
        },
        onItemClick(e)
        {
            DevExpress.ui.notify(e.itemData.name, 'success', 600);
        },
        text: 'Sandra Johnson',
        icon: 'images/gym/coach-woman.png',
        displayExpr: 'name',
        keyExpr: 'id',
        useSelectMode: false,
    });

    $('#template').dxToolbar({
        items: [
            {
                location: 'before',
                widget: 'dxDropDownButton',
                options: {
                    displayExpr: 'name',
                    keyExpr: 'id',
                    selectedItemKey: 3,
                    width: 125,
                    stylingMode: 'text',
                    useSelectMode: true,
                    onSelectionChanged(e)
                    {
                        $('#text').css('text-align', e.item.name.toLowerCase());
                    },
                    items: alignments,
                },
            },
            {
                location: 'before',
                widget: 'dxDropDownButton',
                options: {
                    items: colors,
                    icon: 'square',
                    stylingMode: 'text',
                    dropDownOptions: { width: 'auto' },
                    onInitialized(e)
                    {
                        dropDownButton = e.component;
                    },
                    dropDownContentTemplate(data, $container)
                    {
                        const $colorPicker = $('<div>')
                            .addClass('custom-color-picker')
                            .appendTo($container);

                        data.forEach((color) =>
                        {
                            const $button = $('<i>')
                                .addClass('color dx-icon dx-icon-square')
                                .on('dxclick', () =>
                                {
                                    applyColor($('#text'), color);
                                    applyColor(dropDownButton.$element().find('.dx-dropdownbutton-action .dx-icon').first(), color);
                                    dropDownButton.close();
                                });

                            applyColor($button, color);
                            $colorPicker.append($button);
                        });
                    },
                },
            },
            {
                location: 'before',
                widget: 'dxDropDownButton',
                options: {
                    stylingMode: 'text',
                    displayExpr: 'text',
                    keyExpr: 'size',
                    useSelectMode: true,
                    items: fontSizes,
                    selectedItemKey: 14,
                    onSelectionChanged(e)
                    {
                        $('#text').css('font-size', `${e.item.size}px`);
                    },
                    itemTemplate(itemData)
                    {
                        return $('<div>')
                            .text(itemData.text)
                            .css('font-size', `${itemData.size}px`);
                    },
                },
            },
            {
                location: 'before',
                widget: 'dxDropDownButton',
                options: {
                    stylingMode: 'text',
                    icon: 'indent',
                    displayExpr: 'text',
                    keyExpr: 'lineHeight',
                    useSelectMode: true,
                    items: lineHeights,
                    selectedItemKey: 1.35,
                    onSelectionChanged(e)
                    {
                        $('#text').css('line-height', e.item.lineHeight);
                    },
                },
            },
        ],
    });

    $('#DXMenu').dxDropDownButton({
        items: menus,
        splitButton: true,
        dropDownOptions: {
            width: 240,
        },
        onButtonClick(e)
        {
            DevExpress.ui.notify(`Go to ${e.component.option('text')}'s profile`, 'success', 600);
        },
        onItemClick(e)
        {
            DevExpress.ui.notify(e.itemData.name, 'success', 600);
        },
        text: 'Save As',
        //icon: 'images/gym/coach-woman.png',
        displayExpr: 'name',
        keyExpr: 'id',
        useSelectMode: false,
    });
});

let dropDownButton;
function applyColor($element, color)
{
    if (color)
    {
        $element.removeClass('dx-theme-text-color');
        $element.css('color', color);
    } else
    {
        $element.addClass('dx-theme-text-color');
    }
}
