using System;
using System.Collections.Generic;

namespace Senai.Cleveland.WebApi
{
    public partial class Medicos
    {
        public int Crm { get; set; }
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public bool? Ativo { get; set; }
        public int? Especialidade { get; set; }

        public Especialidades EspecialidadeNavigation { get; set; }
    }
}
