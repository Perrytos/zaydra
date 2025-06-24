import 'package:flutter/material.dart';

void main() {
  runApp(SignalyxApp());
}

class SignalyxApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Signalyx',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/',
      routes: {
        '/': (context) => LoginPage(),
        '/dashboard': (context) => DashboardPage(),
        '/signals': (context) => SignalsPage(),
        '/profile': (context) => ProfilePage(),
      },
    );
  }
}

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          child: Text('Login'),
          onPressed: () {
            Navigator.pushReplacementNamed(context, '/dashboard');
          },
        ),
      ),
    );
  }
}

class DashboardPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Dashboard')),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text('Benvenuto su Signalyx!'),
          ElevatedButton(
            child: Text('Vai a Segnali'),
            onPressed: () => Navigator.pushNamed(context, '/signals'),
          ),
          ElevatedButton(
            child: Text('Profilo'),
            onPressed: () => Navigator.pushNamed(context, '/profile'),
          ),
        ],
      ),
    );
  }
}

class SignalsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Segnali')),
      body: Center(child: Text('Segnali in arrivo...')),
    );
  }
}

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Profilo')),
      body: Center(child: Text('Email utente, stato Premium, ecc...')),
    );
  }
}
