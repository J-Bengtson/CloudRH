package com.cloudrh.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudrh.domain.Empresa;
import com.cloudrh.dto.EmpresaDTO;
import com.cloudrh.dto.EmpresaNewDTO;
import com.cloudrh.repository.EmpresaRepository;
import com.cloudrh.service.ContatoService;
import com.cloudrh.service.EmpresaService;
import com.cloudrh.service.EnderecoService;
import com.cloudrh.utils.EmpresaConvert;

@Service
public class EmpresaServiceImpl implements EmpresaService {
	
	@Autowired
	private EmpresaRepository empresaRepository;
	
	@Autowired
	private ContatoService contatoService;
	
	@Autowired
	private EnderecoService enderecoService;

	@Override
	public Empresa save(EmpresaNewDTO empresaDTO) {
		Empresa empresa = EmpresaConvert.toEntity(empresaDTO);
		Empresa result = empresaRepository.save(empresa);
		empresaDTO.getContato().setEmpresa(EmpresaConvert.toDto(result));
		contatoService.save(empresaDTO.getContato());
		empresaDTO.getEndereco().setEmpresa(EmpresaConvert.toDto(result));
		enderecoService.save(empresaDTO.getEndereco());
		return result;
	}

	@Override
	public List<EmpresaDTO> findAll() {
		List<Empresa> empresas = empresaRepository.findAll();
		List<EmpresaDTO> listResult = EmpresaConvert.toListDto(empresas);
		return listResult;
	}

	@Override
	public void delete(Long id) {
		contatoService.deleteByEmpresa(id);
		enderecoService.deleteByEmpresa(id);
		empresaRepository.deleteById(id);
	}

	
}
