<?php

namespace SoftUniBlogBundle\Controller;

use function PHPSTORM_META\type;
use SoftUniBlogBundle\Entity\Article;
use SoftUniBlogBundle\Form\ArticleType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\HttpFoundation\Request;


class ArticleController extends Controller
{
   public function create(Request $request)
   {
       $article = new Article();
       $form = $this->createForm(ArticleType::class,$article);

       return $this->render('article/create.html.twig',
           array('form' => $form->createView()));

       if ($form->isSubmitted() && $form->isValid()) {
           dump($request->request);
           dump($form);
           $article->setAuthor($this->getUser());
           $em = $this->getDoctrine()->getManager();
           $em->persist($article);
           $em->flush();
           return $this->redirectToRoute('blog_index');
       }
       return $this->render('article/create.html.twig',
           array('form' => $form->createView()));

   }
    /**
     * @Route("/article/{id}", name="article_view")
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function viewArticle($id){
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        return $this->render('article/article.html.twig', ['article' => $article]);
    }
}
