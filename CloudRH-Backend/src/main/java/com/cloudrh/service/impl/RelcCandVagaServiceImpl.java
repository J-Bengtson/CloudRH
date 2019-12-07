package com.cloudrh.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudrh.domain.RelcCandVaga;
import com.cloudrh.repository.RelcCandVagaRepository;
import com.cloudrh.service.RelcCandVagaService;

@Service
public class RelcCandVagaServiceImpl implements RelcCandVagaService {

	@Autowired
	private RelcCandVagaRepository relcCandVagaRepository;
	
	@Override
	public RelcCandVaga save(RelcCandVaga relcCandVaga) {
		return relcCandVagaRepository.save(relcCandVaga);
	}
	
}
