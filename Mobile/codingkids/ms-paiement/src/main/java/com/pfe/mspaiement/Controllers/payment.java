package com.pfe.mspaiement.Controllers;

import com.pfe.mspaiement.Dao.CardRepository;
import com.pfe.mspaiement.Dao.PaimentRepository;
import com.pfe.mspaiement.Dao.ParentRepository;
import com.pfe.mspaiement.Dao.niveauRepository;
import com.pfe.mspaiement.Entities.Card;
import com.pfe.mspaiement.Entities.Paiment;
import com.pfe.mspaiement.Entities.Parent;
import com.pfe.mspaiement.Entities.niveau;
import com.pfe.mspaiement.Model.USER;
import com.pfe.mspaiement.proxy.AuthProxy;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/test")
@CrossOrigin(origins = "http://192.168.8.100:8100")
//@CrossOrigin(origins = "http://192.168.8.101:8100")
public class payment {
    @Autowired
    CardRepository cardRepository;
    @Autowired
    AuthProxy authProxy;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
    @Autowired
    ParentRepository parentRepository;
    @Autowired
    PaimentRepository paimentRepository;
    @Autowired
    niveauRepository niveauRepository;
    private StripeClient stripeClient;

    @Autowired
    payment(StripeClient stripeClient) {
        this.stripeClient = stripeClient;
    }




@PostMapping(value = "/charge/savecard")
public void  Card( @Valid @RequestBody Card card ){
    Card card1=new Card(sequenceGeneratorService.generateSequence(Card.SEQUENCE_NAME),card.getExpmonth(),card.getExpyear(),card.getType(),card.getCvc());
System.out.println(card1);
cardRepository.save(card1);
}














  @PostMapping(value = "/charge", consumes = MediaType.APPLICATION_JSON_VALUE,
          produces = MediaType.APPLICATION_JSON_VALUE)
    public Charge charge(@Valid @RequestBody Parent parent)  throws Exception {
      LocalTime localTime = LocalTime.now();
     System.out.println(parent.getCards());
      System.out.println(parent.getPaiments());

      Card card1=new Card(sequenceGeneratorService.generateSequence(Card.SEQUENCE_NAME),parent.getCards().get(0).getExpmonth(),parent.getCards().get(0).getExpyear(),parent.getCards().get(0).getType(),parent.getCards().get(0).getCvc());
      Parent parentt = parentRepository.findById(parent.getId());
      niveau Niveau = new niveau(sequenceGeneratorService.generateSequence(niveau.SEQUENCE_NAME), parent.getPaiments().get(0).getNiveau().getPrice(), parent.getPaiments().get(0).getNiveau().getName());
      Paiment paiment1 = new Paiment(sequenceGeneratorService.generateSequence(Paiment.SEQUENCE_NAME), parent.getPaiments().get(0).getMontant(), localTime);
      paiment1.setNiveau(Niveau);
      if (parentt != null) {

          parentt.getPaiments().add(paiment1);
          parentt.setAmount(parentt.getAmount() + parent.getAmount());
       parentt.getCards().add(card1);
          parentRepository.save(parentt);

      } else {

          List<Paiment> paimentList = new ArrayList<>();
          List<Card> cardList = new ArrayList<>();

          paimentList.add(paiment1);
          cardList.add(card1);
          Parent parent1 = new Parent(parent.getId(), parent.getToken(), parent.getAmount());
          parent1.setPaiments(paimentList);
          parent1.setCards(cardList);
          parentRepository.save(parent1);

      }

       paimentRepository.save(paiment1);
       niveauRepository.save(Niveau);


       cardRepository.save(card1);




      String token = parent.getToken();
      long amount = parent.getAmount();
        return this.stripeClient.chargeCreditCard(token, amount);
    }


    @GetMapping("/paymentdetails/{id}")
    public Optional<Parent> paymentdetails(@PathVariable("id")Long id) {

        return parentRepository.findById(id);
    }



    @GetMapping("/paymentwithuser")
        public  List<Parent>  getpaymentwithuser(){

        List<Parent> parentList=parentRepository.findAll();
        for (Parent p : parentList) {
         p.setUser(authProxy.getpayment(p.getId()));
         System.out.println(p.getId());
        }

        return parentList;

    }











}
