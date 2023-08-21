using Microsoft.AspNet.SignalR;

namespace DevExtremeMvcDataGrid.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(string name, string message)
        {
            // Call the broadcastMessage method to send the message to all connected clients
            Clients.All.broadcastMessage(name, message);
        }
    }
}