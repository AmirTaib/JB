using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_05._06._2018
{

    public delegate string SignaturesHandler(string FullName);

    public class Person
    {

        public event SignaturesHandler SignaturesEventHandler;

        

        public string FullName { get; set; }
        public bool WantToSign { get; set; }



        public string SignAction()
        {
            if (WantToSign == true)
            {
                if (SignaturesEventHandler != null)
                {
                    return SignaturesEventHandler(FullName) ;
                }
                
            }

            return null;
        }
    }

}
