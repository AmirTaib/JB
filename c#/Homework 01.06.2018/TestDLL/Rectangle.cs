using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestDLL
{
    public class Rectangle : Shape, IDrawable
    {
        public int Width { get; set; }
        public int Height { get; set; }


        public Rectangle(int width, int height) : base(5, 6)
        {
            Width = width;
            Height = height;
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
            int area = this.Width * this.Height;
            Console.WriteLine($"area: {area}");
        }

        public override void ShowScope()
        {
            int scope = (this.Width + this.Height) * 2;
            Console.WriteLine($"scope: {scope}");
        }

        public void Draw()
        {
            for (int i = 0; i < Height; i++)
            {
                for (int j = 0; j < Width; j++)
                {
                    Console.Write("* ");
                }
                Console.WriteLine();

            }
        }
    }
}
