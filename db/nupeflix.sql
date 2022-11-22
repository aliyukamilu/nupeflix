-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2022 at 03:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nupeflix`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movie_id` int(11) NOT NULL,
  `movie_category` varchar(255) NOT NULL,
  `movie_title` varchar(255) NOT NULL,
  `movie_link` varchar(255) NOT NULL,
  `movie_banner` varchar(255) NOT NULL,
  `movie_cast` varchar(255) NOT NULL,
  `movie_description` varchar(1000) NOT NULL,
  `movie_length` time NOT NULL,
  `release_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movie_id`, `movie_category`, `movie_title`, `movie_link`, `movie_banner`, `movie_cast`, `movie_description`, `movie_length`, `release_date`) VALUES
(1, 'Drama', 'NDANUSA', 'https://youtu.be/OnYiXFhqIUA', 'ndanusa.PNG', 'aliyu jamilu, hauwa ndana, aisha tanko, musa bako', 'NDANUSA EZA KANYI, The story of a strange Herbalist who did to the people of the community what barely or never has been done before.', '01:06:28', '3-May-2022'),
(2, 'Documentary', 'Ya\'doko', 'https://youtu.be/ituGIikXh60', 'yadako.PNG', 'aliyu jamilu, hauwa ndana, aisha tanko, musa bako', 'Ya\'doko, The story of a strange Herbalist who did to the people of the community what barely or never has been done before.', '01:07:10', '24-Oct-2018');

-- --------------------------------------------------------

--
-- Table structure for table `movie_banner`
--

CREATE TABLE `movie_banner` (
  `id` int(11) NOT NULL,
  `movie_title` varchar(255) NOT NULL,
  `movie_description` varchar(255) NOT NULL,
  `movie_link` varchar(255) NOT NULL,
  `movie_banner` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `movie_banner`
--

INSERT INTO `movie_banner` (`id`, `movie_title`, `movie_description`, `movie_link`, `movie_banner`) VALUES
(1, 'NDANUSA', 'NDANUSA EZA KANYI, The story of a strange Herbalist who did to the people of the community what barely or never has been done before.', 'https://youtu.be/OnYiXFhqIUA', 'yadako.PNG');

-- --------------------------------------------------------

--
-- Table structure for table `movie_categories`
--

CREATE TABLE `movie_categories` (
  `id` int(11) NOT NULL,
  `category_id` varchar(255) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `hash_id` varchar(255) NOT NULL,
  `account_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `hash_id`, `account_type`) VALUES
(1, 'aliyukamilu@gmail.com', '12345', '637be363a50aa', 'free');

-- --------------------------------------------------------

--
-- Table structure for table `user_movie_list`
--

CREATE TABLE `user_movie_list` (
  `id` int(11) NOT NULL,
  `hash_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `movie_title` varchar(255) NOT NULL,
  `favourite_movies` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movie_id`);

--
-- Indexes for table `movie_banner`
--
ALTER TABLE `movie_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movie_categories`
--
ALTER TABLE `movie_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_movie_list`
--
ALTER TABLE `user_movie_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `movie_banner`
--
ALTER TABLE `movie_banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `movie_categories`
--
ALTER TABLE `movie_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_movie_list`
--
ALTER TABLE `user_movie_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
