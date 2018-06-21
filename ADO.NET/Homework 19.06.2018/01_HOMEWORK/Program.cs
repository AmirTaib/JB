using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_HOMEWORK
{
    class Program
    {
        static void Main(string[] args)
        {
            List<dynamic> customerList = new List<dynamic>();

            string connectionString = @"Data Source=אמיר\sqlexpress;Initial Catalog=northwind;Integrated Security=True";

            SqlConnection sql = null;

            try
            {
                using (sql = new SqlConnection(connectionString))
                {
                    sql.Open();
                    

                    SqlCommand query = new SqlCommand("SELECT [CustomerID],[CompanyName],[Address],[City],[Region],[Country] FROM Customers", sql);


                    SqlDataReader sqlDataReader = query.ExecuteReader();



                    while (sqlDataReader.Read())
                    {
                        customerList.Add(new
                        {
                            ID = sqlDataReader[0],
                            CompanyName = sqlDataReader[1],
                            Address = sqlDataReader[2],
                            City = sqlDataReader[3],
                            Region = sqlDataReader[4],
                            Country = sqlDataReader[5]
                        });


                    }

                    foreach (var item in customerList)
                    {
                        Console.WriteLine($"ID-{item.ID}\nCompany name:{item.CompanyName}\nAddress:{item.Address}\nCity:{item.City}\nRegion:{item.Region}\nCountry:{item.Country}");
                        Console.WriteLine();
                        Console.WriteLine();
                    }

                    Console.Read();

                }
            }

            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}


