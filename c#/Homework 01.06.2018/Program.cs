using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestDLL;

namespace Homework_01._06._2018
{
    class Program
    {
        static void Main(string[] args)
        {
            Square square = new Square(10);

            square.ShowDeteils();

            Console.WriteLine();
            Rectangle rectangle = new Rectangle(10, 20);
            rectangle.ShowDeteils();

        }
    }
}
