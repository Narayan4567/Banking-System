//package org.example;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
//import java.sql.Statement;
//
//public class App {
//
//    public static void main(String[] args) {
//
//        String url = "jdbc:postgresql://localhost:5432/BankDB";
//        String username = "postgres";
//        String password = "root";
//
//        try {
//
//            Connection connection =
//                    DriverManager.getConnection(url, username, password);
//
//            System.out.println("Connected successfully!");
//
//            Statement statement = connection.createStatement();
//
//            String sql = "SELECT * FROM Accounts";
//
//            ResultSet resultSet = statement.executeQuery(sql);
//
//            while (resultSet.next()) {
//
//                int id = resultSet.getInt("id");
//                String name = resultSet.getString("custName");
//
//                System.out.println(id + " " + name);
//            }
//
//            resultSet.close();
//            statement.close();
//            connection.close();
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//}


package org.example;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class App implements CommandLineRunner {

    private final JdbcTemplate jdbcTemplate;

    public App(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void run(String... args) {

        String sql = "SELECT * FROM Accounts";

        jdbcTemplate.query(sql, (rs, rowNum) -> {

            System.out.println(
                    rs.getInt("id") + " " +
                            rs.getString("custName")
            );

            return null;
        });
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}