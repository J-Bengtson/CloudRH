package com.cloudrh.utils;

import java.util.ArrayList;
import java.util.List;

import com.cloudrh.domain.Empresa;
import com.cloudrh.dto.EmpresaDTO;
import com.cloudrh.dto.EmpresaNewDTO;

public class EmpresaConvert {

	public static Empresa toEntity(EmpresaDTO empresaDTO) {
		Empresa empresa = new Empresa();
		if(empresaDTO != null) {
			empresa.setId(empresaDTO.getId());
			empresa.setCnpj(empresaDTO.getCnpj());
			empresa.setNome(empresaDTO.getNome());
			empresa.setRazaoSocial(empresaDTO.getRazaoSocial());
		}
		return empresa;
	}
	
	public static Empresa toEntity(EmpresaNewDTO empresaDTO) {
		Empresa empresa = new Empresa();
		if(empresaDTO != null) {
			empresa.setId(empresaDTO.getId());
			empresa.setCnpj(empresaDTO.getCnpj());
			empresa.setNome(empresaDTO.getNome());
			empresa.setRazaoSocial(empresaDTO.getRazaoSocial());
		}
		return empresa;
	}
	
	public static EmpresaDTO toDto(Empresa empresa) {
		EmpresaDTO empresaDTO = new EmpresaDTO();
		if(empresa != null) {
			empresaDTO.setId(empresa.getId());
			empresaDTO.setCnpj(empresa.getCnpj());
			empresaDTO.setNome(empresa.getNome());
			empresaDTO.setRazaoSocial(empresa.getRazaoSocial());
		}
		return empresaDTO;
	}
	
	public static List<EmpresaDTO> toListDto(List<Empresa> empresas) {
		List<EmpresaDTO> listEmpresas = new ArrayList<>();
		if(empresas != null && !empresas.isEmpty()) {
			for(Empresa c : empresas) {
				EmpresaDTO dto = toDto(c);
				listEmpresas.add(dto);
			}
		}
		return listEmpresas;
	}
}
