package com.cloudrh.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cloudrh.domain.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

	Optional<Endereco> findByCandidatoId(Long id);
	
	Optional<Endereco> findByEmpresaId(Long id);
}
