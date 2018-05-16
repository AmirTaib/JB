using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_15._05._2018
{
    class Program
    {
        static void Main(string[] args)
        {
            bool flag;
            string str;
            int[] numArray = new int[8];
            int i, j;
            for (i = 0; i < numArray.Length; i++)
            {
                do
                {
                    Console.Clear();
                    Console.WriteLine($"please insert a number - step {i+1}:");
                    str = Console.ReadLine();
                    for (j = 0; j < str.Length; j++)
                    {
                        if (!(str[j] >= 48 && str[j] <= 57))
                        {
                            break;
                        }
                    }

                    flag = (j == str.Length);

                } while (!flag);

                Console.Clear();

                numArray[i] = Convert.ToInt32(str);

            }

            for (int counter = 0; counter < numArray.Length; counter++)
            {
                Console.Write($"{numArray[counter]}   ");
            }
            Console.WriteLine();

            for (int counter = 0; counter < numArray.Length-1; counter++)
            {
                if((numArray[counter]+ numArray[counter + 1]) % 2 != 0)
                {
                    Console.Write($"{numArray[counter]},{numArray[counter+1]}   ");
                }
            }
            Console.WriteLine();

        }
    }
}
