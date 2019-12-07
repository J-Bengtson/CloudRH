package com.cloudrh.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudrh.domain.Endereco;
import com.cloudrh.dto.EnderecoDTO;
import com.cloudrh.repository.EnderecoRepository;
import com.cloudrh.service.EnderecoService;
import com.cloudrh.utils.EnderecoConvert;

@Service
public class EnderecoServiceImpl implements EnderecoService {

	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Override
	public Endereco save(EnderecoDTO enderecoDTO) {
		Endereco endereco = EnderecoConvert.toEntity(enderecoDTO);
		return enderecoRepository.save(endereco);
	}

	@Override
	public EnderecoDTO findByCandidato(Long id) {
		Optional<Endereco> endereco = enderecoRepository.findByCandidatoId(id);
		if(endereco.isPresent())
			return EnderecoConvert.toDto(endereco.get());
		else
			return null;
	}

	@Override
	public void deleteByCandidato(Long id) {
		Optional<Endereco> endereco = enderecoRepository.findByCandidatoId(id);
		if(endereco.isPresent())
			enderecoRepository.deleteById(endereco.get().getId());
	}

	@Override
	public EnderecoDTO findByEmpresa(Long id) {
		Optional<Endereco> endereco = enderecoRepository.findByEmpresaId(id);
		if(endereco.isPresent())
			return EnderecoConvert.toDto(endereco.get());
		else
			return null;
	}

	@Override
	public void deleteByEmpresa(Long id) {
		Optional<Endereco> endereco = enderecoRepository.findByEmpresaId(id);
		if(endereco.isPresent())
			enderecoRepository.deleteById(endereco.get().getId());
	}

	
}
