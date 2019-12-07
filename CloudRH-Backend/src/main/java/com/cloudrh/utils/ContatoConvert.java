package com.cloudrh.utils;

import com.cloudrh.domain.Contato;
import com.cloudrh.dto.ContatoDTO;

public class ContatoConvert {
	
	public static Contato toEntity(ContatoDTO contatoDTO) {
		Contato contato = new Contato();
		if(contatoDTO != null) {
			contato.setId(contatoDTO.getId());
			contato.setTelefone1(contatoDTO.getTelefone1());
			contato.setTelefone2(contatoDTO.getTelefone2());
			contato.setEmail(contatoDTO.getEmail());
			if(contatoDTO.getCandidato() != null) {
				contato.setCandidato(CandidatoConvert.toEntity(contatoDTO.getCandidato()));
			}
			if(contatoDTO.getEmpresa() != null) {
				contato.setEmpresa(EmpresaConvert.toEntity(contatoDTO.getEmpresa()));
			}
		}
		return contato;
	}
	
	public static ContatoDTO toDto(Contato contato) {
		ContatoDTO contatoDTO = new ContatoDTO();
		if(contato != null) {
			contatoDTO.setId(contato.getId());
			contatoDTO.setTelefone1(contato.getTelefone1());
			contatoDTO.setTelefone2(contato.getTelefone2());
			contatoDTO.setEmail(contato.getEmail());
			if(contato.getCandidato() != null) {
				contatoDTO.setCandidato(CandidatoConvert.toDto(contato.getCandidato()));
			}
			if(contato.getEmpresa() != null) {
				contatoDTO.setEmpresa(EmpresaConvert.toDto(contato.getEmpresa()));
			}
		}
		return contatoDTO;
	}
}
