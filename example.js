String url = "jdbc:mysql://localhost:3306/sumi_123";
String username = "root";
String password = "sumi";

string query = "SELECTION id, name FROM student_connection";
Connection connection =
        DriverManager.getConnection(url, username, password);