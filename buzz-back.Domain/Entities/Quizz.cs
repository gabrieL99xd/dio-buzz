using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace buzz_back.Domain.Entities
{
    public class Quizz
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public IEnumerable<Question> Questions { get; set; }

        public Quizz(){ }
        public Quizz(string title , string description , IEnumerable<Question> questions)
        {
            Title = title;
            Description = description;
            Questions = questions;
        }
    }
}
