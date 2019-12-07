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

import com.cloudrh.domain.Empresa;
import com.cloudrh.dto.EmpresaDTO;
import com.cloudrh.dto.EmpresaNewDTO;
import com.cloudrh.service.EmpresaService;

@RestController
@RequestMapping("/api")
public class EmpresaResource {

	@Autowired
	private EmpresaService empresaService;
	
	@PostMapping(value="/empresa")
	public ResponseEntity<Empresa> createEmpresa(@RequestBody EmpresaNewDTO empresaDTO) throws URISyntaxException {
		Empresa result = empresaService.save(empresaDTO);
		return ResponseEntity.created(new URI("api/candidado/" + result.getId())).body(result);
	}
	
	@GetMapping(value="/empresa")
	public ResponseEntity<List<EmpresaDTO>> findAll() {
		List<EmpresaDTO> result = empresaService.findAll();
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping(value="/empresa/{id}")
	public ResponseEntity<Void> deleteEmpresa(@PathVariable Long id) {
		empresaService.delete(id);
		return ResponseEntity.ok().build();
	}
}
