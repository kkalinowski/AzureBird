using System.Collections.Generic;
using AzureBird.API.Models;
using Microsoft.AspNetCore.Mvc;
using lib12.Data.Random;

namespace AzureBird.API.Controllers
{
    [Route("api/[controller]")]
    public class ContentController : Controller
    {
        [HttpGet]
        public IEnumerable<Content> Get()
        {
            return Rand.NextArrayOf<Content>(Rand.NextInt(7, 15));
        }
    }
}
