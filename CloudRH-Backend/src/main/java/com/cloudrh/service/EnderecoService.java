package com.cloudrh.service;

import com.cloudrh.domain.Endereco;
import com.cloudrh.dto.EnderecoDTO;

public interface EnderecoService {

	Endereco save(EnderecoDTO enderecoDTO);
	
	EnderecoDTO findByCandidato(Long id);
	
	void deleteByCandidato(Long id);
	
	EnderecoDTO findByEmpresa(Long id);
	
	void deleteByEmpresa(Long id);
}
