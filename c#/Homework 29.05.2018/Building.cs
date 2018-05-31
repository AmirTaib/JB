using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_29._05._2018
{
    abstract class Building
    {
        public int Floors { get; set; }
        public bool Elevators { get; set; }

        public virtual string GetDetails()
        {
            string elevatorsText;

            if (this.Elevators)
            {
                elevatorsText = "This building has an elevator, \n";

            }
            else
            {
                elevatorsText = "There is no in elevator in this building \n";
            }

            return $" This buildin contains {Floors} floors \n {elevatorsText}";
        }

        public Building(int floors, bool elevators)
        {
            Floors = floors;
            Elevators = elevators;
        }

    }
}
