﻿$(function ()
{
    $("#gridContainer").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
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
            mode: "row",
            allowUpdating: true,
            allowAdding: true,
        },
        columns: [{
            dataField: "UploadedFile",
            width: 300,
            allowFiltering: false,
            allowSorting: false,
            //cellTemplate: cellTemplate,
            editCellTemplate: editCellTemplate
        },

            {
            dataField: "Prefix",
            caption: "Title",
            width: 70
        },
            "FirstName",
            "LastName",
            "Position",
        {
            dataField: "BirthDate",
            dataType: "date"
        }, {
            dataField: "HireDate",
            dataType: "date"
        }
        ]
    });
});



//function cellTemplate(container, options)
//{
    
//    let imgElement = document.createElement("img");
//    imgElement.setAttribute("src", `${options.value}`);
//    container.append(imgElement);
//}

function editCellTemplate(cellElement, cellInfo)
{
    let buttonElement = document.createElement("div");
    buttonElement.classList.add("retryButton");

    //let imageElement = document.createElement("img");
    //imageElement.classList.add("uploadedImage");
    //imageElement.setAttribute('src', `${cellInfo.value}`);

    let fileUploaderElement = document.createElement("div");

    //cellElement.append(imageElement);
    cellElement.append(fileUploaderElement);
    cellElement.append(buttonElement);

    

    const fileUploader = $(fileUploaderElement).dxFileUploader({
        name: 'file',
        multiple: false,
        accept: '*',
        value: [],
        uploadMode: 'instantly',
        uploadUrl: 'https://localhost:44301/FileUpload/Save',
        onValueChanged(e)
        {
            const files = e.value;
            if (files.length > 0)
            {
                $('#selected-files .selected-item').remove();
                $.each(files, (i, file) =>
                {
                    const $selectedItem = $('<div />').addClass('selected-item');
                    $selectedItem.append(
                        $('<span />').html(`Name: ${file.name}<br/>`),
                        $('<span />').html(`Size ${file.size} bytes<br/>`),
                        $('<span />').html(`Type ${file.type}<br/>`),
                        $('<span />').html(`Last Modified Date: ${file.lastModifiedDate}`),
                    );
                    $selectedItem.appendTo($('#selected-files'));
                });
                $('#selected-files').show();
            } else { $('#selected-files').hide(); }
        },
        onUploaded: function (e)
        {
            cellInfo.setValue(e.file.name);
          
        },
    }).dxFileUploader('instance');

    $('#accept-option').dxSelectBox({
        inputAttr: { 'aria-label': 'Accept Option' },
        dataSource: [
            { name: 'All types', value: '*' },
            { name: 'Images', value: 'image/*' },
            { name: 'Videos', value: 'video/*' },
        ],
        valueExpr: 'value',
        displayExpr: 'name',
        value: '*',
        onValueChanged(e)
        {
            fileUploader.option('accept', e.value);
        },
    });

    $('#upload-option').dxSelectBox({
        items: ['instantly', 'useButtons'],
        value: 'instantly',
        inputAttr: { 'aria-label': 'Upload Option' },
        onValueChanged(e)
        {
            fileUploader.option('uploadMode', e.value);
        },
    });

    $('#multiple-option').dxCheckBox({
        value: false,
        text: 'Allow multiple files selection',
        onValueChanged(e)
        {
            fileUploader.option('multiple', e.value);
        },
    });

}


let employees = [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Prefix": "Mr.",
    "Position": "CEO",
    "UploadedFile": "207030301.jpg",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",
    "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "Address": "351 S Hill St."
}, {
    "ID": 20,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Prefix": "Mrs.",
    "Position": "Sales Assistant",
    "UploadedFile": "09.png",
    "BirthDate": "1981/06/03",
    "HireDate": "2012/05/14",
    "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
    "Address": "807 W Paseo Del Mar"
}, {
    "ID": 4,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Prefix": "Mr.",
    "Position": "CMO",
    "UploadedFile": "03.png",
    "BirthDate": "1974/09/07",
    "HireDate": "2002/11/08",
    "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
    "Address": "4 Westmoreland Pl."
}, {
    "ID": 5,
    "FirstName": "Greta",
    "LastName": "Sims",
    "Prefix": "Ms.",
    "Position": "HR Manager",
    "UploadedFile": "04.png",
    "BirthDate": "1977/11/22",
    "HireDate": "1998/04/23",
    "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
    "Address": "1700 S Grandview Dr."
}, {
    "ID": 6,
    "FirstName": "Brett",
    "LastName": "Wade",
    "Prefix": "Mr.",
    "Position": "IT Manager",
    "UploadedFile": "05.png",
    "BirthDate": "1968/12/01",
    "HireDate": "2009/03/06",
    "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
    "Address": "1120 Old Mill Rd."
}, {
    "ID": 7,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Prefix": "Mrs.",
    "Position": "Controller",
    "UploadedFile": "06.png",
    "BirthDate": "1974/11/15",
    "HireDate": "2005/05/11",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "4600 N Virginia Rd."
}, {
    "ID": 10,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "UploadedFile": "07.png",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
    "Address": "424 N Main St."
}, {
    "ID": 11,
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Prefix": "Ms.",
    "Position": "HR Assistant",
    "UploadedFile": "08.png",
    "BirthDate": "1985/06/05",
    "HireDate": "2008/03/24",
    "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
    "Address": "2211 Bonita Dr."
}, {
    "ID": 30,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "UploadedFile": "02.png",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
    "Address": "12100 Mora Dr"
}];