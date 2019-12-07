package com.cloudrh.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudrh.domain.Contato;
import com.cloudrh.dto.ContatoDTO;
import com.cloudrh.repository.ContatoRepository;
import com.cloudrh.service.ContatoService;
import com.cloudrh.utils.ContatoConvert;

@Service
public class ContatoServiceImpl implements ContatoService {
	
	@Autowired
	private ContatoRepository contatoRepository;

	@Override
	public Contato save(ContatoDTO contatoDTO) {
		Contato contato = ContatoConvert.toEntity(contatoDTO);
		return contatoRepository.save(contato);
	}

	@Override
	public ContatoDTO findByCandidato(Long id) {
		Optional<Contato> contato = contatoRepository.findByCandidatoId(id);
		if(contato.isPresent())
			return ContatoConvert.toDto(contato.get());
		else
			return null;
	}

	@Override
	public void deleteByCandidato(Long id) {
		Optional<Contato> contato = contatoRepository.findByCandidatoId(id);
		if(contato.isPresent())
			contatoRepository.deleteById(contato.get().getId());
	}

	@Override
	public ContatoDTO findByEmpresa(Long id) {
		Optional<Contato> contato = contatoRepository.findByEmpresaId(id);
		if(contato.isPresent())
			return ContatoConvert.toDto(contato.get());
		else
			return null;
	}

	@Override
	public void deleteByEmpresa(Long id) {
		Optional<Contato> contato = contatoRepository.findByEmpresaId(id);
		if(contato.isPresent())
			contatoRepository.deleteById(contato.get().getId());
	}
}
