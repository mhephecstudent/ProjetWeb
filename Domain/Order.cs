﻿namespace Domain
{
    public class Order
    {
        public int OrderID { get; set; }
        public int CustomerID { get; set; }
        public decimal TotalAmount { get; set; }
    }
}
