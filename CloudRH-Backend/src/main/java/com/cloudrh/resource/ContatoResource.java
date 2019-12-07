package com.cloudrh.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudrh.dto.ContatoDTO;
import com.cloudrh.service.ContatoService;

@RestController
@RequestMapping("/api")
public class ContatoResource {
	
	@Autowired
	private ContatoService contatoService;
	
	@GetMapping(value="/contato/candidato/{id}")
	public ResponseEntity<ContatoDTO> findByCandidato(@PathVariable Long id) {
		ContatoDTO result = contatoService.findByCandidato(id);
		return ResponseEntity.ok().body(result);
	}
}
