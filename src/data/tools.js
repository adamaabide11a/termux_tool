export const tools = [
  {
    id: 1,
    name: "Nmap",
    category: "Network Security",
    difficulty: "Intermediate",
    description: "Network exploration tool and security scanner for discovering hosts and services on a network.",
    installCommand: "pkg install nmap",
    usage: "nmap -sS -O target_ip"
  },
  {
    id: 2,
    name: "Metasploit Framework",
    category: "Network Security",
    difficulty: "Advanced",
    description: "Penetration testing framework for developing and executing exploit code against remote targets.",
    installCommand: "pkg install unstable-repo && pkg install metasploit",
    usage: "msfconsole"
  },
  {
    id: 3,
    name: "Hydra",
    category: "Password Cracking",
    difficulty: "Intermediate",
    description: "Fast network logon cracker supporting many different services and protocols.",
    installCommand: "pkg install hydra",
    usage: "hydra -l admin -P passwords.txt ssh://target_ip"
  },
  {
    id: 4,
    name: "Aircrack-ng",
    category: "Network Security",
    difficulty: "Advanced",
    description: "Complete suite of tools to assess WiFi network security and crack WEP/WPA passwords.",
    installCommand: "pkg install aircrack-ng",
    usage: "aircrack-ng -w wordlist.txt capture.cap"
  },
  {
    id: 5,
    name: "Wireshark",
    category: "Network Security",
    difficulty: "Intermediate",
    description: "Network protocol analyzer for troubleshooting, analysis, and protocol development.",
    installCommand: "pkg install wireshark-cli",
    usage: "tshark -i wlan0 -w capture.pcap"
  },
  {
    id: 6,
    name: "SQLMap",
    category: "Web Security",
    difficulty: "Intermediate",
    description: "Automatic SQL injection and database takeover tool for penetration testing.",
    installCommand: "pkg install python && pip install sqlmap",
    usage: "sqlmap -u 'http://target.com/page?id=1' --dbs"
  },
  {
    id: 7,
    name: "John the Ripper",
    category: "Password Cracking",
    difficulty: "Intermediate",
    description: "Fast password cracker supporting many ciphers and hash types.",
    installCommand: "pkg install john",
    usage: "john --wordlist=passwords.txt hashes.txt"
  },
  {
    id: 8,
    name: "Hashcat",
    category: "Password Cracking",
    difficulty: "Advanced",
    description: "Advanced password recovery tool supporting GPU acceleration and many hash types.",
    installCommand: "pkg install hashcat",
    usage: "hashcat -m 0 -a 0 hashes.txt wordlist.txt"
  },
  {
    id: 9,
    name: "Bettercap",
    category: "Network Security",
    difficulty: "Advanced",
    description: "Powerful network attack and monitoring framework with WiFi, Bluetooth, and Ethernet support.",
    installCommand: "pkg install bettercap",
    usage: "sudo bettercap -iface wlan0"
  },
  {
    id: 10,
    name: "Nikto",
    category: "Web Security",
    difficulty: "Beginner",
    description: "Web server scanner for identifying dangerous files, programs, and server misconfigurations.",
    installCommand: "pkg install nikto",
    usage: "nikto -h http://target.com"
  },
  {
    id: 11,
    name: "Netcat",
    category: "Network Security",
    difficulty: "Beginner",
    description: "Networking utility for reading and writing data across network connections using TCP/UDP.",
    installCommand: "pkg install netcat",
    usage: "nc -lvp 4444"
  },
  {
    id: 12,
    name: "DirBuster",
    category: "Web Security",
    difficulty: "Beginner",
    description: "Multi-threaded directory and file brute-forcing tool for web applications.",
    installCommand: "pkg install dirbuster",
    usage: "dirbuster -u http://target.com -l wordlist.txt"
  },
  {
    id: 13,
    name: "XSStrike",
    category: "Web Security",
    difficulty: "Intermediate",
    description: "Advanced XSS detection and exploitation suite with crawling and fuzzing capabilities.",
    installCommand: "pkg install python && pip install xsstrike",
    usage: "python xsstrike.py -u 'http://target.com/search?q=test'"
  },
  {
    id: 14,
    name: "BeEF",
    category: "Web Security",
    difficulty: "Advanced",
    description: "Browser exploitation framework for penetration testing web browsers and client-side attacks.",
    installCommand: "pkg install beef",
    usage: "beef"
  },
  {
    id: 15,
    name: "Social Engineering Toolkit",
    category: "Network Security",
    difficulty: "Intermediate",
    description: "Open-source penetration testing framework designed for social engineering attacks.",
    installCommand: "pkg install python && git clone https://github.com/trustedsec/social-engineer-toolkit",
    usage: "python setoolkit"
  },
  {
    id: 16,
    name: "Recon-ng",
    category: "Web Security",
    difficulty: "Intermediate",
    description: "Full-featured reconnaissance framework for gathering information about targets.",
    installCommand: "pkg install python && pip install recon-ng",
    usage: "recon-ng"
  },
  {
    id: 17,
    name: "THC-Hydra",
    category: "Password Cracking",
    difficulty: "Intermediate",
    description: "Parallelized login cracker supporting numerous protocols and services.",
    installCommand: "pkg install hydra",
    usage: "hydra -L users.txt -P passwords.txt ftp://target_ip"
  },
  {
    id: 18,
    name: "Sqlninja",
    category: "Web Security",
    difficulty: "Advanced",
    description: "SQL Server injection and takeover tool for exploiting web applications.",
    installCommand: "pkg install sqlninja",
    usage: "sqlninja -m test -f config.conf"
  },
  {
    id: 19,
    name: "Red Hawk",
    category: "Web Security",
    difficulty: "Beginner",
    description: "Information gathering and vulnerability scanner for websites and web applications.",
    installCommand: "pkg install python && git clone https://github.com/Tuhinshubhra/RED_HAWK",
    usage: "python rhawk.py"
  },
  {
    id: 20,
    name: "RouterSploit",
    category: "Network Security",
    difficulty: "Advanced",
    description: "Exploitation framework for embedded devices and router security testing.",
    installCommand: "pkg install python && pip install routersploit",
    usage: "rsf"
  },
  {
    id: 21,
    name: "Git",
    category: "Development",
    difficulty: "Beginner",
    description: "Distributed version control system for tracking changes in source code.",
    installCommand: "pkg install git",
    usage: "git clone https://github.com/user/repo.git"
  },
  {
    id: 22,
    name: "Python",
    category: "Development",
    difficulty: "Beginner",
    description: "High-level programming language for general-purpose programming and scripting.",
    installCommand: "pkg install python",
    usage: "python script.py"
  },
  {
    id: 23,
    name: "Node.js",
    category: "Development",
    difficulty: "Beginner",
    description: "JavaScript runtime built on Chrome's V8 engine for server-side development.",
    installCommand: "pkg install nodejs",
    usage: "node app.js"
  },
  {
    id: 24,
    name: "Vim",
    category: "Development",
    difficulty: "Intermediate",
    description: "Highly configurable text editor built to enable efficient text editing.",
    installCommand: "pkg install vim",
    usage: "vim filename.txt"
  },
  {
    id: 25,
    name: "Termux-API",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Access Android and device hardware APIs from Termux command line.",
    installCommand: "pkg install termux-api",
    usage: "termux-battery-status"
  },
  {
    id: 26,
    name: "OpenSSH",
    category: "Network Security",
    difficulty: "Beginner",
    description: "Secure Shell protocol implementation for secure remote access and file transfer.",
    installCommand: "pkg install openssh",
    usage: "ssh user@hostname"
  },
  {
    id: 27,
    name: "Curl",
    category: "Network Security",
    difficulty: "Beginner",
    description: "Command-line tool for transferring data with URLs supporting various protocols.",
    installCommand: "pkg install curl",
    usage: "curl -X GET https://api.example.com/data"
  },
  {
    id: 28,
    name: "Wget",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Non-interactive network downloader for retrieving files from web servers.",
    installCommand: "pkg install wget",
    usage: "wget https://example.com/file.zip"
  },
  {
    id: 29,
    name: "Nano",
    category: "Development",
    difficulty: "Beginner",
    description: "Simple and user-friendly text editor for command-line environments.",
    installCommand: "pkg install nano",
    usage: "nano filename.txt"
  },
  {
    id: 30,
    name: "Zsh",
    category: "System Tools",
    difficulty: "Intermediate",
    description: "Extended Bourne shell with many improvements and powerful features.",
    installCommand: "pkg install zsh",
    usage: "chsh -s zsh"
  },
  {
    id: 31,
    name: "Tmux",
    category: "System Tools",
    difficulty: "Intermediate",
    description: "Terminal multiplexer for managing multiple terminal sessions in a single window.",
    installCommand: "pkg install tmux",
    usage: "tmux new-session -s mysession"
  },
  {
    id: 32,
    name: "FFmpeg",
    category: "Development",
    difficulty: "Intermediate",
    description: "Complete solution for recording, converting, and streaming audio and video.",
    installCommand: "pkg install ffmpeg",
    usage: "ffmpeg -i input.mp4 output.avi"
  },
  {
    id: 33,
    name: "ImageMagick",
    category: "Development",
    difficulty: "Intermediate",
    description: "Software suite for creating, editing, composing, and converting bitmap images.",
    installCommand: "pkg install imagemagick",
    usage: "convert input.jpg -resize 50% output.jpg"
  },
  {
    id: 34,
    name: "Htop",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Interactive process viewer and system monitor for Unix-like systems.",
    installCommand: "pkg install htop",
    usage: "htop"
  },
  {
    id: 35,
    name: "Tree",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Recursive directory listing command that produces a depth-indented listing of files.",
    installCommand: "pkg install tree",
    usage: "tree -a"
  },
  {
    id: 36,
    name: "Unzip",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Extraction utility for ZIP archives and compressed files.",
    installCommand: "pkg install unzip",
    usage: "unzip archive.zip"
  },
  {
    id: 37,
    name: "Zip",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Compression utility for creating ZIP archives and compressing files.",
    installCommand: "pkg install zip",
    usage: "zip -r archive.zip folder/"
  },
  {
    id: 38,
    name: "Tar",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Archiving utility for collecting files into a single archive file.",
    installCommand: "pkg install tar",
    usage: "tar -czf archive.tar.gz folder/"
  },
  {
    id: 39,
    name: "Grep",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Command-line utility for searching text patterns in files and streams.",
    installCommand: "pkg install grep",
    usage: "grep -r 'pattern' /path/to/search"
  },
  {
    id: 40,
    name: "Sed",
    category: "System Tools",
    difficulty: "Intermediate",
    description: "Stream editor for filtering and transforming text in a pipeline.",
    installCommand: "pkg install sed",
    usage: "sed 's/old/new/g' file.txt"
  },
  {
    id: 41,
    name: "Awk",
    category: "System Tools",
    difficulty: "Intermediate",
    description: "Pattern scanning and processing language for text manipulation.",
    installCommand: "pkg install gawk",
    usage: "awk '{print $1}' file.txt"
  },
  {
    id: 42,
    name: "Rsync",
    category: "System Tools",
    difficulty: "Intermediate",
    description: "Fast and versatile file copying tool for local and remote file synchronization.",
    installCommand: "pkg install rsync",
    usage: "rsync -av source/ destination/"
  },
  {
    id: 43,
    name: "Screen",
    category: "System Tools",
    difficulty: "Intermediate",
    description: "Terminal multiplexer for running multiple terminal sessions in background.",
    installCommand: "pkg install screen",
    usage: "screen -S session_name"
  },
  {
    id: 44,
    name: "Neofetch",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Command-line system information tool for displaying system specs and ASCII art.",
    installCommand: "pkg install neofetch",
    usage: "neofetch"
  },
  {
    id: 45,
    name: "Figlet",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Program for making large letters out of ordinary text for ASCII art banners.",
    installCommand: "pkg install figlet",
    usage: "figlet 'Hello World'"
  },
  {
    id: 46,
    name: "Cowsay",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Program that generates ASCII pictures of a cow with a message.",
    installCommand: "pkg install cowsay",
    usage: "cowsay 'Hello from Termux!'"
  },
  {
    id: 47,
    name: "Lolcat",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Program that adds rainbow coloring to text output in terminal.",
    installCommand: "pkg install ruby && gem install lolcat",
    usage: "echo 'Rainbow text' | lolcat"
  },
  {
    id: 48,
    name: "Cmatrix",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Terminal-based Matrix digital rain effect screensaver.",
    installCommand: "pkg install cmatrix",
    usage: "cmatrix"
  },
  {
    id: 49,
    name: "Sl",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Fun command that displays an ASCII art steam locomotive when you mistype 'ls'.",
    installCommand: "pkg install sl",
    usage: "sl"
  },
  {
    id: 50,
    name: "Fortune",
    category: "System Tools",
    difficulty: "Beginner",
    description: "Program that displays random quotations and sayings from a database.",
    installCommand: "pkg install fortune",
    usage: "fortune"
  }
];

