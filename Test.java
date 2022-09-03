import java.util.Scanner;

public class Test{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int sum = 0;
        int count = 0;
        while(s.hasNextInt()){
            int tmp = s.nextInt();
            sum += tmp;
            count++;
        }
        System.out.println(sum/count);
    }
}