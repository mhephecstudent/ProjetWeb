using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using DAL;
using Domain;
using DataAccessLayer.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ArtMarketplace.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _db;
        private readonly IProductRepository _repo;

        public ProductsController(AppDbContext db, IProductRepository repo)
        {
            _db = db;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> getProducts()
        {
            return Ok(await _db.Products.ToListAsync());
        }

        [Authorize(Roles = "Artisan")]
        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] Product product)
        {
            var user = HttpContext.User.Identity?.Name;
            var role = HttpContext.User.FindFirst(ClaimTypes.Role)?.Value;
            Console.WriteLine($"User: {user}, Role: {role}");

            if (role != "Artisan")
                return Unauthorized("You must be an Artisan to create products.");

            _db.Products.Add(product);
            await _db.SaveChangesAsync();
            return Ok(product);
        }
        [Authorize(Roles = "Administrator,Artisan")]
        [HttpPut("{id}")]
        public async Task<IActionResult> ModifyProduct(int id, [FromBody] Product updatedProduct)
        {
            var role = HttpContext.User.FindFirst(ClaimTypes.Role)?.Value;
            if (role != "Administrator" && role != "Artisan")
                return Unauthorized("Only Administrators or Artisans can modify products.");
            updatedProduct.ModifiedBy = HttpContext.User.Identity?.Name ?? "unknown";
            var modified = await _repo.UpdateAsync(id, updatedProduct);
            if (modified == null)
                return NotFound($"Product with ID {id} not found.");
            
            return Ok(modified);
        }


    }
}
