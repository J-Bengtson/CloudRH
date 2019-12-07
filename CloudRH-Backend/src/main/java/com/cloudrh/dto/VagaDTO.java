package com.cloudrh.dto;

import java.time.LocalDate;

import com.cloudrh.domain.Empresa;

public class VagaDTO {
	
	private Long id;
	private LocalDate dataAbertura;
	private LocalDate dataEncerramento;
	private String descricao;
	private Double jornada;
	private Double valor;
	private String turno;
	private String situacao;
	private Integer numVagas;
	private Empresa empresa;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Empresa getEmpresa() {
		return empresa;
	}
	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}
	public LocalDate getDataAbertura() {
		return dataAbertura;
	}
	public void setDataAbertura(LocalDate dataAbertura) {
		this.dataAbertura = dataAbertura;
	}
	public LocalDate getDataEncerramento() {
		return dataEncerramento;
	}
	public void setDataEncerramento(LocalDate dataEncerramento) {
		this.dataEncerramento = dataEncerramento;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Double getJornada() {
		return jornada;
	}
	public void setJornada(Double jornada) {
		this.jornada = jornada;
	}
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
	public String getTurno() {
		return turno;
	}
	public void setTurno(String turno) {
		this.turno = turno;
	}
	public String getSituacao() {
		return situacao;
	}
	public void setSituacao(String situacao) {
		this.situacao = situacao;
	}
	public Integer getNumVagas() {
		return numVagas;
	}
	public void setNumVagas(Integer numVagas) {
		this.numVagas = numVagas;
	}
}
