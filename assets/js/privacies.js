const LEARNIA_PRIVACY = `
# **Politiques de Confidentialité de Learnia**  

Chez Learnia, la protection de vos données personnelles est une priorité. Nous nous engageons à garantir la confidentialité, la sécurité et une gestion transparente de vos informations. Ce document exhaustif vise à vous informer de manière claire et complète sur la manière dont nous collectons, utilisons, partageons et protégeons vos données. Veuillez prendre le temps de lire attentivement cette politique pour comprendre vos droits et nos engagements.  

---

### **1. Introduction**  
Learnia, développé par **AllDotPy**, est une plateforme éducative innovante conçue pour offrir des services personnalisés aux élèves et enseignants. Notre mission est de révolutionner l’éducation en mettant à disposition des outils adaptés à chaque profil d’apprentissage. Cette politique de confidentialité reflète notre engagement envers une utilisation responsable et sécurisée de vos données personnelles.  

---

### **2. Types de Données Collectées**  

#### **2.1 Données Personnelles Identifiables**  
Nous collectons les informations suivantes :  
- **Informations de base** : Nom, prénom, date de naissance, adresse email, numéro de téléphone.  
- **Détails académiques** : Niveau scolaire, préférences éducatives, historique des cours.  

#### **2.2 Données Techniques et d’Utilisation**  
- Adresse IP, type de navigateur, système d’exploitation.  
- Pages visitées, fonctionnalités utilisées, durée des sessions.  
- Historique des interactions avec l’IA, y compris les questions posées et les réponses obtenues.  

#### **2.3 Données Sensibles**  
Dans certains cas, nous pourrions collecter des informations supplémentaires pour adapter nos services (par exemple, des besoins spécifiques liés à l’apprentissage).  

#### **2.4 Données Anonymisées**  
Nous recueillons également des données anonymisées ou agrégées pour des analyses statistiques et des études de marché.  

---

### **3. Moyens de Collecte**  
Nous collectons vos données via :  
1. **Votre interaction directe** : lors de l’inscription, de la personnalisation de votre profil ou de l’utilisation des fonctionnalités.  
2. **Technologies automatisées** : cookies, journaux serveur, outils d’analyse.  
3. **Tiers autorisés** : par exemple, si vous utilisez des services d’intégration externe (comme Google ou Facebook) pour vous connecter à Learnia.  

---

### **4. Objectifs de la Collecte des Données**  
Vos informations sont utilisées pour :  
- **Personnalisation des services** : adapter les recommandations, contenus, et fonctionnalités à vos besoins.  
- **Amélioration continue** : analyser les données pour optimiser les performances et l’ergonomie de la plateforme.  
- **Sécurité** : détecter et prévenir les activités frauduleuses ou non autorisées.  
- **Communication** : envoyer des notifications, mises à jour ou messages concernant l’utilisation de Learnia.  
- **Conformité légale** : respecter les obligations réglementaires en vigueur.  

---

### **5. Partage et Divulgation des Données**  

#### **5.1 Partenaires de Confiance**  
Nous collaborons avec des tiers pour fournir nos services :  
- Hébergeurs cloud, prestataires de sécurité informatique, outils de paiement en ligne.  
- Fournisseurs d’analyse pour évaluer et comprendre l’utilisation de Learnia.  

#### **5.2 Conformité Légale**  
Nous pourrions être tenus de divulguer vos données si la loi l’exige ou dans le cadre d’une procédure judiciaire.  

#### **5.3 Publicité et Marketing**  
Nous n’utiliserons vos données à des fins publicitaires qu’avec votre consentement explicite.  

#### **5.4 Transferts Internationaux**  
Dans le cas où vos données doivent être transférées en dehors de votre pays, nous nous assurons qu’elles bénéficient d’un niveau de protection adéquat.  

---

### **6. Sécurité des Données**  
Nous employons des mesures techniques et organisationnelles rigoureuses pour protéger vos données :  
- **Cryptage** : Utilisation de protocoles de cryptage avancés pour toutes les transmissions sensibles.  
- **Authentification** : Accès limité aux données personnelles aux employés autorisés.  
- **Surveillance continue** : Audit régulier des systèmes pour détecter les failles potentielles.  

**Important** : Bien que nous prenions toutes les précautions nécessaires, aucun système n’est entièrement inviolable. En cas de faille de sécurité, nous vous informerons rapidement.  

---

### **7. Durée de Conservation des Données**  
Vos données seront conservées uniquement le temps nécessaire pour atteindre les objectifs décrits dans cette politique, sauf si une période plus longue est requise par la loi. Une fois la période écoulée, les données seront supprimées ou rendues anonymes.  

---

### **8. Vos Droits**  
En tant qu’utilisateur, vous disposez des droits suivants :  
1. **Accès** : Consultez les données personnelles que nous détenons sur vous.  
2. **Rectification** : Demandez la correction d’informations inexactes.  
3. **Suppression** : Exigez la suppression de vos données (sauf obligations légales contraires).  
4. **Limitation** : Restreignez le traitement de vos données dans certaines circonstances.  
5. **Opposition** : Refusez l’utilisation de vos données à des fins spécifiques.  

Pour exercer vos droits, contactez-nous à **privacy@alldotpy.com**.  

---

### **9. Limitation de Responsabilité**  
**AllDotPy** ne saurait être tenue responsable dans les cas suivants :  
- **Utilisation inappropriée** : Si Learnia est utilisée à des fins contraires à la loi ou à son objectif éducatif.  
- **Contenus générés par les utilisateurs** : Les interactions entre utilisateurs ou avec l’IA relèvent de leur seule responsabilité.  
- **Pertes imprévisibles** : Nous ne pouvons être tenus responsables des dommages indirects ou consécutifs, comme la perte de données causée par un tiers.  
- **Force majeure** : Les événements imprévus échappant à notre contrôle (cyberattaques massives, catastrophes naturelles).  

---

### **10. Modifications de la Politique**  
Cette politique peut être modifiée à tout moment pour refléter les évolutions technologiques, réglementaires ou organisationnelles. Toute mise à jour sera signalée via l’application et prendra effet immédiatement après publication.  

---

### **11. Acceptation et Contact**  
En utilisant Learnia, vous acceptez les termes de cette politique de confidentialité. Si vous avez des questions ou préoccupations, contactez-nous à **contact@alldotpy.com**.  

Nous vous remercions de faire partie de la communauté Learnia et de nous faire confiance pour vous accompagner dans votre parcours éducatif. 
`


function formatMarkdown(markdown) {
    // FORMAT THE MARKDOWN DATA WITH A TEMPLATE
    return marked.parse(markdown);
}

