package com.cloudrh.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cloudrh.domain.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, Long> {

	Optional<Vaga> findById(Long id);

	List<Vaga> findByEmpresaId(Long id);
}

