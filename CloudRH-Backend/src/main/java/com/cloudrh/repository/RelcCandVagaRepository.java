package com.cloudrh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cloudrh.domain.RelcCandVaga;

@Repository
public interface RelcCandVagaRepository extends JpaRepository<RelcCandVaga, Long> {

}
