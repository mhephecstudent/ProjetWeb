using System.Collections.Generic;
using System.Threading.Tasks;
using Domain; // Import User model

namespace DataAccessLayer.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByEmailAsync(string email);
        Task AddUserAsync(User user);
        Task<bool> UserExistsAsync(string email);
        Task<List<User>> GetAllUsersAsync();

    }
}
