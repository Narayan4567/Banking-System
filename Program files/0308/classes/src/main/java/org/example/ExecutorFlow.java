package org.example;
import java.util.concurrent.*;

public class ExecutorFlow {



        public static void main(String[] args) throws Exception {

            ExecutorService executor =
                    Executors.newFixedThreadPool(2);

            Callable<Integer> task = () -> {
                System.out.println(
                        Thread.currentThread().getName() +
                                " executing task");
                return 50 + 50;
            };

            Future<Integer> future =
                    executor.submit(task);

            Integer result = future.get();

            System.out.println("Result = " + result);

            executor.shutdown();
        }
    }
