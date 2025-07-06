export const enhancedTools = [
  {
    id: 1,
    name: "Nmap",
    category: "Network Security",
    difficulty: "Intermediate",
    description: {
      en: "Network exploration tool and security scanner for discovering hosts and services on a network. Nmap uses raw IP packets to determine what hosts are available on the network, what services those hosts are offering, what operating systems they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics.",
      ar: "أداة استكشاف الشبكة وماسح الأمان لاكتشاف المضيفين والخدمات على الشبكة. يستخدم Nmap حزم IP الخام لتحديد المضيفين المتاحين على الشبكة، والخدمات التي تقدمها هذه المضيفات، وأنظمة التشغيل التي تعمل عليها، ونوع مرشحات الحزم/جدران الحماية المستخدمة، والعشرات من الخصائص الأخرى."
    },
    installCommand: "pkg install nmap",
    usage: "nmap -sS -O target_ip",
    detailedUsage: {
      en: [
        "Basic scan: nmap target_ip",
        "Stealth scan: nmap -sS target_ip",
        "OS detection: nmap -O target_ip",
        "Service version detection: nmap -sV target_ip",
        "Aggressive scan: nmap -A target_ip",
        "Scan specific ports: nmap -p 80,443 target_ip",
        "Scan port range: nmap -p 1-1000 target_ip",
        "UDP scan: nmap -sU target_ip"
      ],
      ar: [
        "فحص أساسي: nmap target_ip",
        "فحص خفي: nmap -sS target_ip",
        "كشف نظام التشغيل: nmap -O target_ip",
        "كشف إصدار الخدمة: nmap -sV target_ip",
        "فحص عدواني: nmap -A target_ip",
        "فحص منافذ محددة: nmap -p 80,443 target_ip",
        "فحص نطاق المنافذ: nmap -p 1-1000 target_ip",
        "فحص UDP: nmap -sU target_ip"
      ]
    }
  },
  {
    id: 2,
    name: "Metasploit Framework",
    category: "Network Security",
    difficulty: "Advanced",
    description: {
      en: "Penetration testing framework for developing and executing exploit code against remote targets. Metasploit provides information about security vulnerabilities and aids in penetration testing and IDS signature development. It's one of the most popular penetration testing tools.",
      ar: "إطار عمل اختبار الاختراق لتطوير وتنفيذ كود الاستغلال ضد الأهداف البعيدة. يوفر Metasploit معلومات حول الثغرات الأمنية ويساعد في اختبار الاختراق وتطوير توقيعات IDS. إنه أحد أشهر أدوات اختبار الاختراق."
    },
    installCommand: "pkg install unstable-repo && pkg install metasploit",
    usage: "msfconsole",
    detailedUsage: {
      en: [
        "Start Metasploit: msfconsole",
        "Search exploits: search type:exploit platform:linux",
        "Use exploit: use exploit/linux/http/apache_mod_cgi_bash_env_exec",
        "Show options: show options",
        "Set target: set RHOSTS target_ip",
        "Set payload: set PAYLOAD linux/x86/meterpreter/reverse_tcp",
        "Run exploit: exploit",
        "List sessions: sessions -l"
      ],
      ar: [
        "تشغيل Metasploit: msfconsole",
        "البحث عن الاستغلالات: search type:exploit platform:linux",
        "استخدام الاستغلال: use exploit/linux/http/apache_mod_cgi_bash_env_exec",
        "عرض الخيارات: show options",
        "تعيين الهدف: set RHOSTS target_ip",
        "تعيين الحمولة: set PAYLOAD linux/x86/meterpreter/reverse_tcp",
        "تشغيل الاستغلال: exploit",
        "قائمة الجلسات: sessions -l"
      ]
    }
  },
  {
    id: 3,
    name: "Hydra",
    category: "Password Cracking",
    difficulty: "Intermediate",
    description: {
      en: "Fast network logon cracker supporting many different services and protocols. Hydra is a parallelized login cracker which supports numerous protocols to attack. It's very fast and flexible, and new modules are easy to add.",
      ar: "كاسر تسجيل دخول الشبكة السريع الذي يدعم العديد من الخدمات والبروتوكولات المختلفة. Hydra هو كاسر تسجيل دخول متوازي يدعم العديد من البروتوكولات للهجوم. إنه سريع جداً ومرن، ومن السهل إضافة وحدات جديدة."
    },
    installCommand: "pkg install hydra",
    usage: "hydra -l admin -P passwords.txt ssh://target_ip",
    detailedUsage: {
      en: [
        "SSH brute force: hydra -l username -P wordlist.txt ssh://target_ip",
        "FTP brute force: hydra -l username -P wordlist.txt ftp://target_ip",
        "HTTP POST brute force: hydra -l username -P wordlist.txt target_ip http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'",
        "Multiple usernames: hydra -L userlist.txt -P wordlist.txt ssh://target_ip",
        "Specific port: hydra -l username -P wordlist.txt -s 2222 ssh://target_ip",
        "Limit threads: hydra -t 4 -l username -P wordlist.txt ssh://target_ip"
      ],
      ar: [
        "هجوم القوة الغاشمة SSH: hydra -l username -P wordlist.txt ssh://target_ip",
        "هجوم القوة الغاشمة FTP: hydra -l username -P wordlist.txt ftp://target_ip",
        "هجوم القوة الغاشمة HTTP POST: hydra -l username -P wordlist.txt target_ip http-post-form '/login:user=^USER^&pass=^PASS^:Invalid'",
        "أسماء مستخدمين متعددة: hydra -L userlist.txt -P wordlist.txt ssh://target_ip",
        "منفذ محدد: hydra -l username -P wordlist.txt -s 2222 ssh://target_ip",
        "تحديد الخيوط: hydra -t 4 -l username -P wordlist.txt ssh://target_ip"
      ]
    }
  },
  {
    id: 4,
    name: "Aircrack-ng",
    category: "Network Security",
    difficulty: "Advanced",
    description: {
      en: "Complete suite of tools to assess WiFi network security and crack WEP/WPA passwords. Aircrack-ng is a network software suite consisting of a detector, packet sniffer, WEP and WPA/WPA2-PSK cracker and analysis tool for 802.11 wireless LANs.",
      ar: "مجموعة كاملة من الأدوات لتقييم أمان شبكة WiFi وكسر كلمات مرور WEP/WPA. Aircrack-ng هو مجموعة برامج شبكة تتكون من كاشف، وماسح حزم، وكاسر WEP و WPA/WPA2-PSK وأداة تحليل لشبكات 802.11 اللاسلكية."
    },
    installCommand: "pkg install aircrack-ng",
    usage: "aircrack-ng -w wordlist.txt capture.cap",
    detailedUsage: {
      en: [
        "Monitor mode: airmon-ng start wlan0",
        "Capture packets: airodump-ng wlan0mon",
        "Target specific network: airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon",
        "Deauth attack: aireplay-ng -0 10 -a AA:BB:CC:DD:EE:FF wlan0mon",
        "Crack WEP: aircrack-ng capture.cap",
        "Crack WPA with wordlist: aircrack-ng -w wordlist.txt capture.cap",
        "Stop monitor mode: airmon-ng stop wlan0mon"
      ],
      ar: [
        "وضع المراقبة: airmon-ng start wlan0",
        "التقاط الحزم: airodump-ng wlan0mon",
        "استهداف شبكة محددة: airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon",
        "هجوم إلغاء المصادقة: aireplay-ng -0 10 -a AA:BB:CC:DD:EE:FF wlan0mon",
        "كسر WEP: aircrack-ng capture.cap",
        "كسر WPA بقائمة كلمات: aircrack-ng -w wordlist.txt capture.cap",
        "إيقاف وضع المراقبة: airmon-ng stop wlan0mon"
      ]
    }
  },
  {
    id: 5,
    name: "Wireshark",
    category: "Network Security",
    difficulty: "Intermediate",
    description: {
      en: "Network protocol analyzer for troubleshooting, analysis, and protocol development. Wireshark is the world's foremost and widely-used network protocol analyzer. It lets you see what's happening on your network at a microscopic level.",
      ar: "محلل بروتوكول الشبكة لاستكشاف الأخطاء والتحليل وتطوير البروتوكول. Wireshark هو محلل بروتوكول الشبكة الأول والأكثر استخداماً في العالم. يتيح لك رؤية ما يحدث على شبكتك على مستوى مجهري."
    },
    installCommand: "pkg install wireshark-cli",
    usage: "tshark -i wlan0 -w capture.pcap",
    detailedUsage: {
      en: [
        "List interfaces: tshark -D",
        "Capture packets: tshark -i wlan0 -w capture.pcap",
        "Live capture with display: tshark -i wlan0",
        "Filter HTTP traffic: tshark -i wlan0 -f 'port 80'",
        "Read capture file: tshark -r capture.pcap",
        "Filter by protocol: tshark -r capture.pcap -Y 'http'",
        "Export objects: tshark -r capture.pcap --export-objects http,/tmp/objects"
      ],
      ar: [
        "قائمة الواجهات: tshark -D",
        "التقاط الحزم: tshark -i wlan0 -w capture.pcap",
        "التقاط مباشر مع العرض: tshark -i wlan0",
        "تصفية حركة HTTP: tshark -i wlan0 -f 'port 80'",
        "قراءة ملف الالتقاط: tshark -r capture.pcap",
        "التصفية حسب البروتوكول: tshark -r capture.pcap -Y 'http'",
        "تصدير الكائنات: tshark -r capture.pcap --export-objects http,/tmp/objects"
      ]
    }
  }
];

