package com.example;

public class a4_Parameterized {
    public static boolean isPalindrome(String s){
        String str = "";

        for(int i = 0; i<s.length(); i++){
            str += s.charAt(i);
        }
        if(str.equals(s)){
            return true;
        }
        return false;
    }
}
