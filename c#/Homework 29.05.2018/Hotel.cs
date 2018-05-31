using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_29._05._2018
{
    class Hotel : Building
    {
        

        public int AllRooms { get; set; }
        public int RoomsAreTaken { get; set; }
        public ServiceOfHotel[] Service { get; set; } = new ServiceOfHotel[3];
      

        public override string GetDetails()
        {
            return base.GetDetails() + $" This buildin contains {AllRooms} Rooms \n" +
                $" There are {RoomsAreTaken} rooms taken \n" +
                $" The facilities at this hotel are: \n" +
                $" 1- {Service[0]}\n" +
                $" 2- {Service[1]}\n" +
                $" 3- {Service[2]}";
        }

        public Hotel(int floors,bool elevators) :base(floors,elevators)
        {
            AllRooms = 100;
            RoomsAreTaken = 70;

            Service[0] = ServiceOfHotel.Breakfast;
            Service[1] = ServiceOfHotel.Gym;
            Service[2] = ServiceOfHotel.Spa;


            
        }


    }
}
