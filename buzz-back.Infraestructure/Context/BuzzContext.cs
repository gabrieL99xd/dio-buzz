using buzz_back.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace buzz_back.Infraestructure.Context
{
    public class BuzzContext : DbContext
    {
        public DbSet<Quizz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Alternative> Alternatives { get; set; }

        public BuzzContext(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Quizz>()
                .Navigation(e => e.Questions)
                .AutoInclude();
           
            modelBuilder.Entity<Question>()
                .Navigation(e => e.Alternatives)
                .AutoInclude();
        }
    }
}
