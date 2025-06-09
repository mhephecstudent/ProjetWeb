using DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ArtMarketplace.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : ControllerBase
    {
        private readonly AppDbContext _db;

        public OrdersController(AppDbContext db)
        {
            _db = db;
        }

        
        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            return Ok(await _db.Orders.ToListAsync());
        }

        
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] Order order)
        {
            _db.Orders.Add(order);
            await _db.SaveChangesAsync();
            return Ok(order);
        }
    }
}
