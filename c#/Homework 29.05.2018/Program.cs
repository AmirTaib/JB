using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_29._05._2018
{
    class Program
    {
        static void Main(string[] args)
        {
            Building[] hotels = new Hotel[5];

            hotels[0] = new Hotel(5, false);
            hotels[1] = new Hotel(6, false);
            hotels[2] = new Hotel(7, true);
            hotels[3] = new Hotel(8, true);
            hotels[4] = new Hotel(9, true);

            foreach (Hotel item in hotels)
            {
                Console.WriteLine($"{item.GetDetails()}");
                Console.WriteLine();
                Console.WriteLine();
            }




        }
    }
}
