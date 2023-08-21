using datagrid_webapi.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DevExtremeMvcDataGrid.Controllers
{
    public class ContextMenuTest
    {
        public string text;
        public int id;
        public ContextMenuTest(int ID,string Text) {
            text = Text;
            id = ID;
        }
    }

    public class ContextMenuController : Controller
    {
        // GET: HTMLEditor
        public ActionResult PaintContextMenu()
        {
            //List<ContextMenuTest> ContextMenuTestList = new List<ContextMenuTest>();

            //ContextMenuTestList.Add(new ContextMenuTest(1, "Product1"));
            //ContextMenuTestList.Add(new ContextMenuTest(2, "Product2"));
            //ContextMenuTestList.Add(new ContextMenuTest(3, "Product3"));

            List<Product> ContextMenuTestList = new List<Product>();

            ContextMenuTestList.Add(new Product(1, "Product1"));
            ContextMenuTestList.Add(new Product(2, "Product2"));
            ContextMenuTestList.Add(new Product(3, "Product3"));


            ViewBag.ContextMenuTestList = JsonConvert.SerializeObject(ContextMenuTestList);
            return View();
        }
    }
}