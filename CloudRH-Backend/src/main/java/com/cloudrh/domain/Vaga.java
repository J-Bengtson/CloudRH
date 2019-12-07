package com.cloudrh.domain;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vagas")
public class Vaga implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="data_abertura", nullable=false)
	private LocalDate dataAbertura;
	
	@Column(name="data_encerramento", nullable=false)
	private LocalDate dataEncerramento;
	
	@Column(name="descricao", nullable=false)
	private String descricao;
	
	@Column(name="jornada", nullable=false)
	private Double jornada;
	
	@Column(name="valor", nullable=false)
	private Double valor;
	
	@Column(name="turno", nullable=true)
	private String turno;
	
	@Column(name="situacao", nullable=false)
	private String situacao;
	
	@Column(name="num_vagas", nullable=false)
	private Integer numVagas;
	
	@ManyToOne
	@JoinColumn(name="empresa_id", nullable=false)
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
