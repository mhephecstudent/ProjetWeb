namespace Domain
{
    public class Delivery
    {
        public int DeliveryID { get; set; }
        public int OrderID { get; set; }
        public int DeliveryPartnerID { get; set; }
        public string DeliveryStatus { get; set; }
    }
}
