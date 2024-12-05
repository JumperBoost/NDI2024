# Nuit de l'info - Édition 2024
Équipe **Devils May Code Anarchy** (DMCA)

**Sommaire**
>1. [Défis](#défis)
>2. [Prérequis d'utilisation](#prérequis-dutilisation)
>3. [Informations à propos de Composer](#informations-à-propos-de-composer)
>4. [Informations à propos de Symfony](#informations-à-propos-de-symfony)
>5. [Informations à propos du compilateur Sass](#informations-à-propos-du-compilateur-sass)
>6. [Instructions de lancement](#instructions-de-lancement)
>7. [Informations générales](#informations-générales)
>8. [Membres de l'équipe](#membres-de-léquipe)

# Défis
- xx
- xx
- xx
- xx
- xx
- xx

# Prérequis d'utilisation
- **PHP** 8.3.x
- **Symfony** 5.10.x
- Compilateur **Sass** _(ex: [Dart Sass](https://sass-lang.com/))_ avec MAJ auto des fichiers SCSS lors de l'édition _(ex: [File Watchers](https://www.jetbrains.com/help/phpstorm/using-file-watchers.html) de PhpStorm)_
- **Composer** _(avec projet compilé)_

# Informations à propos de Composer
## Prérequis
Avant tout installation et utilisation de Composer, veuillez vérifier dans votre configuration `php.ini` que les extensions suivantes sont activés :
- extension=**curl**
- extension=**mbstring**
- extension=**openssl**
> **Note**: L'extension est activé lorsque le caractère '**;**' n'est pas présent au début de la ligne.

## Installation
### Windows
[Télécharger](https://getcomposer.org/Composer-Setup.exe) et installer l'exécutable en suivant les instructions demandées.

### Linux
Ouvrir un terminal et exécuter les commandes suivantes dans un répertoire avec les accès total (lecture/écriture/exécution) :
```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer   # Déplace l'exécutable composer dans l'environnement système
```

## Compilation
### PhpStorm
Ouvrir le fichier [composer.json](composer.json) dans l'IDE. Une boîte d'information s'affiche vers le haut avec trois boutons :
- **Install**: Compiler le projet composer pour la première fois (un fichier `composer.lock` se crée, empêchant sa création de nouveau);
- **Update**: Mettre à jour le projet composer (si `composer.json` a été mis à jour);
- **Show log**: Afficher les logs de composer.

Si le projet composer n'a jamais été compilé, compiler le en cliquant sur **Install**.

### Manuellement
Ouvrir un terminal dans le répertoire courant et exécuter la commande voulu :
- **composer install**: Compiler le projet composer pour la première fois (un fichier `composer.lock` se crée, empêchant sa création de nouveau);
- **composer update**: Mettre à jour le projet composer (si `composer.json` a été mis à jour).

Si le projet composer n'a jamais été compilé, compiler le en exécutant la commande `composer install`.

> **Remarque**: L'environnement composer du projet étant configuré pour charger automatiquement les classes (PSR-4), il n'est pas nécessaire d'importer manuellement.

## Vérification
Exécuter dans un terminal la commande suivante pour vérifier si l'installation est correcte :
```bash
composer check-platform-reqs
```
Cette commande ne doit renvoyer que des succès. Dans le contraire, vérifiez que toutes les extensions requises sont activés et installés.

# Informations à propos de Symfony
## Installation
### Windows
[Télécharger](https://github.com/symfony-cli/symfony-cli/releases/download/v5.10.5/symfony-cli_windows_amd64.zip) le zip, décompresser et extraire le contenu dans un dossier. Ce dernier doit être ajouté aux [variables environnement système](https://katiek2.github.io/path-doc/).

### Debian/Ubuntu
Ouvrir un terminal et exécuter les commandes suivantes avec les accès administrateur :
```bash
curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | sudo -E bash
sudo apt install symfony-cli
```

### Linux
Ouvrir un terminal et exécuter les commandes suivantes avec les accès administrateur :
```bash
curl -sS https://get.symfony.com/cli/installer | bash
```

## Vérification
Exécuter dans un terminal la commande suivante pour vérifier si l'installation est correcte :
```bash
symfony check:requirements
```
Cette commande ne doit renvoyer qu'un message **[OK]** en vert, indiquant que le système est prêt à exécuter des projets Symfony. Dans le cas contraire, appliquez les suggestions proposées par Symfony.

# Informations à propos du compilateur Sass
## Installation
[Télécharger](https://github.com/sass/dart-sass/releases/) l'archive correspondant à votre OS, extraire puis l'ajouter aux [variables environnement système](https://katiek2.github.io/path-doc/).
Vous pourrez à partir de ce moment-là configurer le compilateur Sass avec PhpStorm, comme expliqué en tête.


# Instructions de lancement
Vérifiez tout d'abord que tous les prérequis soient respectés. Il est obligatoirement nécessaire que la structure de base soit fonctionnelle.
L'accès à l'application web se fait par l'intermédiaire du serveur web de Symfony, via le port `8000` _(http://localhost:8000/)_.

## Méthode manuel
Exécuter dans un terminal à part la commande suivante pour démarrer le serveur web :
```bash
symfony serve
```
> **Remarque**: Le serveur web est censé s'éteindre automatiquement dès la fin d'exécution de la commande précédente. Cependant, sous Windows, `PHP-CGI` peut éventuellement refuser de se fermer. Il sera alors nécessaire de forcer l'arrêt du serveur web pour pouvoir le réutiliser, via la commande suivante : `symfony server:stop`.

## Méthode semi-automatique
Sous PhpStorm, la solution semi-automatique de lancer facilement le serveur web (et régler le problème du mode manuel) est de créer une configuration d'exécution personnalisée à partir d'un [template](https://www.jetbrains.com/help/phpstorm/run-debug-configuration.html#templates) de script Shell, ainsi qu'un [outil externe](jetbrains://PhpStorm/settings?name=Tools--External+Tools) (File | Settings | Tools | External Tools). Ce script contiendrait un shell texte dans lequel il lancera le serveur, avec cet outil externe en 'Before launch' qui fermera le serveur. L'inverse est aussi possible, à votre guise.

# Informations générales
L'organisation du dépôt se fait sous l'architecture [MVC](https://fr.wikipedia.org/wiki/Mod%C3%A8le-vue-contr%C3%B4leur) :
- [src/Entity](src/Entity) représente les **M**odèles de l'application
- [templates](templates) représente les **V**ues de l'application
- [src/Controller](src/Controller) représente les **C**ontrôleurs de l'application

> **Remarque**: Les vues sont sous la forme [.twig](https://twig.symfony.com/). Twig est un moteur de template optimisé pour PHP et issu de Symfony. Cette extension ressemble globalement à du HTML, mais contient des fonctionnalités supplémentaires.
> De plus, [assets](assets) représente les différents fichiers externes, nécessaire à l'utilisation du site internet. L'utilisation de l'asset dans le template se fait de cette façon : `{{ asset('nomDuFichierDepuisAssets') }}`.

# Membres de l'équipe
- Milwenn FRANCEUS--COINTREL
- Julien RENAUD
- Alexandre DESCHANEL
- Héloïse RIGAUX
- Badis SAAD
- Nathan Raphaël LOPEZ-ROJAS

___
**Lien vers la page: https://ndi2024.jumperboost.fr/**

Documentation Symfony: https://symfony.com/doc/current/index.html

Documentation Twig: https://twig.symfony.com/doc/3.x/

Documentation Bootstrap: https://getbootstrap.com/docs/5.0/customize/overview/