package com.cloudrh.resource;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudrh.domain.Candidato;
import com.cloudrh.dto.CandidatoDTO;
import com.cloudrh.dto.CandidatoNewDTO;
import com.cloudrh.service.CandidatoService;

@RestController
@RequestMapping("/api")
public class CandidatoResource {
	
	@Autowired
	private CandidatoService candidatoService;
	
	@PostMapping(value="/candidato")
	public ResponseEntity<Candidato> createCandidato(@RequestBody CandidatoNewDTO candidatoDTO) throws URISyntaxException {
		Candidato result = candidatoService.save(candidatoDTO);
		return ResponseEntity.created(new URI("api/candidado/" + result.getId())).body(result);
	}
	
	@GetMapping(value="/candidato")
	public ResponseEntity<List<CandidatoDTO>> findAll() {
		List<CandidatoDTO> result = candidatoService.findAll();
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping(value="/candidato/{id}")
	public ResponseEntity<Void> deleteCandidato(@PathVariable Long id) {
		candidatoService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping(value="/candidatos/vaga/{id}")
	public ResponseEntity<List<Candidato>> getCandidatosPorVaga(@PathVariable Long id) {
		List<Candidato> result = candidatoService.findByVaga(id);
		return ResponseEntity.ok().body(result);
	}
}
