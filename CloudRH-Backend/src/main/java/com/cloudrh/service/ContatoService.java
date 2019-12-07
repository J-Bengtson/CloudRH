package com.cloudrh.service;

import com.cloudrh.domain.Contato;
import com.cloudrh.dto.ContatoDTO;

public interface ContatoService {

	Contato save(ContatoDTO contatoDTO);
	
	ContatoDTO findByCandidato(Long id);
	
	void deleteByCandidato(Long id);
	
	ContatoDTO findByEmpresa(Long id);
	
	void deleteByEmpresa(Long id);
}
