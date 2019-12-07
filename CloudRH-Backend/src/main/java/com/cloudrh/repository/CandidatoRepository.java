package com.cloudrh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cloudrh.domain.Candidato;

@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {

	@Query("SELECT c FROM Candidato c "
			+ "JOIN RelcCandVaga r ON r.candidato.id = c.id "
			+ "WHERE r.vaga.id = :vagaId")
	List<Candidato> findByVaga(@Param("vagaId") Long vagaId);
}
