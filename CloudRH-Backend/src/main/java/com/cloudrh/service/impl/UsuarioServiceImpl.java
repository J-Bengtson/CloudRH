package com.cloudrh.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cloudrh.domain.Candidato;
import com.cloudrh.domain.Empresa;
import com.cloudrh.domain.Usuario;
import com.cloudrh.repository.UsuarioRepository;
import com.cloudrh.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public Candidato loginCandidato(Usuario usuario) {
		Optional<Usuario> optional = usuarioRepository.findByEmailAndPassword(usuario.getEmail(), usuario.getPassword());
		if(optional.isPresent()) {
			return optional.get().getCandidato();
		} else {
			return null;
		}
	}

	@Override
	public Empresa loginEmpresa(Usuario usuario) {
		Optional<Usuario> optional = usuarioRepository.findByEmailAndPassword(usuario.getEmail(), usuario.getPassword());
		if(optional.isPresent()) {
			return optional.get().getEmpresa();
		} else {
			return null;
		}
	}

}
