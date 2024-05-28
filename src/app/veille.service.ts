import { Injectable } from '@angular/core';
import { Veille } from '../app/models/veille.model';

@Injectable({
  providedIn: 'root'
})
export class VeilleService {
  private veilles: Veille[] = [

    {
      "titre": "Prévisions de cybersécurité 2024 en matière d’IA : plongée technique en profondeur",
      "auteur": "Bitdefender",
      "resume": "Lorsque vous pensez aux applications de l'IA dans le domaine de la cybercriminalité, veillez à appliquer le principe du rasoir d'Occam. Rappelez-vous que les attaquants n'ont pas toujours besoin d'outils sophistiqués, car notre société a encore du mal à mettre en place des pratiques de sécurité de base. Les cybercriminels adaptent leurs outils pour contrer les défenses, et ils peuvent ne pas s'embarrasser d'outils complexes.",
      "date": "3 mai 2024",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.bitdefender.fr/blog/businessinsights/previsions-de-cybersecurite-2024-en-matiere-dia-plongee-technique-en-profondeur/"
    },
    {
      "titre": "Attaques par escalade de privilèges, techniques et outils de prévention",
      "auteur": "Geekflare",
      "resume": "Les attaques par escalade de privilèges se produisent lorsque des acteurs malveillants exploitent des configurations erronées, des bogues, des mots de passe faibles et d’autres vulnérabilités qui leur permettent d’accéder à des actifs protégés. Dans le cadre d’une attaque typique, le pirate commence par obtenir l’accès à un compte à faible privilège. Une fois connectés, les attaquants étudient le système pour identifier d’autres vulnérabilités qu’ils peuvent exploiter plus avant. Ils utilisent ensuite les privilèges pour se faire passer pour les utilisateurs réels, accéder aux ressources cibles et effectuer diverses tâches sans être détectés.",
      "date": "14 mai 2024",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://geekflare.com/fr/privilege-escalation-attacks/"
    },
    {
      "titre": "Kaspersky Next : une nouvelle gamme de solutions de sécurité",
      "auteur": "Kaspersky",
      "resume": "Il y a à peine dix ans, la plateforme de protection des terminaux (EPP pour endpoint protection platform en anglais) était le seul outil nécessaire pour protéger une entreprise contre la plupart des attaques informatiques. Depuis, les méthodes des cybercriminels sont devenues de plus en plus sophistiquées, à tel point qu’une simple analyse des postes de travail et des serveurs ne suffit plus pour détecter une activité malveillante.",
      "date": "15 avril 2024",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.kaspersky.fr/blog/kaspersky-next-new-portfolio/21707/"
    },
    {
      "titre": "JWT Vulnerabilities (Json Web Tokens)",
      "auteur": "Hacktricks",
      "resume": "Hacktricks propose des informations sur les vulnérabilités des JWT (Json Web Tokens). Les JWT sont utilisés pour l'authentification et l'échange de données entre les parties. Cependant, ils peuvent être vulnérables à des attaques telles que la falsification de jetons, l'usurpation d'identité et l'attaque par rejeu. L'article fournit des conseils pour sécuriser les JWT et éviter les vulnérabilités.",
      "date": "1 avril 2024",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://book.hacktricks.xyz/v/fr/pentesting-web/hacking-jwt-json-web-tokens"
    },

    {
      "titre": "Thales révèle une augmentation des attaques de rancongiciel, les cas de non-conformité exposant les entreprises à des vulnérabilités",
      "auteur": "Thales",
      "resume": "La publication du rapport Data Threat de Thales révèle une augmentation de 27 % des entreprises victimes d’une attaque par rançongiciel en 2023, 8 % ayant payé la rançon. 43% des entreprises ont échoué lors de leur audit de conformité en 2023, ces entreprises étant dix fois plus susceptibles de subir une violation de données. L'erreur humaine est identifiée comme la principale cause de violation de données pour la deuxième année consécutive",
      "date": "21 mars 2024",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.thalesgroup.com/fr/monde/securite/press_release/thales-revele-une-augmentation-des-attaques-rancongiciels-cas-non"
    },
    {
      "titre": "Pourquoi un test d’intrusion est OBLIGATOIRE sur votre site Wordpress en 2024 ?",
      "auteur": "TrackFlaw",
      "resume": "WordPress, en tant que l’un des systèmes de gestion de contenu (CMS) les plus utilisés au monde, alimente une part significative des sites web, allant des blogs personnels aux sites d’entreprise. Sa popularité s’accompagne toutefois de risques de sécurité accrus, rendant les tests d’intrusion cruciaux pour protéger ces sites contre les cyberattaques.",
      "date": "20 mars 2024",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://blog.trackflaw.com/pourquoi-faire-un-test-intrusion-sur-son-site-wordpress/"
    },
    {
      "titre": "CVE-2024-21351 & CVE-2024-21412: Two 0-days flaws in Microsoft February 2024 Patch Tuesday",
      "auteur": "do son",
      "resume": "La mise à jour de Patch Tuesday de février 2024 de Microsoft s'est révélée critique, avec la correction de 79 vulnérabilités, dont cinq classées comme critiques. Deux de ces vulnérabilités, identifiées comme des 'zero-days', étaient déjà exploitées activement. Les correctifs incluaient également des vulnérabilités dans le navigateur Edge basé sur Chromium, renforçant la sécurité des utilisateurs dans la navigation web.",
      "date": "13 février 2024",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://securityonline.info/cve-2024-21351-cve-2024-21412-two-0-days-flaws-in-microsoft-february-2024-patch-tuesday/"
    },
    {
      "titre": "New variant of Mispadu Stealer is Exploiting CVE-2023-36025 Vulnerability",
      "auteur": "do son",
      "resume": "La nouvelle variante du Mispadu Stealer, un infostealer notoire ciblant depuis 2019 les utilisateurs hispanophones et lusophones, principalement en Amérique latine, exploite désormais la vulnérabilité CVE-2023-36025 pour contourner la protection Windows SmartScreen. Cette technique permet aux attaquants de distribuer un payload malveillant via un fichier .url, soulignant l'importance de rester vigilant et d'appliquer les mesures de protection recommandées.",
      "date": "4 février 2024",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://securityonline.info/new-variant-of-mispadu-stealer-is-exploiting-cve-2023-36025-vulnerability/"
    },
    {
      "titre": "Linux Kernel Flaw CVE-2024-0193 Opens Root Access",
      "auteur": "do son",
      "resume": "Une nouvelle menace a été révélée affectant le noyau Linux, avec la découverte de la faille de sécurité CVE-2024-0193, une faille de gravité élevée dans le sous-système netfilter. Cette vulnérabilité permet à des attaquants locaux d'escalader leurs privilèges et d'exécuter du code arbitraire, potentiellement conduisant à un kernel panic. Red Hat et d'autres grandes organisations ont émis des avertissements concernant cette faille, soulignant la nécessité d'une mise à jour rapide pour prévenir les abus.",
      "date": "8 janvier 2024",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://securityonline.info/linux-kernel-flaw-cve-2024-0193-opens-root-access/"
    },
    {
      "titre": "CVE-2024-20674 & 20700: Two Critical Flaws in Microsoft Patch Tuesday January 2024",
      "auteur": "do son",
      "resume": "Microsoft a lancé sa première mise à jour de Patch Tuesday de l'année 2024, corrigeant 49 failles de sécurité dans divers composants du système d'exploitation Windows et des logiciels, y compris plusieurs bugs de Chromium, portant le total à 53 CVEs corrigés. Deux vulnérabilités étaient classées comme 'Critiques' et 47 comme 'Importantes', avec une attention particulière sur une faille de sécurité Kerberos et une vulnérabilité Hyper-V permettant l'exécution de code à distance.",
      "date": "9 janvier 2024",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://securityonline.info/cve-2024-20674-20700-two-critical-flaws-in-microsoft-patch-tuesday-january-2024/"
    },
    {
      "titre": "SAP Patches Critical Vulnerabilities in December Update",
      "auteur": "do son",
      "resume": "Le 12 décembre 2023, SAP a publié 15 nouvelles notes de sécurité et mis à jour 2 notes précédemment publiées pour renforcer la protection de son écosystème contre les menaces cybernétiques. Les vulnérabilités adressées varient de critiques à modérées, avec plusieurs classées comme 'Hot News' pour leur importance et impact potentiel.",
      "date": "12 décembre 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://securityonline.info/sap-patches-critical-vulnerabilities-in-december-update/"
    },
    {
      "titre": "CVE-2023-42465: SUDO Affected by Stack/Register Flaw, OpenSSH, OpenSSL, and MySQL are Vulnerable",
      "auteur": "do son",
      "resume": "Une nouvelle technique d'attaque, 'Mayhem', exploitant l'effet Rowhammer, cible les variables de pile et de registre des CPU, affectant SUDO, OpenSSH, OpenSSL et MySQL. Cette méthode représente une évolution significative dans la menace cybernétique, permettant potentiellement l'accès non autorisé ou le contrôle de systèmes sensibles.",
      "date": "22 décembre 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://securityonline.info/cve-2023-42465-sudo-affected-by-stack-register-flaw-openssh-openssl-and-mysql-are-vulnerable/"
    },
    {
      "titre": "CVE-2023-29552: CISA Warns of Actively Exploited SLP Vulnerability",
      "auteur": "do son",
      "resume": "Une vulnérabilité critique dans le Service Location Protocol (SLP) a été découverte, rendant des dizaines de milliers d'appareils vulnérables à des attaques par réflexion de déni de service (DoS) avec un facteur d'amplification de 2,200 fois. Cette faille, exploitée activement et repérée par la CISA, souligne l'urgence pour les organisations de mettre en œuvre les correctifs fournis par les fournisseurs avant le 29 novembre 2023.",
      "date": "8 novembre 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://securityonline.info/cisa-warns-of-actively-exploited-slp-cve-2023-29552-vulnerability/"
    },
    {
      "titre": "CVE-2023-29552: CISA Warns of Actively Exploited SLP Vulnerability",
      "auteur": "do son",
      "resume": "Une vulnérabilité critique dans le Service Location Protocol (SLP) a été découverte, rendant des dizaines de milliers d'appareils vulnérables à des attaques par réflexion de déni de service (DoS) avec un facteur d'amplification de 2,200 fois. Cette faille, exploitée activement et repérée par la CISA, souligne l'urgence pour les organisations de mettre en œuvre les correctifs fournis par les fournisseurs avant le 29 novembre 2023.",
      "date": "8 novembre 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://securityonline.info/cisa-warns-of-actively-exploited-slp-cve-2023-29552-vulnerability/"
    },
    {
      "titre": "The Most Comprehensive Guide To Choose a Pentest Partner",
      "auteur": "SecureLayer7 Lab",
      "resume": "Cet article souligne l'importance de choisir le bon partenaire de pentest, avec des conseils sur des aspects clés tels que l'expertise, l'expérience, les certifications, une approche personnalisée, une méthodologie de test exhaustive, un rapport clair et le support après le test.",
      "date": "9 octobre 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://blog.securelayer7.net/the-most-comprehensive-guide-to-choose-a-pentest-partner/"
    },
    {
      "titre": "PoC released for Microsoft WordPad CVE-2023-36563 flaw exploited in attacks",
      "auteur": "do son",
      "resume": "Une vulnérabilité dans Microsoft WordPad, identifiée comme CVE-2023-36563, a été exploitée pour voler des hachages NTLM. Un PoC a été publié par le chercheur en sécurité Dillon Franke, mettant en lumière l'importance d'appliquer rapidement les correctifs de sécurité.",
      "date": "30 octobre 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://securityonline.info/poc-released-for-microsoft-wordpad-cve-2023-36563-flaw-exploited-in-attacks/"
    },
    {
      "titre": "A New Approach towards DoS Penetration Testing on Web Services",
      "auteur": "Andreas Falkenberg",
      "resume": "Cet article explore l'évaluation automatique des attaques par déni de service (DoS) spécifiques aux services Web SOAP. Il présente un nouvel outil de test de pénétration appelé WS-Attacker, qui met en œuvre des attaques majeures de type DoS.",
      "date": "4 Septembre 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://www.isc2.org/insights"
    },
    {
      "titre": "Volt Typhoon",
      "auteur": "MARCUM",
      "resume": "L'article met en lumière les préoccupations exprimées par les autorités en cybersécurité concernant une campagne menée par un acteur de la menace parrainé par l'État chinois, Volt Typhoon. Cette campagne a ciblé des réseaux d'infrastructures critiques aux États-Unis et dans d'autres pays, touchant divers secteurs",
      "date": "25 Septembre 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.isc2.org/insights"
    },
    {
      "titre": "Storm-0558 Microsoft Attack and Adapt",
      "auteur": "Bojam Simic",
      "resume": "Début juillet, Microsoft a annoncé une attaque connue sous le nom de Storm-0558, au cours de laquelle un acteur de menace chinois a utilisé des jetons d'authentification falsifiés pour accéder aux informations, principalement des comptes de messagerie, d'environ 25 organisations. Parmi les organisations touchées, on compte le Département du Commerce des États-Unis et, selon les rapports, l'Ambassadeur des États-Unis en Chine",
      "date": "1 Aout 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://ieeexplore.ieee.org/abstract/document/6649616"
    },
    {
      "titre": "Nouvelles Méthodes de Test de Sécurité: Utilisation d'Êtres Humains pour Contourner les Contrôles de Sécurité CAPTCHA",
      "auteur": "John Weiler",
      "resume": "Des chercheurs en cybersécurité ont rapporté une tendance inquiétante où les cybercriminels font appel à des résolveurs CAPTCHA humains pour contourner les contrôles de sécurité. Cette méthode consiste à automatiser la collecte des CAPTCHA, puis à les envoyer à des êtres humains pour les résoudre, avant de les renvoyer aux opérateurs malveillants. ",
      "date": "12 Août 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.isc2.org/insights"
    },
    {
      "titre": "A New Approach towards DoS Penetration Testing on Web Services",
      "auteur": "Andreas Falkenberg",
      "resume": "Cet article explore l'évaluation automatique des attaques par déni de service (DoS) spécifiques aux services Web SOAP. Il présente un nouvel outil de test de pénétration appelé WS-Attacker, qui met en œuvre des attaques majeures de type DoS.",
      "date": "3 Juillet 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://ieeexplore.ieee.org/abstract/document/6649616"
    },
    {
      "titre": "Volt Typhoon",
      "auteur": "MARCUM",
      "resume": "L'article met en lumière les préoccupations exprimées par les autorités en cybersécurité concernant une campagne menée par un acteur de la menace parrainé par l'État chinois, Volt Typhoon. Cette campagne a ciblé des réseaux d'infrastructures critiques aux États-Unis et dans d'autres pays, touchant divers secteurs",
      "date": "24 Juillet 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.marcumllp.com/insights/cybersecurity-threats-affecting-businesses-in-july-2023"
    },

    {
      "titre": "Nouvelles Méthodes de Test de Sécurité: Utilisation d'Êtres Humains pour Contourner les Contrôles de Sécurité CAPTCHA",
      "auteur": "John Weiler",
      "resume": "Des chercheurs en cybersécurité ont rapporté une tendance inquiétante où les cybercriminels font appel à des résolveurs CAPTCHA humains pour contourner les contrôles de sécurité. Cette méthode consiste à automatiser la collecte des CAPTCHA, puis à les envoyer à des êtres humains pour les résoudre, avant de les renvoyer aux opérateurs malveillants. ",
      "date": "2 Juin 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://www.isc2.org/insights"
    },
    {
      "titre": "Utilisation de l'intelligence artificielle pour des tests de sécurité plus avancés.",
      "auteur": "Software Testing Magazine",
      "resume": "L'article parle de l'utilisation de l'intelligence artificielle (IA) dans les tests de sécurité informatique. L'IA permet de détecter rapidement des comportements inhabituels sur un réseau, ce qui aide à réagir plus vite aux menaces. Elle permet également d'adapter les tests en fonction des nouvelles menaces, améliorant ainsi la sécurité en continu. De plus, l'IA peut prédire des attaques potentielles en analysant le comportement des pirates informatiques",
      "date": "15 Juin 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.softwaretestingmagazine.com/knowledge/4-advances-in-penetration-testing-practices-in-2023/"
    },
    {
      "titre": "OSSTMM",
      "auteur": "RedScan",
      "resume": "L'OSSTMM (Open Source Security Testing Methodology Manual) est un guide conçu pour aider les organisations à évaluer leur sécurité de manière structurée. Il se concentre sur la vérification des faits. L'OSSTMM couvre la plupart des domaines de sécurité identifiés par l'ISC² (International Information System Security Certification Consortium) et les divise en cinq zones pour évaluer leur fonctionnement.",
      "date": "23 Mai 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://www.redscan.com/news/top-five-penetration-testing-methodologies/"
    },
    {
      "titre": "Emerging Cybersecurity Threats and Trends in 2023: The Growing Impact of New Technologies",
      "auteur": "Chuck Brooks",
      "resume": "L'année 2023 a été marquée par une transformation majeure grâce à l'innovation technologique, notamment l'intelligence artificielle, la 5G, l'Internet des objets (IoT) et l'informatique quantique. Ces technologies émergentes ont des répercussions significatives sur la cybersécurité, créant des défis pour la protection contre les menaces. Parmi elles, l'IA est au centre des préoccupations, car elle permet aux cybercriminels d'amplifier leurs capacités de social engineering et d'identifier les vulnérabilités des cibles.",
      "date": "5 Mai 2023",
      "bornage": "Évolution des Menaces et Contre-Mesures",
      "url": "https://www.forbes.com/sites/chuckbrooks/2023/05/05/cybersecurity-trends--statistics-more-sophisticated-and-persistent-threats-so-far-in-2023/?sh=249ee2267cb6"
    },
    {
      "titre": "Exploring Penetration Testing Methodologies for Enhanced Security",
      "auteur": "Astra Security Blog",
      "resume": "L'acronyme OWASP représente Open Web Application Security Project. Il s'agit d'une méthodologie largement connue et mise à jour par une communauté de professionnels de la sécurité. OWASP est axée sur la sécurité des applications web et vise à identifier les vulnérabilités et les erreurs logiques dans les processus.",
      "date": "13 Avril 2023",
      "bornage": "Méthodologies et Techniques de Pentest",
      "url": "https://www.getastra.com/blog/security-audit/penetration-testing-methodology/"
  },
  {
    "titre": "MortalKombat and Laplas Clipper Malware",
    "auteur": "MARCUM",
    "resume": "Depuis décembre, un attaquant utilise deux nouvelles menaces : MortalKombat, un ransomware, et une version GO du malware Laplas Clipper, qui vole des cryptomonnaies. L'attaque commence avec un e-mail de phishing contenant un fichier .ZIP.",
    "date": "25 Avril 2023",
    "bornage": "Évolution des Menaces et Contre-Mesures",
    "url": "https://www.marcumllp.com/insights/cybersecurity-threats-affecting-businesses-in-april-2023"
  },
       {
        "titre": "Advanced Network Penetration Testing with BreachLock",
        "auteur": "Breachlock",
        "resume": "Cette section parle de la façon dont BreachLock propose des services avancés de tests de pénétration réseau. Ils utilisent l'intelligence artificielle (IA) et des experts en piratage certifiés pour identifier les vulnérabilités de manière précise. Tout cela se fait via une plateforme en ligne facilement accessible.",
        "date": "7 Mars 2023",
        "bornage": "Méthodologies et Techniques de Pentest",
        "url": "https://www.breachlock.com/resources/blog/why-network-penetration-testing-is-critical-for-security/"
    },
    {
        "titre": "CVE-2023-21716: Microsoft Word Remote Code Execution Vulnerability",
        "auteur": "Picus Labs Blog",
        "resume": "Cette news parle d'un problème important dans Microsoft Word. Les hackers peuvent l'utiliser pour faire fonctionner des programmes sur l'ordinateur de quelqu'un en utilisant des fichiers spéciaux. La vulnérabilité est expliquée en détail, avec des informations sur les versions de Microsoft Word qui sont touchées, comment les hackers peuvent l'utiliser, et comment se protéger.",
        "date": "31 Mars 2023",
        "bornage": "Évolution des Menaces et Contre-Mesures",
        "url": "https://www.picussecurity.com/resource/blog/emerging-cyber-threats-of-march-2023"
    }

  ];

  constructor() { }

  getVeilles(): Veille[] {
    return this.veilles;
  }
}