namespace Domain
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int CustomerID { get; set; }
        public int ProductID { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }
    }
}
