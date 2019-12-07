package com.cloudrh.utils;

import com.cloudrh.domain.Endereco;
import com.cloudrh.dto.EnderecoDTO;

public class EnderecoConvert {

	public static Endereco toEntity(EnderecoDTO enderecoDTO) {
		Endereco endereco = new Endereco();
		if(enderecoDTO != null) {
			endereco.setLogradouro(enderecoDTO.getLogradouro());
			endereco.setCep(enderecoDTO.getCep());
			endereco.setNumero(enderecoDTO.getNumero());
			endereco.setComplemento(enderecoDTO.getComplemento());
			endereco.setCidade(enderecoDTO.getCidade());
			endereco.setUf(enderecoDTO.getUf());
			endereco.setBairro(enderecoDTO.getBairro());
			if(enderecoDTO.getCandidato() != null) {
				endereco.setCandidato(CandidatoConvert.toEntity(enderecoDTO.getCandidato()));
			}
			if(enderecoDTO.getEmpresa() != null) {
				endereco.setEmpresa(EmpresaConvert.toEntity(enderecoDTO.getEmpresa()));
			}
		}
		return endereco;
	}
	
	public static EnderecoDTO toDto(Endereco endereco) {
		EnderecoDTO enderecoDTO = new EnderecoDTO();
		if(endereco != null) {
			enderecoDTO.setLogradouro(endereco.getLogradouro());
			enderecoDTO.setCep(endereco.getCep());
			enderecoDTO.setNumero(endereco.getNumero());
			enderecoDTO.setComplemento(endereco.getComplemento());
			enderecoDTO.setCidade(endereco.getCidade());
			enderecoDTO.setUf(endereco.getUf());
			enderecoDTO.setBairro(endereco.getBairro());
			if(enderecoDTO.getCandidato() != null) {
				enderecoDTO.setCandidato(CandidatoConvert.toDto(endereco.getCandidato()));
			}
			if(endereco.getEmpresa() != null) {
				enderecoDTO.setEmpresa(EmpresaConvert.toDto(endereco.getEmpresa()));
			}
		}
		return enderecoDTO;
	}
}
