const menuData = [{
    id: '1',
    name: 'Video Players',
    items: [{
        id: '1_1',
        name: 'HD Video Player',
        price: 220,
        icon: 'images/products/1.png',
    }, {
        id: '1_2',
        name: 'SuperHD Video Player',
        icon: 'images/products/2.png',
        price: 270,
    }],
}, {
    id: '2',
    name: 'Televisions',
    items: [{
        id: '2_1',
        name: 'SuperLCD 42',
        icon: 'images/products/7.png',
        price: 1200,
    }, {
        id: '2_2',
        name: 'SuperLED 42',
        icon: 'images/products/5.png',
        price: 1450,
    }, {
        id: '2_3',
        name: 'SuperLED 50',
        icon: 'images/products/4.png',
        price: 1600,
    }, {
        id: '2_4',
        name: 'SuperLCD 55 (Not available)',
        icon: 'images/products/6.png',
        price: 1350,
        disabled: true,
    }, {
        id: '2_5',
        name: 'SuperLCD 70',
        icon: 'images/products/9.png',
        price: 4000,
    }],
}, {
    id: '3',
    name: 'Monitors',
    items: [{
        id: '3_1',
        name: '19"',
        items: [{
            id: '3_1_1',
            name: 'DesktopLCD 19',
            icon: 'images/products/10.png',
            price: 160,
        }],
    }, {
        id: '3_2',
        name: '21"',
        items: [{
            id: '3_2_1',
            name: 'DesktopLCD 21',
            icon: 'images/products/12.png',
            price: 170,
        }, {
            id: '3_2_2',
            name: 'DesktopLED 21',
            icon: 'images/products/13.png',
            price: 175,
        }],
    }],
}, {
    id: '4',
    name: 'Projectors',
    items: [{
        id: '4_1',
        name: 'Projector Plus',
        icon: 'images/products/14.png',
        price: 550,
    }, {
        id: '4_2',
        name: 'Projector PlusHD',
        icon: 'images/products/15.png',
        price: 750,
    }],
}];

$(() =>
{
    const dxMenu = $('#menu').dxMenu({
        dataSource: menuData,
        hideSubmenuOnMouseLeave: false,
        displayExpr: 'name',
        onItemClick(data)
        {
            const item = data.itemData;
            if (item.price)
            {
                $('#product-details').removeClass('hidden');
                $('#product-details > img').attr('src', item.icon);
                $('#product-details > .price').text(`$${item.price}`);
                $('#product-details > .name').text(item.name);
            }
        },
    }).dxMenu('instance');

    const showSubmenuModes = [{
        name: 'onHover',
        delay: { show: 0, hide: 500 },
    }, {
        name: 'onClick',
        delay: { show: 0, hide: 300 },
    }];

    $('#show-submenu-mode').dxSelectBox({
        items: showSubmenuModes,
        value: showSubmenuModes[1],
        inputAttr: { 'aria-label': 'Submenu Mode' },
        displayExpr: 'name',
        onValueChanged(data)
        {
            dxMenu.option('showFirstSubmenuMode', data.value);
        },
    });

    $('#orientation').dxSelectBox({
        items: ['horizontal', 'vertical'],
        inputAttr: { 'aria-label': 'Orientation' },
        value: 'horizontal',
        onValueChanged(data)
        {
            dxMenu.option('orientation', data.value);
        },
    });

    $('#mouse-leave').dxCheckBox({
        value: false,
        text: 'Hide Submenu on Mouse Leave',
        onValueChanged(data)
        {
            dxMenu.option('hideSubmenuOnMouseLeave', data.value);
        },
    });
});