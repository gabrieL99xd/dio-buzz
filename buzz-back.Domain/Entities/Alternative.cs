using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace buzz_back.Domain.Entities
{
    public class Alternative
    {
        public int Id { get; set; }
        public string AlternativeDescription { get; set; }
        public bool IsCorrect { get; set; }

        public Alternative() { }
        public Alternative(string alternativeDescription , bool isCorrect) 
        {
            AlternativeDescription = alternativeDescription;
            IsCorrect = isCorrect;
        }

    }
}
