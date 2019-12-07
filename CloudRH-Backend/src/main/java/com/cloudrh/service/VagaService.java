package com.cloudrh.service;

import java.util.List;

import com.cloudrh.domain.Vaga;
import com.cloudrh.dto.VagaDTO;

public interface VagaService {

	Vaga save(VagaDTO candidatoDTO);

	List<VagaDTO> findAll();

	void delete(Long id);
	
	Vaga findById(Long vagaId);

	List<Vaga> findByEmpresaId(Long id);
}
