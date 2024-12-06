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

    #[Route('/cookie')]
    public function cookie(): Response {
        return $this->render('pageCookie.html.twig');
    }
}
