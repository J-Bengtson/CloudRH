package com.cloudrh.utils;

import java.util.ArrayList;
import java.util.List;

import com.cloudrh.domain.Candidato;
import com.cloudrh.dto.CandidatoDTO;
import com.cloudrh.dto.CandidatoNewDTO;

public class CandidatoConvert {

	public static Candidato toEntity(CandidatoDTO candidatoDTO) {
		Candidato candidato = new Candidato();
		if(candidatoDTO != null) {
			candidato.setId(candidatoDTO.getId());
			candidato.setCpf(candidatoDTO.getCpf());
			candidato.setNome(candidatoDTO.getNome());
			candidato.setGenero(candidatoDTO.getGenero());
		}
		return candidato;
	}
	
	public static Candidato toEntity(CandidatoNewDTO candidatoDTO) {
		Candidato candidato = new Candidato();
		if(candidatoDTO != null) {
			candidato.setId(candidatoDTO.getId());
			candidato.setCpf(candidatoDTO.getCpf());
			candidato.setNome(candidatoDTO.getNome());
			candidato.setGenero(candidatoDTO.getGenero());
		}
		return candidato;
	}
	
	public static CandidatoDTO toDto(Candidato candidato) {
		CandidatoDTO candidatoDTO = new CandidatoDTO();
		if(candidato != null) {
			candidatoDTO.setId(candidato.getId());
			candidatoDTO.setCpf(candidato.getCpf());
			candidatoDTO.setNome(candidato.getNome());
			candidatoDTO.setGenero(candidato.getGenero());
		}
		return candidatoDTO;
	}
	
	public static List<CandidatoDTO> toListDto(List<Candidato> candidatos) {
		List<CandidatoDTO> listCandidatos = new ArrayList<>();
		if(candidatos != null && !candidatos.isEmpty()) {
			for(Candidato c : candidatos) {
				CandidatoDTO dto = toDto(c);
				listCandidatos.add(dto);
			}
		}
		return listCandidatos;
	}
}
