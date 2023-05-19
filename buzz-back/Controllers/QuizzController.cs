using buzz_back.Domain.Entities;
using buzz_back.Infraestructure.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Xml;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace buzz_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizzController : ControllerBase
    {
        private readonly BuzzContext _context;

        public QuizzController(BuzzContext context)
        {
            _context = context;
        }
        // GET: api/<QuizzController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quizz>>> Get()
        {
            return await _context.Quizzes.ToListAsync();
        }

        // GET api/<QuizzController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Quizz>> Get(int id)
        {   
            var Quizz = await _context.Quizzes.FirstOrDefaultAsync(q => q.Id == id);
            if (Quizz == null)
            {
                return NotFound();
            }
            return Ok(Quizz);
        }

        // POST api/<QuizzController>
        [HttpPost]
        public async Task<ActionResult<Quizz>> Post([FromBody] Quizz quizz)
        {
            try
            {
                await _context.Quizzes.AddAsync(quizz);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Get) , new { quizz.Id } , quizz);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // PUT api/<QuizzController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuizz(int id, [FromBody] Quizz quizz)
        {
            if (id != quizz.Id)
            {
                return BadRequest();
            }

            _context.Quizzes.Update(quizz);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Quizzes.Any(q => q.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE api/<QuizzController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var quizz =  await _context.Quizzes.FirstOrDefaultAsync(q => q.Id == id);
            if(quizz == null) 
            {
                return NotFound();
            }
            _context.Quizzes.Remove(quizz);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
