package com.cloudrh.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudrh.domain.Candidato;
import com.cloudrh.dto.CandidatoDTO;
import com.cloudrh.dto.CandidatoNewDTO;
import com.cloudrh.repository.CandidatoRepository;
import com.cloudrh.service.CandidatoService;
import com.cloudrh.service.ContatoService;
import com.cloudrh.service.EnderecoService;
import com.cloudrh.utils.CandidatoConvert;

@Service
public class CandidatoServiceImpl implements CandidatoService {

	@Autowired
	private CandidatoRepository candidatoRepository;
	
	@Autowired
	private ContatoService contatoService;
	
	@Autowired
	private EnderecoService enderecoService;

	@Override
	public Candidato save(CandidatoNewDTO candidatoDTO) {
		Candidato candidato = CandidatoConvert.toEntity(candidatoDTO);
		Candidato result = candidatoRepository.save(candidato);
		candidatoDTO.getContato().setCandidato(CandidatoConvert.toDto(result));
		contatoService.save(candidatoDTO.getContato());
		candidatoDTO.getEndereco().setCandidato(CandidatoConvert.toDto(result));
		enderecoService.save(candidatoDTO.getEndereco());
		return result;
	}

	@Override
	public List<CandidatoDTO> findAll() {
		List<Candidato> candidatos = candidatoRepository.findAll();
		List<CandidatoDTO> listResult = CandidatoConvert.toListDto(candidatos);
		return listResult;
	}

	@Override
	public void delete(Long id) {
		contatoService.deleteByCandidato(id);
		enderecoService.deleteByCandidato(id);
		candidatoRepository.deleteById(id);
	}

	@Override
	public List<Candidato> findByVaga(Long vagaId) {
		return candidatoRepository.findByVaga(vagaId);
	}
	
	
}
