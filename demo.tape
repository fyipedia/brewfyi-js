# brewfyi (npm) — Coffee API Client Demo
Output demo.gif

Set FontSize 20
Set Width 1000
Set Height 580
Set Shell "zsh"
Set Theme "Catppuccin Mocha"
Set TypingSpeed 30ms
Set Padding 24

Type "node"
Enter
Sleep 1s

Type "const { BrewFYI } = await import('brewfyi')"
Enter
Sleep 1s

Type "const client = new BrewFYI()"
Enter
Sleep 1s

Type "// Search coffee varieties"
Enter
Sleep 0.5s

Type "await client.search('espresso')"
Enter
Sleep 2.5s

Type "await client.method('pour-over')"
Enter
Sleep 2.5s

Type ".exit"
Enter
Sleep 1s
