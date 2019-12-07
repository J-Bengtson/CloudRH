package com.cloudrh.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudrh.domain.Candidato;
import com.cloudrh.domain.Empresa;
import com.cloudrh.domain.Usuario;
import com.cloudrh.service.UsuarioService;

@RestController
@RequestMapping("/api")
public class UsuarioResource {

	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping(value = "/candidato/login")
	public ResponseEntity<Candidato> loginCandidato(@RequestBody Usuario usuario) {
		Candidato result = usuarioService.loginCandidato(usuario);
		return ResponseEntity.ok().body(result);
	}
	
	@PostMapping(value = "/empresa/login")
	public ResponseEntity<Empresa> loginEmpresa(@RequestBody Usuario usuario) {
		Empresa result = usuarioService.loginEmpresa(usuario);
		return ResponseEntity.ok().body(result);
	}
}
