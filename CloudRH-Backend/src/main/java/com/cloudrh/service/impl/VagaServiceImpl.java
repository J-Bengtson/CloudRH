package com.cloudrh.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudrh.domain.Vaga;
import com.cloudrh.dto.VagaDTO;
import com.cloudrh.repository.VagaRepository;
import com.cloudrh.service.VagaService;
import com.cloudrh.utils.VagaConvert;

@Service
public class VagaServiceImpl implements VagaService {

	@Autowired
	private VagaRepository vagaRepository;

	@Override
	public Vaga save(VagaDTO vagaDTO) {
		Vaga vaga = VagaConvert.toEntity(vagaDTO);
		Vaga result = vagaRepository.save(vaga);
		return result;
	}

	@Override
	public List<VagaDTO> findAll() {
		List<Vaga> vagas = vagaRepository.findAll();
		List<VagaDTO> listResult = VagaConvert.toListDto(vagas);
		return listResult;
	}

	@Override
	public void delete(Long id) {
		vagaRepository.deleteById(id);
	}

	@Override
	public Vaga findById(Long vagaId) {
		return vagaRepository.findById(vagaId).get();
	}

	@Override
	public List<Vaga> findByEmpresaId(Long id) {
		return vagaRepository.findByEmpresaId(id);
	}
}
