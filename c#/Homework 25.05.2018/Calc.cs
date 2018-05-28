using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_25._05._2018
{
    static class Calc
    {

        private static DateTime startDate;


        public static int GetSub(int num1, int num2)
        {
            return num1+num2;
        }
        public static int GetSub(int num1, int num2, int num3)
        {
            return num1 + num2 + num3;
        }
        public static double GetSub(double num1, double num2)
        {
            return num1 + num2;
        }

        static Calc()
        {
            startDate = DateTime.Now;
            Console.WriteLine();
            Console.WriteLine($" This is the first use of the calc \n The time now is {startDate}");
            Console.WriteLine();
        }
    }
}
