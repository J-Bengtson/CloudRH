package com.cloudrh.resource;

import java.net.URI;
import java.net.URISyntaxException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudrh.domain.RelcCandVaga;
import com.cloudrh.service.RelcCandVagaService;

@RestController
@RequestMapping("/api")
public class RelcCandVagaResource {

	@Autowired
	private RelcCandVagaService relcCandVagaService;
	
	@PostMapping(value="/candidato-vaga")
	public ResponseEntity<RelcCandVaga> create(@RequestBody RelcCandVaga relcCandVaga) throws URISyntaxException {
		RelcCandVaga result = relcCandVagaService.save(relcCandVaga);
		return ResponseEntity.created(new URI("api/candidatos-vaga/" + result.getVaga())).body(result);
	}
}
