package com.cloudrh.service;

import java.util.List;

import com.cloudrh.domain.Candidato;
import com.cloudrh.dto.CandidatoDTO;
import com.cloudrh.dto.CandidatoNewDTO;

public interface CandidatoService {
	
	Candidato save(CandidatoNewDTO candidatoDTO);
	
	List<CandidatoDTO> findAll();
	
	void delete(Long id);
	
	List<Candidato> findByVaga(Long vagaId);
}
