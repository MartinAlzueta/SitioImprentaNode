-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-08-2021 a las 19:26:16
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `imprentaurquiza`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `cuerpo` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `cuerpo`) VALUES
(1, 'Ahora hacemos esto ', 'Esto es un producto cuya descripción debe insertarse acá adentro. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. '),
(2, 'Y también esto otro', 'Acá va un segundo texto, describiendo otro producto. \r\nSin tele y sin cerveza, homero pierde la cabeza. Sin tele y sin cerveza, homero pierde la cabeza. Sin tele y sin cerveza, homero pierde la cabeza. Sin tele y sin cerveza, homero pierde la cabeza. Sin tele y sin cerveza, homero pierde la cabeza. Sin tele y sin cerveza, homero pierde la cabeza. Sin tele y sin cerveza, homero pierde la cabeza. '),
(3, 'Ahora hacemos esto ', 'Esto es un producto cuya descripción debe insertarse acá adentro. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. Este texto es de longitud indefinida. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'martin_alzueta', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'nico_izaguirre', '81dc9bdb52d04dc20036dbd8313ed055'),
(4, 'prueba', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
