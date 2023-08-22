using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using DevExtremeAspNetCoreApp3.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace DevExtremeAspNetCoreApp3.Controllers {

    [Route("api/[controller]")]
    public class SampleDataController : Controller {

        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Orders, loadOptions);
        }

        [HttpDelete]
        public void Delete(int key)
        {
            var employee = SampleData.Orders.First(a => a.OrderID == key);
            SampleData.Orders.Remove(employee);
            //SampleData.SaveChanges();
        }

    }
}