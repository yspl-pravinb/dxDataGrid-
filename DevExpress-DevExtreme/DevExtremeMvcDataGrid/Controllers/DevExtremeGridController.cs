using System.ComponentModel.DataAnnotations;
using System.Runtime.Remoting.Messaging;
using System;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace DevExtremeMvcDataGrid.Controllers
{
    public class DevExtremeGridController : Controller
    {
        class ColModelParam
        {
            public string dataField;
            public string caption;
            public string alignment;
            public string dataType;
            public bool visible=true;
            public dynamic format;
            public ColModelLookup lookup;
            public string cssClass = "gridColumn";
            public string editorType;
            public ColModelEditorOptions editorOptions;
            //public ColModelFormat currFormat;
        }

        class ColModelLookup
        {
            public ColModelLookupDS[] dataSource;
            public string displayExpr;
            public string valueExpr;
        }

        class ColModelLookupDS
        {
            public dynamic id;
            public dynamic name;
        }

        class ColModelEditorOptions
        {
            public bool? searchEnabled = null;
            public dynamic[] dataSource;
            public bool? enableThreeStateBehavior = null;
        }

        class ColModelFormat
        {
            public string type;
            public bool? useCurrencyAccountingStyle;
            public int? precision;
        }

        public ActionResult PaintGrid()
        {
            //ColModelParam[] tp = new ColModelParam[2];
            //tp[0] = new ColModelParam
            //{
            //    dataField = "ShipName",
            //    caption = "ShipName"
            //};
            //tp[0].editorType = "dxAutocomplete";
            //tp[0].editorOptions = new ColModelEditorOptions
            //{
            //    dataSource = new string[1]
            //};

            //tp[1] = new ColModelParam
            //{
            //    dataField = "ShipVia",
            //    caption = "ShipCompany"
            //};

            //tp[1].editorType = "dxAutocomplete";
            //tp[1].editorOptions = new ColModelEditorOptions
            //{
            //    dataSource = new string[1]
            //};

            //JsonSerializerSettings jsonSerializerSettings = new JsonSerializerSettings
            //{
            //    NullValueHandling = NullValueHandling.Ignore,
            //};

            //string columnNames = JsonConvert.SerializeObject(tp, jsonSerializerSettings);
            //ViewBag.columnNames = columnNames;
            return View();
        }
         
        public ActionResult VirtualScrollingGrid()
        {
            return View();
        }

        public ActionResult GroupingAggregateGrid()
        {
            return View();
        }


        public ActionResult FMRowDragDrop()
        {
            return View();
        }

        public ActionResult FMHierarchyGrid()
        {
            return View();
        }

    }
}