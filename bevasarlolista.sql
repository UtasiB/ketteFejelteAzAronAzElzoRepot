-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 07. 18:58
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `bevasarlolista`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hozzaadottak`
--

CREATE TABLE `hozzaadottak` (
  `id` int(11) NOT NULL,
  `category` varchar(30) NOT NULL,
  `productname` varchar(30) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unitprice` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `mock_data`
--

CREATE TABLE `mock_data` (
  `id` int(11) NOT NULL,
  `category` varchar(30) NOT NULL,
  `productname` varchar(30) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `mock_data`
--

INSERT INTO `mock_data` (`id`, `category`, `productname`, `price`) VALUES
(1, 'dairy', 'yakitori skewers', 2137),
(2, 'grains', 'oatmeal cookies', 1139),
(3, 'sweets', 'mango salsa', 2006),
(4, 'beverages', 'garlic bread', 2710),
(5, 'frozen foods', 'waffle', 3802),
(6, 'grains', 'french fries', 4640),
(8, 'condiments', 'salad', 4500),
(9, 'vegetables', 'lemon', 3160),
(11, 'sweets', 'mushroom risotto', 3212),
(13, 'fruits', 'mango', 122),
(15, 'dairy', 'spinach quiche', 107),
(20, 'grains', 'veggie burger', 3824),
(23, 'frozen foods', 'queso dip', 2461),
(24, 'vegetables', 'ravioli', 4236),
(26, 'vegetables', 'quinoa', 1702),
(28, 'grains', 'vietnamese pho', 3634),
(29, 'dairy', 'quesadilla', 320),
(30, 'condiments', 'lobster bisque', 1412),
(33, 'beverages', 'udon', 3692),
(35, 'grains', 'kale salad', 2117),
(36, 'beverages', 'zucchini', 902),
(37, 'fruits', 'hamburger', 2673),
(40, 'fruits', 'fajita', 4917),
(41, 'grains', 'xiao long bao dumplings', 185),
(42, 'dairy', 'banana', 4569),
(44, 'frozen foods', 'yogurt', 845),
(45, 'grains', 'apple', 2614),
(46, 'snacks', 'yogurt parfait', 295),
(47, 'vegetables', 'quesadilla grande', 1834),
(48, 'fruits', 'ramen', 597),
(51, 'grains', 'grapes', 1479),
(53, 'dairy', 'nachos supreme', 1649),
(54, 'vegetables', 'taco salad', 4227),
(55, 'snacks', 'ice cream sundae', 1147),
(56, 'meat', 'nachos', 575),
(58, 'fruits', 'bagel', 291),
(59, 'vegetables', 'ziti', 1041),
(61, 'sweets', 'hummus', 4206),
(62, 'sweets', 'doughnut holes', 1246),
(63, 'snacks', 'iceberg lettuce', 2737),
(64, 'condiments', 'macaroni', 3431),
(65, 'condiments', 'taco', 4446),
(67, 'sweets', 'egg salad', 2897),
(70, 'snacks', 'pizza', 4601),
(71, 'frozen foods', 'lasagna', 4892),
(73, 'snacks', 'xmas cookies', 4924),
(75, 'frozen foods', 'gnocchi', 3218),
(77, 'fruits', 'doughnut', 2982),
(78, 'vegetables', 'pepperoni pizza', 1381),
(80, 'dairy', 'egg', 3989),
(81, 'fruits', 'orange', 1449),
(82, 'beverages', 'sushi', 3210),
(83, 'dairy', 'oatmeal raisin cookies', 4811),
(84, 'vegetables', 'ice cream', 2103),
(85, 'snacks', 'honeydew melon', 3391),
(87, 'beverages', 'chocolate cake', 1516),
(88, 'snacks', 'toast', 3584),
(89, 'frozen foods', 'sushi roll', 160),
(90, 'sweets', 'ramen noodles', 2338),
(91, 'vegetables', 'chicken nuggets', 3119),
(93, 'frozen foods', 'dumplings', 1479),
(95, 'vegetables', 'udon soup', 3524),
(97, 'frozen foods', 'ziti pasta', 2165),
(98, 'meat', 'rice', 3332),
(100, 'beverages', 'xiao long bao', 1019);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `hozzaadottak`
--
ALTER TABLE `hozzaadottak`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `mock_data`
--
ALTER TABLE `mock_data`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `hozzaadottak`
--
ALTER TABLE `hozzaadottak`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `mock_data`
--
ALTER TABLE `mock_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
