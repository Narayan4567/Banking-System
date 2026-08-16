package org.example;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class FileHandling {
    public static void main(String[] args) {

        try {

            FileWriter fw = new FileWriter("sample.txt");
            fw.write("Hello Java File Handling");
            fw.close();

            System.out.println("Character Input/Output:");

            FileReader fr = new FileReader("sample.txt");
            int ch;

            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }
            fr.close();

            System.out.println("\n");

            BufferedWriter bw =
                    new BufferedWriter(new FileWriter("data.txt"));

            bw.write("Java");
            bw.newLine();
            bw.write("Buffered IO Example");
            bw.close();

            System.out.println("Buffered Input/Output:");

            BufferedReader br =
                    new BufferedReader(new FileReader("data.txt"));

            String line;

            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            br.close();

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}