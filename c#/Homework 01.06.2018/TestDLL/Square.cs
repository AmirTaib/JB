using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDLL
{
    public class Square : Shape,IDrawable
    {
        public int SideLength { get; set; }

        public Square(int sideLength) : base(5, 6)
        {
            SideLength = sideLength;
        }

        public override void ShowDeteils()
        {
            base.ShowDeteils();
            Console.WriteLine("");

            this.ShowScope();
            this.ShowSurfaceArea();
            this.Draw();
        }

        public override void ShowSurfaceArea()
        {
            int area = this.SideLength * this.SideLength;
            Console.WriteLine($"area: {area}");
        }

        public override void ShowScope()
        {
            int scope = this.SideLength * 4;
            Console.WriteLine($"scope: {scope}");
        }

        public void Draw()
        {
            for (int i = 0; i < SideLength; i++)
            {
                for (int j = 0; j < SideLength; j++)
                {
                    Console.Write("* ");
                }
                Console.WriteLine();

            }
        }
    }
}
