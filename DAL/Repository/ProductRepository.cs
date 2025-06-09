using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain;
using DataAccessLayer.Interfaces;

using DAL;

namespace DataAccessLayer.Repository
{
    using DAL;
    using Domain;

    namespace Application.Interfaces
    {
        public class ProductRepository : IProductRepository
        {
            private readonly AppDbContext _context;

            public ProductRepository(AppDbContext context)
            {
                _context = context;
            }

            public async Task<List<Product>> GetAllAsync()
            {
                return await _context.Products.ToListAsync();
            }

            public async Task<Product?> GetByIdAsync(int id)
            {
                return await _context.Products.FindAsync(id);
            }

            public async Task<Product> AddAsync(Product product)
            {
                _context.Products.Add(product);
                await _context.SaveChangesAsync();
                return product;
            }

            public async Task<Product?> UpdateAsync(int id, Product updatedProduct)
            {
                var existing = await _context.Products.FindAsync(id);
                if (existing == null) return null;

                existing.Title = updatedProduct.Title;
                existing.Description = updatedProduct.Description;
                existing.Price = updatedProduct.Price;
                existing.Status = updatedProduct.Status;

                await _context.SaveChangesAsync();
                return existing;
            }
        }
    }

}
