using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_05._06._2018
{
    public class Signature
    {
        public string FullName { get; }
        public string FullSignature { get; }

        public Signature(string fullName, string fullSignature)
        {
            FullName = fullName;
            FullSignature = fullSignature;
        }
    }

}
