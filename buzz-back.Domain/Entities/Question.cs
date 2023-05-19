using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace buzz_back.Domain.Entities
{
    public class Question
    {
        public int Id { get; set; }
        public string QuestionDescription { get; set; }
        public IEnumerable<Alternative> Alternatives { get; set; }

        public Question() { }
        public Question(string questionDescription, IEnumerable<Alternative> alternatives)
        {
            QuestionDescription = questionDescription;
            Alternatives = alternatives;

        }
    }
}
