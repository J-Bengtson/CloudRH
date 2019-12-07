package com.cloudrh.utils;

import java.util.ArrayList;
import java.util.List;

import com.cloudrh.domain.Vaga;
import com.cloudrh.dto.VagaDTO;

public class VagaConvert {

	public static Vaga toEntity(VagaDTO vagaDTO) {
		Vaga vaga = new Vaga();
		if(vagaDTO != null) {
			vaga.setId(vagaDTO.getId());
			vaga.setDataAbertura(vagaDTO.getDataAbertura());
			vaga.setDataEncerramento(vagaDTO.getDataEncerramento());
			vaga.setDescricao(vagaDTO.getDescricao());
			vaga.setJornada(vagaDTO.getJornada());
			vaga.setNumVagas(vagaDTO.getNumVagas());
			vaga.setSituacao(vagaDTO.getSituacao());
			vaga.setTurno(vagaDTO.getTurno());
			vaga.setValor(vagaDTO.getValor());
			vaga.setEmpresa(vagaDTO.getEmpresa());
		}
		return vaga;
	}
	
	public static VagaDTO toDto(Vaga vaga) {
		VagaDTO vagaDTO = new VagaDTO();
		if(vaga != null) {
			vagaDTO.setId(vaga.getId());
			vagaDTO.setDataAbertura(vaga.getDataAbertura());
			vagaDTO.setDataEncerramento(vaga.getDataEncerramento());
			vagaDTO.setDescricao(vaga.getDescricao());
			vagaDTO.setJornada(vaga.getJornada());
			vagaDTO.setNumVagas(vaga.getNumVagas());
			vagaDTO.setSituacao(vaga.getSituacao());
			vagaDTO.setTurno(vaga.getTurno());
			vagaDTO.setValor(vaga.getValor());
			vagaDTO.setEmpresa(vaga.getEmpresa());
		}
		return vagaDTO;
	}
	
	public static List<VagaDTO> toListDto(List<Vaga> vagas) {
		List<VagaDTO> vagasDTO = new ArrayList<>();
		if(!vagas.isEmpty() && vagas != null) {
			for(Vaga vaga : vagas) {
				VagaDTO dto = toDto(vaga);
				vagasDTO.add(dto);
			}
		}
		return vagasDTO;
	}
}
