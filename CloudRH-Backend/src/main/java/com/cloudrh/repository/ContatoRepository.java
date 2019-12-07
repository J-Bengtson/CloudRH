package com.cloudrh.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloudrh.domain.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
	
	Optional<Contato> findByCandidatoId(Long id);
	
	Optional<Contato> findByEmpresaId(Long id);
}
