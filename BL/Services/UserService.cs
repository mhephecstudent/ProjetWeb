using Domain;
using DataAccessLayer.Interfaces;
using Dtos;
using Microsoft.AspNetCore.Identity;



namespace BusinessLogicLayer.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> RegisterUserAsync(RegisterRequestDto registerRequest)
        {
            if (await _userRepository.UserExistsAsync(registerRequest.Email))
            {
                return false;
            }

            var user = new User
            {
                FullName = registerRequest.FullName,
                Email = registerRequest.Email,
                Role = registerRequest.Role,
                PasswordHash = "TEMP" // 👈 Set something temporary just to satisfy the required rule
            };

            var passwordHasher = new PasswordHasher<User>();
            user.PasswordHash = passwordHasher.HashPassword(user, registerRequest.Password);

            await _userRepository.AddUserAsync(user);
            return true;
        }



        public async Task<List<UserDto>> GetAllUsersAsync()
        {
            var users = await _userRepository.GetAllUsersAsync();

            // Map each User to a UserDto
            var userDtos = users.Select(u => new UserDto
            {
                UserID = u.UserID,
                FullName = u.FullName,
                Email = u.Email,
                Role = u.Role
            }).ToList();

            return userDtos;
        }
        public async Task<User> LoginUserAsync(LoginRequestDto loginRequest)
        {
            var user = await _userRepository.GetUserByEmailAsync(loginRequest.Email);

            if (user == null)
                return null;

            var passwordHasher = new PasswordHasher<User>();
            var result = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, loginRequest.Password);

            if (result == PasswordVerificationResult.Success)
                return user;

            return null;
        }

    }
}
