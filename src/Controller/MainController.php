<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController {
    #[Route('/')]
    public function index(): Response {
        return $this->render('home.html.twig');
    }

    #[Route('/podcast')]
    public function podcast(): Response {
        return $this->render('podcast.html.twig');
    }
    #[Route('/podcastEpisode1')]
    public function podcastEpisode1(): Response {
        return $this->render('podcastEpisode1.html.twig');
    }

    #[Route('/podcastEpisode2')]
    public function podcastEpisode2(): Response {
        return $this->render('podcastEpisode2.html.twig');
    }

    #[Route('/cookie')]
    public function cookie(): Response {
        return $this->render('pageCookie.html.twig');
    }

    #[Route('/jeu')]
    public function jeu(): Response {
        return $this->render('jeu.html.twig');
    }
}
