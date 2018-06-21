
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication7
{
    class Program
    {
        static void Main(string[] args)
        {

            string connectionString = "Data Source=אמיר\\sqlexpress;Initial Catalog=northwind;Integrated Security=True";

            SqlConnection sql = null;

            try
            {
                using (sql = new SqlConnection(connectionString))
                {
                    sql.Open();

                    Console.WriteLine("Please enter min price:");
                    int.TryParse(Console.ReadLine(), out int minPrice);


                    Console.WriteLine("Please enter max price:");
                    int.TryParse(Console.ReadLine(), out int maxPrice);


                    SqlCommand query = new SqlCommand($"SELECT [ProductName], [UnitPrice] FROM [dbo].[Products] WHERE [UnitPrice] BETWEEN {minPrice} AND {maxPrice}", sql);


                    SqlDataReader sqlDataReader = query.ExecuteReader();


                    while (sqlDataReader.Read())
                    {
                        Console.WriteLine($"{sqlDataReader[0]} costs {(decimal)sqlDataReader[1]}");
                    }
                }
            }

            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }


        }
    }
}
