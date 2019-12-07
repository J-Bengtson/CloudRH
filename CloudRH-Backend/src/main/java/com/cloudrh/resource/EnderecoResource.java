package com.cloudrh.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudrh.dto.EnderecoDTO;
import com.cloudrh.service.EnderecoService;

@RestController
@RequestMapping("/api")
public class EnderecoResource {
	
	@Autowired
	private EnderecoService enderecoService;
	
	@GetMapping(value="/endereco/candidato/{id}")
	public ResponseEntity<EnderecoDTO> findByCandidato(@PathVariable Long id) {
		EnderecoDTO endereco = enderecoService.findByCandidato(id);
		return ResponseEntity.ok().body(endereco);
	}
}
