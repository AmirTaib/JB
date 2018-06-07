using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_05._06._2018
{
    class Program
    {
        static void Main(string[] args)
        {
            Person[] peopleArray=new Person[7];
            Signature[] signatureArray=new Signature[7];

            peopleArray[0] = new Person { FullName = "Bob Arnold", WantToSign = true };
            peopleArray[1] = new Person { FullName = "Alice Avery", WantToSign = true };
            peopleArray[2] = new Person { FullName = "Albert Bailey", WantToSign = true };
            peopleArray[3] = new Person { FullName = "Matt Baker", WantToSign = false };
            peopleArray[4] = new Person { FullName = "Carol Campbell", WantToSign = true };
            peopleArray[5] = new Person { FullName = "Kevin Brown", WantToSign = false };
            peopleArray[6] = new Person { FullName = "Lisa Bower", WantToSign = true };

            peopleArray[0].SignaturesEventHandler += (str) => "Bob Arnold".ToLower();
            peopleArray[2].SignaturesEventHandler += (str) => "AliceAvery";
            peopleArray[1].SignaturesEventHandler += (str) => "A B";
            peopleArray[3].SignaturesEventHandler += (str) => "M Baker";
            peopleArray[4].SignaturesEventHandler += (str) => "Carol Campbell".ToUpper();
            peopleArray[5].SignaturesEventHandler += (str) => "Brown.Kevin";
            peopleArray[6].SignaturesEventHandler += (str) => "Lisa".ToLower();


            for (int i = 0; i < peopleArray.Length; i++)
            {
                signatureArray[i] = new Signature(peopleArray[i].FullName, peopleArray[i].SignAction());
            }

            foreach (Signature signature in signatureArray)
            {               
                Console.WriteLine($"{signature.FullName},   {signature.FullSignature}");
            }

        }
    }
}
