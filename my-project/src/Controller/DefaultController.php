<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/", name="accueilClass_")
 */
class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        $random= random_int(0, 1200);
        return $this ->render('default/index.html.twig', array(
            "test"=>$random,
            "tab"=>[2,3,2,3,4,3,5,2],
            "tab_assoc"=>[
                ["id"=>1,"name"=>"toto", "value"=>"totostring"],
                ["id"=>2,"name"=>"tutu", "value"=>"tutustring"]
            ]
        ));
    }
    /**
     * @Route("/toto", name="toto")
     */
    public function toto()
    {
        $random= random_int(0, 1200);
        return $this ->render('default/toto.html.twig', array(
            "test"=>$random
        ));
    }
}