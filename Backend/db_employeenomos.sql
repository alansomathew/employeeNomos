-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2022 at 12:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_employeenomos`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `admin_id` int(11) NOT NULL,
  `admin_uname` varchar(50) NOT NULL,
  `admin_password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_uname`, `admin_password`) VALUES
(1, 'admin', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_client`
--

CREATE TABLE `tbl_client` (
  `client_id` int(11) NOT NULL,
  `client_name` varchar(50) NOT NULL,
  `client_gender` varchar(50) NOT NULL,
  `client_contact` varchar(50) NOT NULL,
  `client_email` varchar(50) NOT NULL,
  `client_address` varchar(50) NOT NULL,
  `client_uname` varchar(50) NOT NULL,
  `client_password` varchar(50) NOT NULL,
  `client_dob` date NOT NULL,
  `security_id` int(11) NOT NULL,
  `security_answer` varchar(500) NOT NULL,
  `client_doj` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_client`
--

INSERT INTO `tbl_client` (`client_id`, `client_name`, `client_gender`, `client_contact`, `client_email`, `client_address`, `client_uname`, `client_password`, `client_dob`, `security_id`, `security_answer`, `client_doj`) VALUES
(1, 'AloshyaJoshy', 'Female', '89569412', 'dgb@dfg', 'sedfgh\nkmnvbcv', 'client', '123456', '2022-06-06', 8, 'alu', '2022-06-06'),
(2, 'jeny', '', '', '', '', '', '', '0000-00-00', 0, '', '2022-06-06'),
(3, 'jenymathew', 'Female', '4598623587', 'gyjbdy@fyn', 'gvbhnjmk', 'jeny', 'jeny', '2022-06-06', 8, 'jeny', '2022-06-06');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_dept`
--

CREATE TABLE `tbl_dept` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_dept`
--

INSERT INTO `tbl_dept` (`dept_id`, `dept_name`) VALUES
(1, 'Desktop Support'),
(2, 'Helpdesk'),
(3, 'System Engineering'),
(4, 'Network Engineering'),
(5, 'Application Management'),
(6, 'System Administration'),
(7, 'Network Administration'),
(8, 'Project Management'),
(9, 'IT Management'),
(10, 'Planning'),
(11, 'Purchasing'),
(12, 'Database Administration'),
(13, 'Lifecycle Management'),
(14, 'Security');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_desig`
--

CREATE TABLE `tbl_desig` (
  `designation_id` int(11) NOT NULL,
  `designation_name` varchar(50) NOT NULL,
  `dept_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_desig`
--

INSERT INTO `tbl_desig` (`designation_id`, `designation_name`, `dept_id`) VALUES
(1, 'Technical Supporter', 2),
(2, 'clurk', 11),
(3, 'Assistant', 11),
(4, 'Agent', 11),
(5, 'Logistic Manager', 11),
(6, 'Operations Manager', 11),
(7, 'Chain Manager', 11),
(8, 'Manager', 4),
(9, 'Analyst', 4),
(10, 'Administrator', 4),
(11, 'Specialist', 4),
(12, 'Technician', 4),
(13, 'Solution Architecture', 3),
(14, 'Asst. Project Manager ', 8),
(15, 'Senior project Manager', 8),
(16, 'Project Coordinator', 8),
(17, 'Project Scheduler', 8),
(18, 'Team Leader', 8);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employee`
--

CREATE TABLE `tbl_employee` (
  `emp_id` int(11) NOT NULL,
  `emp_name` varchar(50) NOT NULL,
  `emp_gender` varchar(50) NOT NULL,
  `emp_contact` varchar(50) NOT NULL,
  `emp_email` varchar(50) NOT NULL,
  `emp_address` varchar(50) NOT NULL,
  `emp_username` varchar(50) NOT NULL,
  `emp_password` varchar(50) NOT NULL,
  `emp_dob` date NOT NULL,
  `security_id` varchar(50) NOT NULL,
  `security_answer` varchar(50) NOT NULL,
  `dept_id` int(50) NOT NULL,
  `designation_id` int(50) NOT NULL,
  `emp_doj` varchar(50) NOT NULL,
  `emp_vstatus` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_employee`
--

INSERT INTO `tbl_employee` (`emp_id`, `emp_name`, `emp_gender`, `emp_contact`, `emp_email`, `emp_address`, `emp_username`, `emp_password`, `emp_dob`, `security_id`, `security_answer`, `dept_id`, `designation_id`, `emp_doj`, `emp_vstatus`) VALUES
(1, 'AloshyaJoshy', 'Female', '7845623', 'tryfguhjk@asxdcf', '', 'employee', '123456', '2022-06-07', '8', 'alu', 1, 2, '2022-06-07', '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projecthead`
--

CREATE TABLE `tbl_projecthead` (
  `ph_id` int(11) NOT NULL,
  `ph_name` varchar(50) NOT NULL,
  `ph_gender` varchar(50) NOT NULL,
  `ph_contact` varchar(50) NOT NULL,
  `ph_email` varchar(50) NOT NULL,
  `ph_address` varchar(50) NOT NULL,
  `ph_aadhar` int(20) NOT NULL,
  `ph_uname` varchar(50) NOT NULL,
  `ph_password` varchar(50) NOT NULL,
  `ph_dob` varchar(50) NOT NULL,
  `security_id` varchar(50) NOT NULL,
  `ph_doj` varchar(50) NOT NULL,
  `designation_id` int(50) NOT NULL,
  `dept_id` int(50) NOT NULL,
  `security_answer` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_projecthead`
--

INSERT INTO `tbl_projecthead` (`ph_id`, `ph_name`, `ph_gender`, `ph_contact`, `ph_email`, `ph_address`, `ph_aadhar`, `ph_uname`, `ph_password`, `ph_dob`, `security_id`, `ph_doj`, `designation_id`, `dept_id`, `security_answer`) VALUES
(1, 'aloshyajoshy', 'Female', '7451226598', 'tdrfgh@fgvhb', 'erdrtfyguhjik', 0, 'projecthead', '123', '2022-06-07', '8', '2022-06-07', 1, 2, 'alu'),
(2, 'SanigaSibi', 'Female', '459987562', 'saniga12@gmail.com', 'Pullattu(h)', 0, 'saniga', '123456', '2022-06-07', '8', '2022-06-07', 1, 2, 'sana');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_securityqtn`
--

CREATE TABLE `tbl_securityqtn` (
  `security_id` int(10) NOT NULL,
  `security_qtn` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_securityqtn`
--

INSERT INTO `tbl_securityqtn` (`security_id`, `security_qtn`) VALUES
(8, 'What was your childhood nickname?'),
(9, 'What is the name of your favorite childhood friend?'),
(10, 'In what city or town was your first job ?'),
(11, 'What is the name of the place your wedding reception was held ?'),
(12, 'What is the name of a college you applied to but didn’t attend ?'),
(13, 'In what city does your nearest sibling live?'),
(14, 'What was the last name of your third grade teacher?'),
(15, 'What school did you attend for sixth grade?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `tbl_client`
--
ALTER TABLE `tbl_client`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `tbl_dept`
--
ALTER TABLE `tbl_dept`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `tbl_desig`
--
ALTER TABLE `tbl_desig`
  ADD PRIMARY KEY (`designation_id`);

--
-- Indexes for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `tbl_projecthead`
--
ALTER TABLE `tbl_projecthead`
  ADD PRIMARY KEY (`ph_id`);

--
-- Indexes for table `tbl_securityqtn`
--
ALTER TABLE `tbl_securityqtn`
  ADD PRIMARY KEY (`security_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_client`
--
ALTER TABLE `tbl_client`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_dept`
--
ALTER TABLE `tbl_dept`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_desig`
--
ALTER TABLE `tbl_desig`
  MODIFY `designation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_projecthead`
--
ALTER TABLE `tbl_projecthead`
  MODIFY `ph_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_securityqtn`
--
ALTER TABLE `tbl_securityqtn`
  MODIFY `security_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
