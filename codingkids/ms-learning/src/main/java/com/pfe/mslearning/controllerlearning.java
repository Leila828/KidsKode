package com.pfe.mslearning;

import com.mongodb.BasicDBObject;
import com.pfe.mslearning.entities.Cour;
import com.pfe.mslearning.entities.Faq;
import com.pfe.mslearning.entities.Parent;
import com.pfe.mslearning.entities.level;
import com.pfe.mslearning.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.springframework.web.bind.annotation.RequestMethod.POST;


//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
//@CrossOrigin(origins = "http://192.168.1.21:8100")
@CrossOrigin(origins = "http://localhost:4200")

public class controllerlearning {
    @Autowired
    ParentRepository parentRepository;
    @Autowired
    FaqRepository faqRepository;
    @Autowired
    SequenceGeneratorService sequenceGeneratorService;
@Autowired
    EnfantRepository enfantRepository;
    @Autowired
    CourRepository courRepository;
    @Autowired
    LevelRepository levelRepository;
    //  @RequestMapping(value = "/addProjet", method = RequestMethod.POST)
@GetMapping("/enfant_learning/{id}")
    public Optional<Enfant> enfant(@PathVariable("id")Long id)
    {
    Optional<Enfant> enfant= enfantRepository.findById(id);
    return enfant;

    }
    @GetMapping("/learning")
    public String allAccess() {
        return "some learnings";
    }
    @PostMapping("/info")
    public String save(@Valid @RequestBody  Enfant enfant){
       // List<level> levelList=new List<>();
        List<Cour> courListlevelone=new ArrayList<>();
        List<Cour> courListleveltwo=new ArrayList<>();

        List<level> levelList=new ArrayList<>();


        Cour cour1=new Cour(enfant.getId(),"sequencing",enfant.getPoints2());
        Cour cour2=new Cour(enfant.getId(),"loop",enfant.getPoints());


        Cour courlevel2_1=new Cour(enfant.getId(),"sequencing_blockly",enfant.getPoints_sequencing_blockly());
        Cour courlevel2_2=new Cour(enfant.getId(),"loop_blockly",enfant.getPoints_loop_blockly());
        Cour courlevel2_3=new Cour(enfant.getId(),"condition_blockly",enfant.getPoints_condition_blockly());
        courListlevelone.add(cour1);
       courListlevelone.add(cour2);
        courListleveltwo.add(courlevel2_1);
        courListleveltwo.add(courlevel2_2);
        courListleveltwo.add(courlevel2_3);

        level level1=new level(enfant.getId(),"level1","");
        level level2=new level(enfant.getId(),"level2","");



        level1.setCours(courListlevelone);
        level2.setCours(courListleveltwo);


        levelList.add(level1);
        levelList.add(level2);
        Enfant enfant1=new Enfant(enfant.getId(),enfant.getNom(),enfant.getPoints(),enfant.getPoints2(),enfant.getPoints_sequencing_blockly(),enfant.getPoints_loop_blockly(),enfant.getPoints_condition_blockly());
        enfant1.setLevels(levelList);
        courRepository.save(cour1);
        courRepository.save(cour2);
        courRepository.save(courlevel2_1);
        courRepository.save(courlevel2_2);
        courRepository.save(courlevel2_3);

        levelRepository.save(level1);
        levelRepository.save(level2);

		enfantRepository.save(enfant1);
		return "have been saved ";
    }
    @PostMapping("/initialize/{id}")
    public Enfant initialize(@PathVariable("id")Long id){
        Enfant enfant1=new Enfant(id,null,0,0,0,0,0);
        enfantRepository.save(enfant1);
return  enfant1;
    }

    @PostMapping("/savefaq")
    public void savefaq(@RequestBody Faq faq){
      Faq faqsave=new Faq(sequenceGeneratorService.generateSequence(Faq.SEQUENCE_NAME),faq.getQuestion(),faq.getAnswer(),faq.getLevel());
faqRepository.save(faqsave);
    }
    @GetMapping("/listfaqlevel1")
    public List<Faq> listfaq1(){
    System.out.println(faqRepository.findAllByLevelEquals("level1"));
    return  faqRepository.findAllByLevelEquals("level1");
    }
    @GetMapping("/listfaqlevel2")
    public List<Faq> listfaq2(){
        System.out.println(faqRepository.findAllByLevelEquals("level2"));
        return  faqRepository.findAllByLevelEquals("level2");
    }

    @GetMapping("/leaderboard")
    public List<Enfant> leaderboard() {
        List<Enfant>  enfants=enfantRepository.findAll(Sort.by(Sort.Direction.DESC, "points"));

        return enfants;
    }
    @GetMapping("/leaderboard/level1")
    public List<Enfant> leaderboardlevel1() {
       // List<Enfant>  enfants=enfantRepository.findAll(Sort.by(Sort.Direction.ASC, "points"));

        Sort sort = Sort.by(
                Sort.Order.desc("points"),
                Sort.Order.desc("points2"), Sort.Order.desc("points_sequencing_blockly"), Sort.Order.desc(" points_loop_blockly"), Sort.Order.desc(" points_condition_blockly"));
        return enfantRepository.findAll(sort);

      //  return enfants;
    }


}
