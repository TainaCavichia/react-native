using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repositories
{
    public class MedicosRepository
    {
        public List<Medicos> Listar()
        {
            using(M_ClevelandContext ctx = new M_ClevelandContext())
            {
                return ctx.Medicos.ToList();
            }
        }
    }
}
