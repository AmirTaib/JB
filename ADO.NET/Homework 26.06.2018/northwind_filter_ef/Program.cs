using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace northwind_filter_ef
{
    class Program
    {
        static void Main(string[] args)
        {

            using (northwindEntities ef = new northwindEntities())
            {

                IEnumerable<Product> productDiscounte = ef.Products.Select(p => p);
                foreach (var item in productDiscounte)
                {
                    Console.WriteLine($"ProductName: {item.ProductName}, UnitPrice: {item.UnitPrice}");
                }

                Console.WriteLine();
                Console.WriteLine();
                Console.WriteLine();
                Console.WriteLine();
                Console.WriteLine();

                productDiscounte = ef.Products.Where(p => p.Category.CategoryName.Length == p.ProductName.Length )
                    .Select(p=> p);


                foreach (var item in productDiscounte)
                {
                    item.UnitPrice = item.UnitPrice - (item.UnitPrice / 10);
                }


                ef.SaveChanges();

                foreach (var item in productDiscounte)
                {
                    Console.WriteLine($"ProductName: {item.ProductName}, Price after 10% discount : {item.UnitPrice}");
                }

            }

        }
}
}
