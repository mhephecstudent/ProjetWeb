using System.Diagnostics.CodeAnalysis;

namespace Domain
{
    public class User
    {
        public int UserID { get; set; }
        public required string FullName { get; set; }
        public required string Email { get; set; }
        public required string PasswordHash { get; set; }
        public required string Role { get; set; }
    }
}
