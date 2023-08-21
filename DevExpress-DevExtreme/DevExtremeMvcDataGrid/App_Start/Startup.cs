using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(DevExtremeMvcDataGrid.App_Start.Startup))]
namespace DevExtremeMvcDataGrid.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire-up and configuration should go here
            app.MapSignalR();
        }
    }
}