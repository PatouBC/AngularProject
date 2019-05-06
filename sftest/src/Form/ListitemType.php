<?php

namespace App\Form;

use App\Entity\Listitem;
use App\Entity\Tasklist;
use Doctrine\ORM\EntityManager;
use App\Form\DataTransformer\TasklistToNumberTransformer;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ListitemType extends AbstractType
{
    protected $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $transformer= new TasklistToNumberTransformer($this->em);
        $builder
            ->add('label')
            ->add('tasklist', HiddenType::class)

                /*EntityType::class, array(
                'class'=> Tasklist::class,
                'expanded'=>true,
                'multiple'=>false
            ))*/
        ;
        $builder
            ->get('tasklist')
            ->addModelTransformer($transformer)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Listitem::class,
        ]);
    }
}
