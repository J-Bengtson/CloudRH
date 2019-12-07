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

import com.cloudrh.domain.Vaga;
import com.cloudrh.dto.VagaDTO;
import com.cloudrh.service.VagaService;

@RestController
@RequestMapping("/api")
public class VagaResource {

	@Autowired
	private VagaService vagaService;
	
	@PostMapping(value="/vaga")
	public ResponseEntity<Vaga> createVaga(@RequestBody VagaDTO vagaDTO) throws URISyntaxException {
		Vaga result = vagaService.save(vagaDTO);
		return ResponseEntity.created(new URI("api/candidado/" + result.getId())).body(result);
	}
	
	@GetMapping(value="/vaga")
	public ResponseEntity<List<VagaDTO>> findAll() {
		List<VagaDTO> result = vagaService.findAll();
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping(value="/vaga/{id}")
	public ResponseEntity<Void> deleteVaga(@PathVariable Long id) {
		vagaService.delete(id);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping(value="/vaga/{id}")
	public ResponseEntity<Vaga> findById(@PathVariable Long id) {
		Vaga result = vagaService.findById(id);
		return ResponseEntity.ok().body(result);
	}
	
	@GetMapping(value="/empresa/vaga/{id}")
	public ResponseEntity<List<Vaga>> findByEmpresaId(@PathVariable Long id) {
		List<Vaga> result = vagaService.findByEmpresaId(id);
		return ResponseEntity.ok().body(result);
	}
}
