package com.cloudrh.service;

import java.util.List;

import com.cloudrh.domain.Empresa;
import com.cloudrh.dto.EmpresaDTO;
import com.cloudrh.dto.EmpresaNewDTO;

public interface EmpresaService {

	Empresa save(EmpresaNewDTO empresaDTO);
	
	List<EmpresaDTO> findAll();
	
	void delete(Long id);
}
