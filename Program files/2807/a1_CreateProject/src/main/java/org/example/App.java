package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        a1_Welcome welcome =
                context.getBean("welcomeBean", a1_Welcome.class);

        welcome.display();

    }
}