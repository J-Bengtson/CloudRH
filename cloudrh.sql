-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06-Dez-2019 às 13:40
-- Versão do servidor: 10.1.35-MariaDB
-- versão do PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloudrh`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `candidato`
--

CREATE TABLE `candidato` (
  `id` bigint(20) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `candidato`
--

INSERT INTO `candidato` (`id`, `cpf`, `genero`, `nome`) VALUES
(1, '11111111112', 'm', 'teste'),
(2, '111131413', 'm', 'teste2'),
(3, '111112341', 'f', 'teste3'),
(4, '123', '132', '23'),
(5, '1234', '1324123', '23123'),
(7, '111112341', 'f', 'teste4'),
(8, '111112341', 'f', 'teste4'),
(9, '111112341', 'f', 'teste4'),
(10, '111112341', 'f', 'teste4'),
(11, '111112341', 'f', 'teste4'),
(12, '12345678910', 'M', 'Lucas'),
(13, '12345678910', 'M', 'Lucas'),
(14, '1234567890', 'Masculino', 'Teste'),
(15, '2313', 'Masculino', '12313123'),
(16, '2313', 'Masculino', '12313123'),
(17, '2313', 'Masculino', '12313123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

CREATE TABLE `contato` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone1` varchar(255) NOT NULL,
  `telefone2` varchar(255) DEFAULT NULL,
  `candidato_id` bigint(20) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`id`, `email`, `telefone1`, `telefone2`, `candidato_id`, `empresa_id`) VALUES
(1, 'teste@gmail.com', '11911111111', NULL, 1, NULL),
(2, 'teste@gmail.com', '11911111111', NULL, 2, NULL),
(3, 'teste@gmail.com', '11911211111', NULL, 3, NULL),
(4, '12123', '132', '123', 4, NULL),
(5, '12123', '132', '123', 5, NULL),
(7, 'teste@gmail.com', '11911341111', NULL, 7, NULL),
(8, 'teste@gmail.com', '11911341111', NULL, 8, NULL),
(9, 'teste@gmail.com', '11911341111', NULL, 9, NULL),
(10, 'teste@gmail.com', '11911341111', NULL, 10, NULL),
(11, 'teste@gmail.com', '11911341111', NULL, 11, NULL),
(12, 'lucas@gmail.com', '12345678910', NULL, 12, NULL),
(13, 'lucas@gmail.com', '12345678910', NULL, 13, NULL),
(14, 'lucasteste@gmail.com', '1234567110', NULL, NULL, 1),
(15, 'lucasteste2@gmail.com', '1238667110', NULL, NULL, 2),
(16, '333', '111', '222', 15, NULL),
(17, '333', '111', '222', 16, NULL),
(18, '333', '111', '222', 17, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa`
--

CREATE TABLE `empresa` (
  `id` int(11) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `razao_social` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `empresa`
--

INSERT INTO `empresa` (`id`, `cnpj`, `nome`, `razao_social`) VALUES
(1, '12345678910123', 'Lucas', 'teste'),
(2, '12345678430123', 'LucasTeste2', 'teste'),
(3, '81314245000195', 'teste', 'teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco`
--

CREATE TABLE `endereco` (
  `id` bigint(20) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `cep` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `uf` varchar(255) NOT NULL,
  `candidato_id` bigint(20) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `endereco`
--

INSERT INTO `endereco` (`id`, `bairro`, `cep`, `cidade`, `complemento`, `logradouro`, `numero`, `uf`, `candidato_id`, `empresa_id`) VALUES
(1, 'Teste', '11111111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 1, NULL),
(2, 'Teste', '11111111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 2, NULL),
(3, 'Teste', '11123111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 3, NULL),
(4, '123', '123', '123', '123', '123', 123, '132', 4, NULL),
(5, '123', '123', '123', '123', '123', 123, '132', 5, NULL),
(7, 'Teste', '11123111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 7, NULL),
(8, 'Teste', '11123111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 8, NULL),
(9, 'Teste', '11123111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 9, NULL),
(10, 'Teste', '11123111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 10, NULL),
(11, 'Teste', '11123111', 'Teste', 'ap 111', 'Rua teste', 111, 'MG', 11, NULL),
(12, 'teste', '12345678', 'bh', '123', 'teste', 123, 'mg', 12, NULL),
(13, 'teste', '12345678', 'bh', '123', 'teste', 123, 'mg', 13, NULL),
(14, 'teste', '12345688', 'bh', '123', 'teste', 1234, 'mg', NULL, 1),
(15, 'teste', '12345688', 'bh', '123', 'teste2', 1234, 'mg', NULL, 2),
(16, '21', '121', '211', '1212', '21221', 12121, '121', 15, NULL),
(17, '21', '121', '211', '1212', '21221', 12121, '121', 16, NULL),
(18, '21', '121', '211', '1212', '21221', 12121, '121', 17, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `relc_cand_vaga`
--
-- Error reading structure for table cloudrh.relc_cand_vaga: #1932 - Table 'cloudrh.relc_cand_vaga' doesn't exist in engine
-- Error reading data for table cloudrh.relc_cand_vaga: #1064 - Você tem um erro de sintaxe no seu SQL próximo a 'FROM `cloudrh`.`relc_cand_vaga`' na linha 1

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(16) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `candidato_id` bigint(11) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id`, `email`, `password`, `tipo`, `candidato_id`, `empresa_id`) VALUES
(1, 'lucas@gmail.com', '1234', 'CANDIDATO', 12, NULL),
(2, '444', '555', 'CANDIDATO', 17, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `vagas`
--

CREATE TABLE `vagas` (
  `id` int(11) NOT NULL,
  `data_abertura` date NOT NULL,
  `data_encerramento` date NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `jornada` double NOT NULL,
  `valor` double NOT NULL,
  `turno` varchar(1) DEFAULT NULL,
  `num_vagas` int(11) NOT NULL,
  `empresa_id` int(11) NOT NULL,
  `situacao` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `vagas`
--

INSERT INTO `vagas` (`id`, `data_abertura`, `data_encerramento`, `descricao`, `jornada`, `valor`, `turno`, `num_vagas`, `empresa_id`, `situacao`) VALUES
(1, '2019-11-01', '2019-12-31', 'Vaga 1', 6, 700, 'M', 1, 1, 'aberta'),
(7, '2019-11-09', '2019-12-09', 'Vaga 2', 8, 1000, NULL, 1, 1, 'aberta');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidato`
--
ALTER TABLE `candidato`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_Candidato_Id` (`candidato_id`),
  ADD UNIQUE KEY `UNIQ_Empresa_Id` (`empresa_id`);

--
-- Indexes for table `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_Cnpj` (`cnpj`);

--
-- Indexes for table `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_Candidato_Id` (`candidato_id`),
  ADD UNIQUE KEY `UNIQ_Empresa_Id` (`empresa_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_User` (`email`),
  ADD UNIQUE KEY `UNIQ_Candidato_Id` (`candidato_id`),
  ADD UNIQUE KEY `UNIQ_Empresa_Id` (`empresa_id`);

--
-- Indexes for table `vagas`
--
ALTER TABLE `vagas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKphluw7y77rdgf4qlvk9781ufs` (`empresa_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidato`
--
ALTER TABLE `candidato`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `contato`
--
ALTER TABLE `contato`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `empresa`
--
ALTER TABLE `empresa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vagas`
--
ALTER TABLE `vagas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `contato`
--
ALTER TABLE `contato`
  ADD CONSTRAINT `FK_Candidato` FOREIGN KEY (`candidato_id`) REFERENCES `candidato` (`id`),
  ADD CONSTRAINT `FK_Empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`);

--
-- Limitadores para a tabela `endereco`
--
ALTER TABLE `endereco`
  ADD CONSTRAINT `FKaouisdnaoinvqwidnop` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`),
  ADD CONSTRAINT `FKoqndoqdnoandoiad` FOREIGN KEY (`candidato_id`) REFERENCES `candidato` (`id`);

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FK_Cand_aduasodans` FOREIGN KEY (`candidato_id`) REFERENCES `candidato` (`id`),
  ADD CONSTRAINT `FK_Empr_ondaisfoanao` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`);

--
-- Limitadores para a tabela `vagas`
--
ALTER TABLE `vagas`
  ADD CONSTRAINT `FKphluw7y77rdgf4qlvk9781ufs` FOREIGN KEY (`empresa_id`) REFERENCES `empresa` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
