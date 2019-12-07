package com.cloudrh.service;

import com.cloudrh.domain.Candidato;
import com.cloudrh.domain.Empresa;
import com.cloudrh.domain.Usuario;

public interface UsuarioService {

	Candidato loginCandidato(Usuario usuario);
	
	Empresa loginEmpresa(Usuario usuario);
}
