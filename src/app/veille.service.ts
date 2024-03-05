import { Injectable } from '@angular/core';
import { Veille } from '../app/models/veille.model';

@Injectable({
  providedIn: 'root'
})
export class VeilleService {
  private veilles: Veille[] = [
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
    }   

  ];

  constructor() { }

  getVeilles(): Veille[] {
    return this.veilles;
  }
}