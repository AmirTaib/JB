using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDLL
{
    public abstract class Shape
    {
        public int X { get; set; }
        public int Y { get; set; }
        ColorEnum Color;

        public Shape(int x, int y)
        {
            X = x;
            Y = y;
            Color = ColorEnum.Aqua;
        }

        public virtual void ShowDeteils()
        {
            Console.WriteLine("Base ShowDeteils Func");
        }

        public abstract void ShowSurfaceArea();

        public abstract void ShowScope();
    }

    

    

}
