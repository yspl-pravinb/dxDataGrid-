using Newtonsoft.Json;
using System;
using System.IO;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace DevExtremeMvcDataGrid.Controllers
{
    public class FileUploadController : Controller
    {
        // GET: FileUpload
        public ActionResult PaintAsyncFileUpload()
        {
            return View();
        }

        public ActionResult PaintChunkFileUpload()
        {
            return View();
        }

        public ActionResult PaintDataGridWithUpload()
        {
            return View();
        }
        public ActionResult Save()
        {
            try
            {
                if (System.Web.HttpContext.Current.Request.Files.AllKeys.Length > 0)
                {

                    var httpPostedFile = System.Web.HttpContext.Current.Request.Files["file"];

                    var fileSave = System.Web.HttpContext.Current.Server.MapPath("UploadedFiles");
                    var fileSavePath = Path.Combine(fileSave, httpPostedFile.FileName);
                    if (!System.IO.File.Exists(fileSavePath))
                    {
                        httpPostedFile.SaveAs(fileSavePath);
                    }
                }
                return View("PaintAsyncFileUpload");
            }
            catch (Exception ex)
            {
                return View("PaintAsyncFileUpload");

            }
        }


        [HttpPost]
        public ActionResult UploadChunk(HttpPostedFileBase file)
        {
            var chunkMetadata = Request.Form["chunkMetadata"];

            try
            {
                if (!string.IsNullOrEmpty(chunkMetadata))
                {
                    var metaDataObject = JsonConvert.DeserializeObject<ChunkMetadata>(chunkMetadata);
                    string uploadPath = Server.MapPath("UploadedFiles");
                    if (!Directory.Exists(uploadPath))
                    {
                        Directory.CreateDirectory(uploadPath);
                    }
                    var chunk = Request.Files[0];

                    string fileName = Path.GetFileName(metaDataObject.FileName);
                    string filePath = Path.Combine(uploadPath, fileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Append))
                    {
                        chunk.InputStream.CopyTo(fileStream);
                    }
                }
            }
            catch
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            return new EmptyResult();
        }
        public class ChunkMetadata
        {
            public int Index { get; set; }
            public int TotalCount { get; set; }
            public int FileSize { get; set; }
            public string FileName { get; set; }
            public string FileType { get; set; }
            public Guid FileGuid { get; set; }
        }


    }
}
