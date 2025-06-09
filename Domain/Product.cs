namespace Domain
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string? Status { get; set; }

        public int ArtisanId { get; set; }
        public string? ModifiedBy { get; set; }
    }
}
