using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain;
using DataAccessLayer.Interfaces;
using System.Security.Cryptography;

namespace BusinessLogicLayer.Services
{
    class AuthService
    {
        private readonly IUserRepository _userRepository;

        public AuthService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<(bool Success, string Message)> RegisterAsync(User user, string password)
        {
            if (await _userRepository.UserExistsAsync(user.Email))
            {
                return (false, "Email already registered.");
            }

            user.PasswordHash = HashPassword(password);
            await _userRepository.AddUserAsync(user);
            return (true, "User registered successfully.");
        }

        public async Task<User?> LoginAsync(string email, string password)
        {
            var user = await _userRepository.GetUserByEmailAsync(email);
            if (user == null)
                return null;

            var hash = HashPassword(password);
            return user.PasswordHash == hash ? user : null;
        }

        private string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(bytes);
        }
    }
}
