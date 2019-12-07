package com.cloudrh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cloudrh.domain.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Long>{

}
