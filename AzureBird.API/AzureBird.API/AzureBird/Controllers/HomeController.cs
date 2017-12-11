using System;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AzureBird.Models;
using lib12.Collections;
using lib12.Data.Random;

namespace AzureBird.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var models = CollectionFactory.CreateEnumerable(Rand.NextInt(7, 15), x => new Content
            {
                Date = Rand.NextDateTime(DateTime.Now.AddDays(-7), DateTime.Now),
                Author = Rand.NextFullName(),
                Text = FakeData.LoremIpsumParagraph
            }).OrderByDescending(x => x.Date);
            return View(models);
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
