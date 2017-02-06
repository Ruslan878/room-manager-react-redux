using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RoomManager.Models
{
    public class MemberModel
    {
        public int id { get; set; }

        public string Name { get; set; }

        public int Order { get; set; }

        public RoomModel Room { get; set; }
    }
}