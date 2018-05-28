using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_25._05._2018
{
    class Program
    {
        static void Main(string[] args)
        {

            Random rnd = new Random();
            
            int int1 = rnd.Next(0, 101);
            int int2 = rnd.Next(0, 101);
            int int3 = rnd.Next(0, 101);

            double d1 = rnd.Next(0, 101);
            double d2 = rnd.Next(0, 101);

            Console.WriteLine(" Call to function with two int number:");
            Console.WriteLine($" int1: {int1},   int2: {int2}, \n sum of them is:{Calc.GetSub(int1, int2)}");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine(" Call to function with three int number:");
            Console.WriteLine($" int1: {int1},   int2: {int2},   int3: {int3}, \n sum of them is:{Calc.GetSub(int1, int2, int3)}");
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine(" Call to function with two int number:");
            Console.WriteLine($" d1: {d1},   d2: {d2}, \n sum of them is:{Calc.GetSub(d1, d2)}");
            Console.WriteLine();
            Console.WriteLine();


        }
    }
}
